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
import shengValues, { findCity, findCountry } from "@/utils/Provice.js";
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
            this.shiValues = findCity(this.shen_id);
            this.xianValues = findCountry(this.shen_id, 0);
            this.shi_id = 0;
            this.xian_id = 0;
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
        addressDetail: {
            handler(newVal) {
                console.log(newVal);
            }
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
