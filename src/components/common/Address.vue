<template>
    <div class="address-contain">
        <div class="birth">
            <div class="basic-c content">
                <span class="tit">身份证地址</span>
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
};
</script>

<style scoped lang="scss">
.address-contain {
    width: 300px;
    border: 1px solid red;
}
</style>
