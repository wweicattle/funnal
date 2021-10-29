<template>
  <div class="address-contain" :key="timestamp">
    <div class="birth">
      <div class="basic-c content">
        <span
          class="tit"
          :style="{ width: widthtit ? widthtit + 'px' : '126px' }"
          >{{ addressName }}</span
        >
        <div class="val">
          <el-select
            v-model="shen_id"
            placeholder="请选择"
            @change="proviceChange"
            clearable
            @clear="clearPro"
          >
            <el-option
              v-for="item in shengValues"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            ></el-option> </el-select
          ><span class="add-tit">省</span>
          <el-select
            v-model="shi_id"
            placeholder="请选择"
            @change="cityChange"
            clearable
            @clear="clearCity"
          >
            <el-option
              v-for="item in shiValues"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="add-tit">市</span>
          <el-select v-model="xian_id" placeholder="请选择" clearable>
            <el-option
              v-for="item in xianValues"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="add-tit">县</span>
          <el-input v-model="desAttr" placeholder="详细地址"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shengValues, {
  findCity,
  findCountry,
  changeValue
} from '@/utils/Provice.js';
export default {
  name: 'Address',
  data() {
    return {
      timestamp: Date.now(),
      desAttr: '',
      shen_id: '',
      shi_id: '',
      xian_id: '',
      shiValues: [],
      xianValues: [],
      shengValues
    };
  },
  created() {
    console.log(222222222);
  },
  mounted() {},
  methods: {
    clearPro() {
      this.shi_id = '';
      this.xian_id = '';
      this.shiValues = [];
      this.xianValues = [];
    },
    clearCity() {
      this.xian_id = '';
      // this.xianValues = [];
    },
    proviceChange() {
      if (this.shen_id == '') return;
      this.shiValues = findCity(this.shen_id);
      this.xianValues = findCountry(this.shen_id, 0);
      this.shi_id = 0;
      this.xian_id = 0;
    },
    cityChange() {
      if (this.shi_id == '') return;
      this.xian_id = 0;
      this.xianValues = findCountry(this.shen_id, this.shi_id);
    }
  },
  props: {
    widthtit: {
      type: String,
      default: ''
    },
    addressName: {
      type: String,
      default: ''
    },
    addressDetail: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    addressChange(newVal) {
      // 找出变化的省市县 回流道接口
      let provice =
        typeof newVal[0] == 'number' &&
        this.shengValues.find((val) => val.value == newVal[0]).label;
      let city =
        typeof newVal[1] == 'number' &&
        this.shiValues.find((val) => val.value == newVal[1]).label;
      let country =
        typeof newVal[2] == 'number' &&
        this.xianValues.find((val) => val.value == newVal[2]).label;
      this.attrs.forEach((val, index) => {
        if (index == 0) {
          this.copyData[val] = provice;
        }
        if (index == 1) {
          this.copyData[val] = city;
        }
        if (index == 2) {
          this.copyData[val] = country;
        }
      });
    },
    addressDetail: {
      handler(newVal) {
        // 回流详细地址
        this.copyData = newVal.copyData;
        this.desAttrName = newVal.desAttr;
        this.attrs = newVal.attrs;

        this.desAttr = newVal.copyData[newVal.desAttr];
        let arr = [];
        newVal.attrs.forEach((val) => {
          arr.push(newVal.copyData[val]);
        });
        let changeIndexArr = arr.map((val, index) => {
          if (index == 0) {
            if (!val) {
              return -1;
            }
            return val.split('省')[0];
          } else if (index == 1) {
            if (!val) {
              return -1;
            }
            return val.split('市')[0];
          } else {
            if (!val) {
              return -1;
            }
            return val.split('县')[0];
          }
        });
        // 获取省市县对应的Value
        let indexs = changeValue(changeIndexArr);
        // 返回得省市县对应index 如果没有值得就默认赋值[0,0,0]
        if (indexs.length == 0) {
          indexs = [0, 0, 0];
        } else {
          // 怕接口返回得省市县数据不完全,所以也进行默认0
          this.shen_id = indexs[0] >= 0 ? indexs[0] : '';
          this.shi_id = indexs[1] >= 0 ? indexs[1] : '';
          this.xian_id = indexs[2] >= 0 ? indexs[2] : '';
          this.shiValues = findCity(indexs[0]);
          this.xianValues = findCountry(indexs[0], indexs[1]);
        }
      },
      immediate: true
    },
    desAttr(newVal) {
      this.copyData[this.desAttrName] = newVal;
    }
  },
  computed: {
    addressChange() {
      return [this.shen_id, this.shi_id, this.xian_id];
    }
  }
};
</script>

<style scoped lang="scss">
/deep/ .el-select{
  .el-input--suffix{
    .el-input__inner{
      padding-right: 0;
    }
  }
}
.address-contain {
  width: 100%;

  .basic-c {
    display: flex;
    min-height: 28px;
    line-height: 28px;
    margin-bottom: 15px;
    border: 1px solid #ececec;
    .tit {
      padding: 0 10px;
      background: #f6f7f9;
      font-weight: 600;
      border-right: 1px solid #ececec;
      width: 126px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .val {
      flex: 1;
      overflow: hidden;
      .add-tit {
        padding-right: 10px;
        font-size: 14px;
      }
    }
  }
  .birth {
    .val {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
