<template>
    <div class="dialog">
        <div class="dialog-box">
            <div class="box-top">
                <p>{{ dialogName }}</p>
                <i class="el-icon-close" @click="$emit('closedialog')"></i>
            </div>
            <div class="box-bottom  scrollbar-css">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogTitle',
    props: {
        dialogName: {
            type: String,
            defualt: ""
        }
    }
};
</script>

<style scoped lang="scss">
.scrollbar-css {
    &::-webkit-scrollbar {
        // 滚动条的背景
        width: 16px;
        background: inherit;
    }
}
.dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(51, 51, 51, 0.4);
    .dialog-box {
        display: inline-block;
        background-color: var(--main-color);
        width: 730px;
        position: absolute;
        // min-height: 40%;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: 7%;
        min-height: 550px;
        max-height: 700px;
        .box-top {
            position: sticky;
            top: 0;
            z-index: 10;
            background: #fff;
            height: 58px;
            border-bottom: 2px solid var(--line-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            & > p {
                font-size: 18px;
                font-weight: bold;
            }
            /deep/ [class*=" el-icon-"],
            [class^="el-icon-"] {
                font-size: 20px;
                color: #d9d9d9;
                &:hover {
                    color: var(--sle-text-color);
                }
            }
            .el-icon-close {
                cursor: pointer;
            }
        }
        .box-bottom {
            max-height: 555px;
            padding: 10px 20px 0;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
}
</style>