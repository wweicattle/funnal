<template>
  <div class="dialog-page partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>所有附件</span>
        <span>/LEADER APPROVAL</span>
      </p>
      <div class="upload-btn">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">上传</el-button>
        <el-button size="mini" icon="el-icon-view">查看</el-button>
        <el-button size="mini" icon="el-icon-download" @click="downLoadFile">存到本地</el-button>
        <!-- <el-button size="mini">设置格式</el-button> -->
      </div>
    </div>
    <div class="d-box">
      <el-table ref="multipleTable" :data="imgDate" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" size="small" :header-cell-style="{ background: '#F6F7F9' }">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="文件名"></el-table-column>
        <el-table-column prop="type" label="类别" width="80"></el-table-column>
        <el-table-column prop="filesize" label="大小字节" width="80" show-overflow-tooltip></el-table-column>
        <el-table-column prop="modified" label="修改时间" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" label="概述" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <div>
      <input ref="uploadInp" type="file" id="file" @change="fileChange" style="width:0;height:0;" />
    </div>

    <el-dialog title="上传图片" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" :modal="false">
      <p class="upload-tips">请您选择补传附件的节点，并选择好相应文件然后点击完成按钮上传</p>
      <div class="basic-c radioL">
        <span class="tit">节点</span>
        <div class="val">
          <el-input></el-input>
        </div>
      </div>
      <div class="basic-c radioL">
        <span class="tit">附件类型</span>
        <div class="val">
          <el-input v-model="uploadInfo.type"></el-input>
        </div>
      </div>
      <div class="basic-c radioL">
        <span class="tit">请选择文件</span>
        <div class="val">
          <el-input v-model="uploadInfo.fileName" readonly></el-input>
          <button @click="openFile">浏览文件</button>
        </div>
      </div>
      <div class="basic-c radioL">
        <span class="tit">概述</span>
        <div class="val">
          <el-input v-model="uploadInfo.description"></el-input>
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
import { getAppendixs, getFiles, compositeFiles, updateFile } from '@/network/file';
import { Loading } from 'element-ui';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      dialogVisible: false,
      multipleSelection: [],
      imgDate: [],
      uploadInfo: {},
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userData.userInfo,
      urlData: (state) => state.userData.urlData,
    })
  },
  mounted() {
    this.init()
  },
  watch: {
    dialogVisible: {
      handler(val) {
        if (!val) {
          this.uploadInfo = { name: '附件' }
        }
      }
    },
  },
  methods: {
    init() {
      getAppendixs(1).then(res => {
        if (res.data.errcode == 0) {
          res.data.data.forEach(item => {
            item.filesize = this.getFileSize(item.filesize)
            item.type = '附件'
          })
          this.imgDate = res.data.data
        } else {
          this.$message.error(res.data.errcode || '发生了错误');
        }
      }).catch(err => {
        this.$message.error(res.data.errcode || '发生了错误');
      })
    },
    openFile() {
      this.$refs.uploadInp.dispatchEvent(new MouseEvent('click'))
    },
    fileChange(e) {
      if (this.uploadInfo.file) {
        delete this.uploadInfo.file
      }
      this.uploadInfo.file = e.target.files[0]
      this.$set(this.uploadInfo, 'fileName', e.target.files[0].name)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
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
        lock: true,
      };
      const loadingInstance = Loading.service(options);
      try {
        const res = await compositeFiles(obj)
        if (res.data.errcode == 0) {
          const updateRes = await updateFile({
            uploadUrl: res.data.data.uploadUrl,
            flag: 2,
            id: this.urlData.id,
            description: this.uploadInfo.description,
            userName: this.userInfo.username
          })
          if (updateRes.data.errcode == 0) {
            loadingInstance.close();
            this.imgDate = []
            this.uploadInfo = {}
            this.dialogVisible = false
            this.init()
            this.$message({
              message: '上传成功',
              type: 'success'
            });
          } else {
            loadingInstance.close();
            this.$message.error(res.data.errcode || '发生了错误');
          }
        } else {
          loadingInstance.close();
          this.$message.error(res.data.errcode || '发生了错误');
        }
      }
      catch (err) {
        loadingInstance.close();
        this.$message.error('发生了错误');
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
    async sendFile(ss) {
      return new Promise((val) => {
        setTimeout(() => {
          val(ss);
        }, 3000);
      });
    },
    async fileSave() {
      var blobSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice;
      let file = this.uploadInfo.file;
      let fileSize = file.size;
      let chunkSize = 5 * 1024 * 1024;
      let chunks = Math.ceil(fileSize / chunkSize);
      // 取出文件的md5
      let md5 = await this.getMd5(file);
      let obj = { chunkCount: chunks, fileMd5: md5 };
      const options = {
        text: '正在上传文件',
        // customClass: 'login_loading',
        spinner: 'el-icon-loading',
        lock: true,
      };
      const loadingInstance = Loading.service(options);
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
                loadingInstance.setText(`正在上传${Math.floor(item.partNumber / chunks * 100)}%`);
                if (chunks == item.partNumber) {
                  console.log('上传完成开始合并');
                  // 上传完成请求合并文件
                  loadingInstance.setText(`正在合并`);
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
                }
              });
          }
        } else if (da.data.errcode == 0) {
          // 切片上传完成，需要合并
          console.log('完成上传');
          loadingInstance.setText(`正在合并`);

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
          this.compositeFiles(obj)
          //
        } else {
          // error
        }
      });
    },
    handleClose(done) {
      this.$emit('closeDialog');
    },
    getFileSize(limit) {
      var size = "";
      if (limit < 0.1 * 1024) {                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
      } else if (limit < 0.1 * 1024 * 1024) {            //小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + "KB"
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {        //小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB"
      } else {                                            //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
      }

      var sizeStr = size + "";                        //转成字符串
      var index = sizeStr.indexOf(".");                    //获取小数点处的索引
      var dou = sizeStr.substr(index + 1, 2)            //获取小数点后两位的值
      if (dou == "00") {                                //判断后两位是否为00，如果是则删除00                
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
      }
      return size;
    },
    // 文件下载
    downLoadFile() {
      if (this.multipleSelection.length == 0) {
        this.$message.error('请选择要下载的文件')
        return
      }
      const list = [...this.multipleSelection]
      for (let i in list) {
        let aEle = document.createElement('a');
        aEle.download = list[i].name;
        aEle.target = '_blank';
        aEle.href = list[i].fileName;
        aEle.click()
        aEle.remove();
      }

    },
  }
};
</script>

<style scoped lang="scss">
/deep/ .table-header {
  background: var(--nosle-text-color);
}

.upload-btn {
  margin-left: auto;
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
    content: "*";
    left: 0;
    margin-right: 5px;
  }
}
/deep/ .el-table {
  font-size: inherit;
  width: 100%;
  min-height: 100px;
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
}
</style>

