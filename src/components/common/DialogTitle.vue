<template>
    <div class="dialog">
        <div class="dialog-box">
            <div class="box-top">
                <p>{{ dialogName }}</p>
                <i class="el-icon-close" @click="$emit('closedialog')"></i>
            </div>
            <div class="box-bottom">
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
.dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(51, 51, 51, 0.2);
    .dialog-box {
        display: inline-block;
        background-color: var(--main-color);
        width: 50%;
        position: absolute;
        min-height: 30%;
        left: 0;
        right:0 ;
        margin: auto ;
        margin-top: 10%;
        .box-top {
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
        }
        .box-bottom {
            padding: 0 20px;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
}
</style>