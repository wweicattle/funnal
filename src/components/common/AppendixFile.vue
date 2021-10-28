<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>附件模块</span>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
        dicta.
      </div>

      <div>
        <input type="file" id="file" @change="fileChange" />
        <!-- <el-upload
          class="upload-demo"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload> -->
      </div>
      <div></div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import SparkMD5 from 'spark-md5';
import { getFiles, sendFile, compositeFiles } from '@/network/file';
export default {
  data() {
    return {
      dialogVisible: true
    };
  },
  created() {
    console.log(21323323);
  },
  mounted() {},
  methods: {
    compositeFiles(obj) {
      compositeFiles(obj).then(da=>{
        console.log(da);
      })
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
    async fileChange(e) {
      var blobSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice;
      let file = e.target.files[0];
      let fileSize = file.size;
      let chunkSize = 5 * 1024 * 1024;
      let chunks = Math.ceil(fileSize / chunkSize);
      // 取出文件的md5
      let md5 = await this.getMd5(file);
      let obj = { chunkCount: chunks, fileMd5: md5 };
      console.log(obj);
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
                if (chunks == item.partNumber) {
                  console.log('上传完成开始合并');
                  // 上传完成请求合并文件

                  // this.compositeFiles();
                }
              });
            // console.log("开始上传第" + item.partNumber + "个分片")
            // await sendFile({
            //   api: item.uploadUrl,
            //   file: blobSlice.call(file, start, end)
            // }).then((res) => {
            //   console.log('第' + item.partNumber + '个分片上传完成');
            // });
          }

          // data.forEach(async (element, index) => {
          //   let start = (element.partNumber - 1) * chunkSize;
          //   //分片结束位置
          //   let end = Math.min(fileSize, start + chunkSize);
          //   console.log(start, end);
          //   let a = await this.sendFile({
          //     api: element.uploadUrl,
          //     file: blobSlice.call(file, start, end)
          //   });
          //   if (a.api) {
          //     console.log(a);
          //   }
          //   // send api
          //   // sendFile({
          //   //   api: element.uploadUrl,
          //   //   file: blobSlice.call(file, start, end)
          //   // }).then((da) => {
          //   //   console.log(da);
          //   // });
          // });
        } else if (da.data.errcode == 0) {
          // 切片上传完成，需要合并
          console.log('完成上传');
          let obj = {
            fileMd5: md5,
            fileName: Date.now()+file.name,
            bucketName: 'pics',
            filePackage: 'merge/jmsp',
            flag: 2,
            fileSize: file.size,
            fileType: file.type,
            id: '1',
            userName: '利郎(中国)有限公司加盟申请人',
            description: file.name,
            name: '图片3.jpg'
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
    }
  }
};
</script>

<style scoped lang="scss">
.el-dialog {
  // position: relative;
  // z-index: 9999;
}
</style>
