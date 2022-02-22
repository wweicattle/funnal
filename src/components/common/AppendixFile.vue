<template>
  <div class="dialog-page partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>所有附件</span>
        <span>/LEADER APPROVAL</span>
      </p>
      <div class="upload-btn">
        <span class="spe-text">* 图片可双击查看</span>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-delete"
          @click="deleteFile"
          >删除</el-button
        >
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="uploadFileBtn"
          >上传</el-button
        >
        <!-- <el-button size="mini" icon="el-icon-view">查看</el-button> -->
        <el-button size="mini" icon="el-icon-download" @click="downLoadFile"
          >存到本地</el-button
        >
        <!-- <el-button size="mini">设置格式</el-button> -->
      </div>
    </div>
    <div class="d-box">
      <el-table
        ref="multipleTable"
        :data="imgDate"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        size="small"
        :header-cell-style="{ background: '#F6F7F9' }"
        @cell-dblclick="cellClickDbBtn"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="文件名"></el-table-column>
        <el-table-column prop="type" label="类别" width="80"></el-table-column>
        <el-table-column
          prop="filesize"
          label="大小字节"
          width="80"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="modified"
          label="修改时间"
          width="150"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="description"
          label="概述"
          show-overflow-tooltip
        ></el-table-column>
      </el-table>
    </div>

    <el-dialog
      id="upload"
      title="上传图片"
      :visible.sync="dialogVisible"
      width="30%"
      :modal="false"
      :before-close="handleCloses"
      :close-on-click-modal="false"
    >
      <input
        ref="uploadInp"
        type="file"
        id="file"
        @change="fileChange"
        style="width: 0; height: 0"
        v-if="dialogVisible"
        multiple
      />

      <p class="upload-tips">
        请您选择补传附件的节点，并选择好相应文件然后点击完成按钮上传
      </p>
      <div class="basic-c radioL">
        <span class="tit">节点</span>
        <div class="val">
          <el-select v-model="nodeSelectVal" placeholder="请选择">
            <el-option
              v-for="item in nodeDatas"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="basic-c radioL">
        <span class="tit">附件类型</span>
        <div class="val">
          <el-select v-model="appendtypeVal" placeholder="请选择">
            <el-option
              v-for="item in appendTypsDatas"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- <div class="basic-c radioL">
        <el-upload
          action=""
          class="upload-demo"
          drag
          :http-request="uploadSectionFile"
          :show-file-list="false"
          :before-upload="uploads"
            :file-list="fileList"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div> -->
      <div class="basic-c radioL">
        <span class="tit">请选择文件</span>
        <div class="val">
          <el-input v-model="uploadInfo.fileName" readonly></el-input>
          <button @click="openFile" class="open-files">浏览文件</button>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="fileSave">完成</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import SparkMD5 from 'spark-md5';
import {
  getFiles,
  compositeFiles,
  updateFile,
  deleteFile
} from '@/network/file';
import { getNodeDatas, getAppendixs } from '@/network';
import { Loading } from 'element-ui';
import { mapState } from 'vuex';
export default {
  name: 'UploadFile',
  data() {
    return {
      dialogVisible: false,
      multipleSelection: [],
      imgDate: [],
      uploadInfo: {},
      options: [],
      value: '',
      nodeDatas: [],
      appendTypsDatas: [],
      nodeSelectVal: '填写审批表',
      appendtypeVal: '店租合同',
      selectIndex: 0,
      multipleSelection: [],
      fileList: [],
      sendFileNum: [],
      downloadIndex: 1,
      clickmodel:false
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userData.userInfo,
      urlData: (state) => state.userData.urlData
    })
  },
  mounted() {
    this.init();
    // 获取节点信息
    this.getNodeDatas();
  },
  watch: {
    dialogVisible: {
      handler(val) {
        if (!val) {
          this.uploadInfo = {};
        }
      }
    },
    nodeSelectVal: {
      handler(newVal) {
        let selVal = this.nodeDatas.find((val) => {
          return val.mc == newVal;
        });
        this.appendtypeVal = selVal.data[0].mc;
        this.appendTypsDatas = selVal.data;
      }
    },
    downloadIndex(newVal) {
      if (newVal != 1) {
        console.log('zheshi ' + this.downloadIndex);
        // 请求下一个文件
        this.fileSave();
      }
    }
  },
  methods: {
    handleCloses() {
      console.log(2222222);
      this.dialogVisible=false;
      this.sendFileNum = [];
    },
    async symbolFile(file) {
      try {
        var blobSlice =
          File.prototype.slice ||
          File.prototype.mozSlice ||
          File.prototype.webkitSlice;
        // let file = this.uploadInfo.file;
        let fileSize = file.size;
        let chunkSize = 5 * 1024 * 1024;
        let chunks = Math.ceil(fileSize / chunkSize);
        // 取出文件的md5
        let md5 = await this.getMd5(file);
        let obj = { chunkCount: chunks, fileMd5: md5 };
        getFiles(obj).then(async (da) => {
          // 向接口发送切片
          if (da.data.errcode == 1) {
            let data = da.data.data;
            for (let item of data) {
              let start = (item.partNumber - 1) * chunkSize;
              //分片结束位置
              let end = Math.min(fileSize, start + chunkSize);

              await this.$axios
                .put(item.uploadUrl, blobSlice.call(file, start, end))
                .then((res) => {
                  console.log('第' + item.partNumber + '个分片上传完成');
                  // loadingInstance.setText(
                  //   `正在上传${Math.floor((item.partNumber / chunks) * 100)}%`
                  // );
                  if (chunks == item.partNumber) {
                    // 上传完成请求合并文件
                    // loadingInstance.setText(`正在合并`);
                    let obj = {
                      fileMd5: md5,
                      fileName: Date.now() + file.name,
                      bucketName: 'pics',
                      filePackage: 'merge/jmsp',
                      flag: 2,
                      fileSize: file.size,
                      fileType: file.type,
                      id: this.urlData.id,
                      userName: this.userInfo.username,
                      description: this.appendtypeVal,
                      name: file.name
                    };
                    this.compositeFiles(obj);
                  }
                });
            }
          } else if (da.data.errcode == 0) {
            // 切片上传完成，需要合并
            // console.log('完成上传');
            // loadingInstance.setText(`正在合并`);
            let obj = {
              fileMd5: md5,
              fileName: Date.now() + file.name,
              bucketName: 'pics',
              filePackage: 'merge/jmsp',
              flag: 2,
              fileSize: file.size,
              fileType: file.type,
              id: this.urlData.id,
              userName: this.userInfo.username,
              description: this.uploadInfo.description,
              name: file.name
            };
            this.compositeFiles(obj);
            //
          } else {
            // error
            this.$message.error(da.data);
          }
        });
      } catch (error) {
        return this.$message.error(error);
      }
    },

    uploads(parmas) {
      console.log(parmas);
    },
    uploadSectionFile(params) {
      // console.log(params);
    },
    uploadFileBtn() {
      if (this.urlData.id == 0 || !this.urlData.id)
        return this.$message.info('暂无权限上传！');
      this.dialogVisible = true;
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteFile() {
      if (this.multipleSelection.length > 1) {
        this.$message.info('只可删除一项，请重新选择!');
        return this.$refs.multipleTable.clearSelection();
      }
      this.loading = this.$Loading.service({
        fullscreen: true
      });
      // this.$message.info('暂无删除接口！');
      this.$confirm('是否确认删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 删除附件
          let { fileName, UNID } = this.multipleSelection[0];
          let parmas = {
            tzid: 1,
            unid: UNID,
            id: this.urlData.id,
            flag: 2,
            uploadUrl: fileName
          };
          deleteFile(parmas).then((da) => {
            this.loading.close();
            if (da.data.errcode == 0) {
              this.$Message.success('删除成功！');
              this.init();
            } else {
              this.$Message.error(da.data.errmsg);
              return;
            }
            // this.$message.info("暂无接口删除！")
          });
        })
        .catch(() => {
          this.$message.info('你已取消！');  
            this.loading.close();
        });
    },
    cellClickDbBtn(val, column, cell, event) {
      if (event.target.className === 'el-checkbox__inner') return;
      // 图片格式
      const imglist = [
        'png',
        'jpg',
        'jpeg',
        'bmp',
        'gif',
        'webp',
        'psd',
        'svg',
        'tiff'
      ];
      if (imglist.includes(val.name.split('.')[1])) {
        // 是图片文件
        window.open(val.fileName);
      }
    },
    getNodeDatas() {
      getNodeDatas().then((da) => {
        if (da.data.errcode == 0) {
          let data = da.data.data;
          // 处理接口返回数据
          this.nodeDatas = data;
          this.appendTypsDatas = this.nodeDatas[3].data;
          console.log(this.appendTypsDatas);
        } else {
          this.$Message.error('删除失败！' + da.data.errmsg);
        }
      });
    },
    init() {
      // getAppendixs(1).then(res => {
      getAppendixs(this.urlData.id)
        .then((res) => {
          if (res.data.errcode == 0) {
            res.data.data.forEach((item) => {
              item.filesize = this.getFileSize(item.filesize);
            });
            this.imgDate = res.data.data;
            // console.log(this.imgDate);
          } else {
            this.$message.error(res.data.errmsg || '发生了错误');
          }
        })
        .catch((err) => {
          this.$message.error(res.data.errmsg || '发生了错误');
        });
    },
    openFile() {
      if (this.uploadInfo.file) {
        this.uploadInfo.file = [];
      }
      this.$refs.uploadInp.dispatchEvent(new MouseEvent('click'));
    },
    fileChange(e) {
      this.uploadInfo.file = e.target.files;
      let filname=Array.from(this.uploadInfo.file).reduce((acc,val,index)=>{
        return acc+val.name+",";
      },"")
      this.$set(this.uploadInfo, 'fileName', filname);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async compositeFiles(obj) {
      const options = {
        text: '正在提交',
        spinner: 'el-icon-loading',
        lock: true
      };
      this.loadingInstance = Loading.service(options);
      try {
        // console.log(obj);
        const res = await compositeFiles(obj);
        if (res.data.errcode == 0) {
          if (this.sendFileNum.length == this.uploadInfo.file.length - 1) {
            this.$message({
              message: '上传成功',
              type: 'success'
            });
            this.loadingInstance.close();
            // 更新附件
            this.init();
            this.dialogVisible = false;
            this.sendFileNum = [];
            this.downloadIndex = 1;
          } else {
            this.downloadIndex = this.downloadIndex + 1;
            this.sendFileNum.push(1);
          }
          return 'success';
          // return;
          // let da = {
          //   flag: 2,
          //   userName: this.userInfo.username,
          //   id: this.urlData.id,
          //   description: this.appendtypeVal,
          //   uploadUrl: res.data.data.uploadUrl,
          //   tzid:this.userInfo.userssid,
          //   // unid:"323"

          // };
          // // 保存上传的图片信息
          // updateFile(da).then((da) => {
          //   if (da.data.errcode == 0) {
          //     //  如果当前是最后一个文件上传成功后，发的接口请求那么就显示上传成功了

          //   } else {
          //     return this.$message.error('上传信息保存失败！请重试');
          //   }
          // });
        } else {
          this.loadingInstance.close();
          this.$message.error(res.data.errcode || '发生了错误');
          this.sendFileNum = [];
          this.uploadInfo.file = [];
        }
      } catch (err) {
        this.loadingInstance.close();
        this.$message.error('发生了错误');
        this.sendFileNum = [];
        this.uploadInfo.file = [];
      }
    },
    async getMd5(file) {
      return new Promise((val) => {
        let spark = new SparkMD5.ArrayBuffer();
        let reader = new FileReader();
        reader.onload = function (e) {
          spark.append(reader.result);
          let MD5 = spark.end();
          val(MD5);
        };
        reader.readAsArrayBuffer(file);
      });
    },
    async fileSave() {
      if (!this.uploadInfo.file) {
        this.$message.error('请先选择文件');
        return;
      }
      const options = {
        text: '正在上传文件',
        // customClass: 'login_loading',
        spinner: 'el-icon-loading',
        lock: true
      };
      this.loadingInstance = Loading.service(options);
      // 上传所有文件
      this.symbolFile(this.uploadInfo.file[this.downloadIndex - 1]);
    },
    handleClose(done) {
      this.$emit('closeDialog');
    },
    getFileSize(limit) {
      var size = '';
      if (limit < 0.1 * 1024) {
        //小于0.1KB，则转化成B
        size = limit.toFixed(2) + 'B';
      } else if (limit < 0.1 * 1024 * 1024) {
        //小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + 'KB';
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {
        //小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + 'MB';
      } else {
        //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
      }

      var sizeStr = size + ''; //转成字符串
      var index = sizeStr.indexOf('.'); //获取小数点处的索引
      var dou = sizeStr.substr(index + 1, 2); //获取小数点后两位的值
      if (dou == '00') {
        //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
      }
      return size;
    },
    // 文件下载
    downLoadFile() {
      if (this.multipleSelection.length == 0) {
        this.$message.error('请选择要下载的文件');
        return;
      }
      const list = [...this.multipleSelection];
      for (let i in list) {
        this.hanlderDownload(list[i].fileName, list[i].name);
      }
    },
    // 文件下载 解决直接在浏览器打开
    hanlderDownload(url, file_name) {
      console.log(url);
      const link = document.createElement('a');
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          // 将链接地址字符内容转变成blob地址
          link.href = URL.createObjectURL(blob);
          link.download = file_name;
          link.target = '_blank';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    }
  }
};
</script>

<style scoped lang="scss">
/deep/ .table-header {
  background: var(--nosle-text-color);
}

.upload-btn {
  margin-left: auto;
  .spe-text {
    color: red;
    padding-right: 10px;
  }
}

.dialog-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 100px;
  }
}
.basic-c {
  position: relative;
  .val {
    display: flex;
  }
  button {
    width: 90px;
    background: transparent;
    border: 0;
    color: var(--sle-text-color);
  }
}
.upload-tips {
  position: relative;
  color: #f13e3e;
  margin-bottom: 14px;
  &::before {
    content: '*';
    left: 0;
    margin-right: 5px;
  }
}
/deep/ .el-table {
  font-size: inherit;
  width: 100%;
  min-height: 300px;
  td.el-table__cell,
  th.el-table__cell.is-leaf {
    border: none !important;
  }
  .el-table__row--striped {
    background: var(--main-back);
  }
  thead {
    .el-table-column--selection {
      padding-left: 4px;
    }
  }
  &::before {
    height: 0;
    width: 0;
  }
  .el-table__body-wrapper {
    height: 340px;
    overflow-y: scroll;
    @extend .scroll;
  }
}
/deep/ .el-dialog__wrapper {
  .el-dialog__header {
    border-bottom: 1px solid #f1efef;
  }
  .el-dialog__body {
    padding-top: 5px;
  }
}
.scroll {
  &::-webkit-scrollbar {
    // 滚动条的背景
    width: 16px;
    background: inherit;
    height: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    width: 20px;
    border: 5px solid transparent;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px #fff;
  }

  &::-webkit-scrollbar-thumb {
    //滚动条的滑块样式修改
    width: 20px;
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px #999 inset;
  }
}
.radioL {
  .val {
    .open-files {
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>

