<template>
  <div>
    <box-contain>
      <div class="subsidy-contain">
        <ul>
          <li>
            <div class="tit">
              <img src="static/img/goods1.png" alt="" />
              <span class="name">出货额</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
         <li>
            <div class="tit">
              <img src="static/img/goods2.png" alt="" />
              <span class="name">回额款</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">
              <img src="static/img/goods3.png" alt="" />
              <span class="name">补贴金额</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">
              <img src="static/img/goods4.png" alt="" />
              <span class="name">未补贴金额</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  mounted() {},
  methods: {},
  components: {
    BoxContain
  }
};
</script>

<style scoped lang="scss">
.subsidy-contain {
  padding: 0 15px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49.2%;
      margin-bottom: 15px;
      border-radius: 4px;
      padding: 6px 10px;
      border: 1.4px solid var(--line-color);
      .tit {
        height: 30px;
        // border: 1px solid #ccc;
        display: flex;
        align-items: center;
        img {
          height: 80%;
        }
        .name {
          padding-left: 6px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-color);
        }
      }
      .val {
        .text{
          margin: 20px 0;
          display: flex;
          .attr{
            text-align: right;
            width: 100px;
            margin-right: 14px;
          }
          .attr-val{
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
