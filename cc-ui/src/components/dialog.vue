<template>
  <div class="cc-dialog_wrapper">
    <div class="cc-dialog" :style="{ width, marginTop: top }">
      <div class="cc-dialog_header">
        <slot name="title">
          <span class="cc-dialog_title">{{ title }}</span>
        </slot>
        <button class="cc-dialog_headerbtn">x</button>
      </div>
      <div class="cc-dialog_body"></div>
      <div class="cc-dialog_footer">
        <cc-button>取消</cc-button>
        <cc-button type="primary">确定</cc-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CcDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "30%",
    },
    top: {
      type: String,
      default: "15vh",
    },
  },
};
</script>

<style lang="scss" scoped>
.cc-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .cc-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .cc-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .cc-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: ncc;
        outline: ncc;
        cursor: pointer;
        font-size: 16px;
        .cc-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .cc-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>