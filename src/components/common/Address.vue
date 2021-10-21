<template>
    <div class="address-contain">
        <div class="birth">
            <div class="basic-c content">
                <span class="tit">{{ addressName }}</span>
                <div class="val">
                    <el-select
                        v-model="shen_id"
                        placeholder="请选择"
                        @change="proviceChange"
                        clearable
                    >
                        <el-option
                            v-for="item in shengValues"
                            :key="item.label"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>省
                    <el-select v-model="shi_id" placeholder="请选择" @change="cityChange" clearable>
                        <el-option
                            v-for="item in shiValues"
                            :key="item.label"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>市
                    <el-select v-model="xian_id" placeholder="请选择" clearable>
                        <el-option
                            v-for="item in xianValues"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>县
                    <el-input v-model="shi_id" placeholder="详细地址"></el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import shengValues, { findCity, findCountry, changeValue } from "@/utils/Provice.js";
console.log(changeValue());
export default {
    name: "Address",
    data() {
        return {
            shen_id: 0,
            shi_id: 0,
            xian_id: 0,
            shiValues: [],
            xianValues: [],
            shengValues,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        proviceChange() {
            console.log(this.shen_id);
            this.shiValues = findCity(this.shen_id);
            this.xianValues = findCountry(this.shen_id, 0);
            this.shi_id = 0;
            this.xian_id = 0;
            console.log(this.shiValues);
            console.log(this.xianValues);
        },
        cityChange() {
            this.xian_id = 0;
            this.xianValues = findCountry(this.shen_id, this.shi_id);
        },

    }
    ,
    props: {
        addressName: {
            type: String,
            default: ""
        },
        addressDetail: {
            type: Object,
            default: () => {}
        },
        // cityVal: {
        //     type: Number,
        //     default: 0
        // },
        // countryVal: {
        //     type: Number,
        //     default: 0
        // },

    },
    watch: {
        addressChange(newVal) {
            // 找出变化的省市县 回流道接口
            let provice = newVal[0] && this.shengValues.find(val => val.value == newVal[0]).label;
            let city = newVal[1] && this.shiValues.find(val => val.value == newVal[1]).label;
            let country = newVal[2] && this.xianValues.find(val => val.value == newVal[2]).label;
            this.addressDetail.copyData["jmpro"]=provice;
            // console.log(provice,city,country);
            // this.addressDetail.attrs.forEach(val=>{
            //         arr.push(newVal.copyData[val])
            //     })
            // this.$emit("sendChangeAdd", [provice, city, country])

            // let shen=n
        },
        addressDetail: {
            handler(newVal) {
                let arr=[];
                newVal.attrs.forEach(val=>{
                    arr.push(newVal.copyData[val])
                })
                let gg = arr.map((val, index) => {
                    // if()
                    if (index == 0) {
                        if (!val) {
                            return -1;
                        }
                        return val.split("省")[0]
                    } else if (index == 1) {
                        if (!val) {
                            return -1;
                        }
                        return val.split("市")[0]
                    } else {
                        if (!val) {
                            return -1;
                        }
                        return val.split("县")[0]
                    }
                })
                // 获取省市县对应的Value 
                let indexs = changeValue(gg);
                if (gg.length > 0) {
                    this.shen_id = indexs[0] || '';
                    this.shi_id = indexs[1] || '';
                    this.xian_id = indexs[2] || '';
                    // 首次回流省市县
                    // let shenid = newVal.shen_id;
                    // let shiid = newVal.shi_id;
                    this.shiValues = findCity(this.shen_id || 0);
                    this.xianValues = findCountry(this.shen_id || 0, this.shi_id || 0);
                }
            }
        }
    },
    computed: {
        addressChange() {
            return [this.shen_id, this.shi_id, this.xian_id]
        }
    }
};
</script>

<style scoped lang="scss">
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
