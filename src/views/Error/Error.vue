<template>
    <div class="error-contain">
        <div class="remind-img">
            <img src="static/img/403.png" alt />
            <img
                src="static/img/remove.png"
                alt
                class="remove"
                v-show="showremove"
                ref="removeimg"
                :class="{ removeani: showremoveani }"
            />
        </div>
        <div class="rig-c">
            <div class="tit">抱歉</div>
            <div class="des">您没有操作权限...</div>
            <div class="remind">当前你没有操作权限，请联系管理员</div>
            <div class="return">
                <el-button type="primary" round @click="clearpage">退出</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showremove: false,
            showremoveani: false
        };
    },
    created() {

    },
    mounted() {
        setTimeout(val => {
            this.showremove = true;
            this.showremoveani = true;
        }, 2000)
    },
    methods: {
        clearpage() {
            open(location, '_self').close()
            // window.close()
        }

    }
};
</script>

<style scoped lang="scss">
.error-contain {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .remind-img {
        position: relative;
        height: 360px;
        width: 382px;
        img {
            height: 100%;
            // height: 320px;
        }
        .remove {
            height: 80px;
            position: absolute;
            right: 0;
            top: 40px;
        }
        .removeani {
            animation: remove 2s linear 1 forwards;
        }
    }
    @keyframes remove {
        0% {
            right: 0;
        }
        70% {
            // opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            opacity: 0;
            top: 130px;
            right: 140px;
        }
    }

    @-webkit-keyframes myfirst /* Safari 与 Chrome */ {
        from {
            right: 40px;
            top: 100px;
            // background: red;
        }
        to {
            background: yellow;
        }
    }
    .rig-c {
        height: 210px;
        .tit {
            font-size: 30px;
            color: rgb(25, 144, 255);
            font-weight: 600;
        }
        .des {
            font-size: 24px;
            color: #000;
            font-weight: 600;
            margin: 16px 0;
        }
        .return {
            margin-top: 20px;
        }
    }
}
</style>
