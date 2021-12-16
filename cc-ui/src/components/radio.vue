<template>
  <label class="cc-radio" :class="{ 'is-checked': label == model }">
    <span class="cc-radio_input">
      <span class="cc-radio_inner"></span>
      <input
        type="radio"
        class="cc-radio_original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="cc-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "CcRadio",
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  computed: {
    isGroup() {
      return !!this.RadioGroup;
    },
    model: {
      get() {
        console.log(this.RadioGroup);
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(val) {
        this.isGroup
          ? this.RadioGroup.$emit("input", val)
          : this.$emit("input", val);
      },
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.cc-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: ncc;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: ncc;
  -webkit-user-select: ncc;
  -moz-user-select: ncc;
  .cc-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: ncc;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cc-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .cc-radio_original {
      opacity: 0;
      outline: ncc;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cc-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.cc-radio.is-checked {
  .cc-radio_input {
    .cc-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .cc-radio_label {
    color: #409eff;
  }
}
</style>