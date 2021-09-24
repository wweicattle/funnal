<template>
  <div class="company-approval">
    <div class="primary-page">
      <div class="salesman">
        <div class="sContent">
          <ul class="ul-content">
            <li>
              <span>是否同意该店开业：</span>
              <el-radio-group v-model="form.opinion">
                <el-radio label="1">同意</el-radio>
                <el-radio label="0">不同意</el-radio>
              </el-radio-group>
            </li>
            <li>
              <span>该店是经销商开第：</span>
              <el-input></el-input>
              <span class="clearWidth">个店/厅</span>
            </li>
            <li>
              <span>主要实际经营者：</span>
              <el-input></el-input>
            </li>
            <li>
              <span>该店营业执照法人：</span>
              <el-input></el-input>
              <span class="clearWidth">原因：</span>
              <el-input style="width:260px"></el-input>
            </li>
            <li class="li-flex">
              <span>装修档次要求：</span>
              <div class="txt-box">
                <el-radio-group v-model="form.grade">
                  <el-radio disabled label="0">LILANZ 利郎六代正常装修（县城街边店、地级市/省会社区街边店</el-radio>
                  <el-radio disabled label="1">LILANZ 利郎六代正常装修升级版（县城街边店、地级市/省会社区街边店）</el-radio>
                  <el-radio disabled label="2">LILANZ 利郎二代精品装修（地级市/省会：商场、购物中心MALL）</el-radio>
                  <el-radio disabled label="3">LESS IS MORE（轻商务）</el-radio>
                  <el-radio label="4">LESS IS MORE（二代轻商务）</el-radio>
                  <el-radio label="5">LILANZ 利郎七代装修 </el-radio>
                </el-radio-group>
              </div>
            </li>
            <li>
              <span>其他意见：</span>
              <el-input></el-input>
            </li>
          </ul>
        </div>
        <div class="sign">
          <p><span>贸易公司分管销售总监同意以上条款签署:</span>
            <span class="sign-name"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        opinion: "",
        grade: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.company-approval {
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  background-color: var(--main-color);
  .primary-page {
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 1px 15px 2px rgba(222, 222, 222, 0.2);
    padding: 5px 30px;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    .salesman {
      padding-top: 20px;
      .node {
        background-color: #f0f7ff;
        color: var(--sle-text-color);
        font-size: 16px;
        font-weight: 500;
        padding: 7px 0;
        padding-left: 20px;
      }
      .sContent {
        & > p {
          margin: 10px 0 10px 20px;
          line-height: 20px;
        }
        .txt-sketch {
          color: #f13e3e;
        }
        .txt-content {
          line-height: 28px;
          color: #595959;
          > span {
            font-weight: 600;
            text-decoration: underline;
          }
        }
        .ul-content {
          line-height: 20px;
          & > li > span {
            margin: 10px 10px 10px 20px;
            display: inline-block;
            width: 126px;
            text-align: right;
          }
          .li-flex {
            display: flex;
            align-items: flex-start;
          }
          .clearWidth {
            display: inline;
          }
          .txt-box {
            display: inline-block;
            flex: 1;
            padding-top: 10px;
            .box-content {
              margin-bottom: 10px;
              color: var(--text-color);
              > span {
                color: #999999;
              }
            }
            /deep/ .el-radio{
              display: block;
              margin-bottom: 10px;
              line-height: 20px;
            }
          }
          // element-UI重写
          /deep/ .el-input {
            height: 28px;
            width: 160px;
            border: 1px solid #ececec;
            .el-input__inner {
              height: 100%;
              line-height: 24px;
              padding: 0 5px;
              border-radius: 0%;
            }
          }
        }
      }
      .sign {
        text-align: right;
        margin-top: 20px;
        color: var(--text-color);
        font-weight: 600;
        > p {
          margin-bottom: 9px;
        }
        .sign-name {
          display: inline-block;
          border-bottom: 1px solid var(--text-color);
          width: 145px;
          margin-left: 7px;
        }
      }
    }
  }
}
</style>