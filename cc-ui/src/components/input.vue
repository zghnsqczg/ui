<template>
  <div
    :class="[
      'cc-input',
      {
        'cc-input_suffix': showSuffix,
      },
    ]"
  >
    <input
      :class="[
        'cc-input_inner',
        {
          'is-disabled': disabled,
        },
      ]"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :value="value"
      :disabled="disabled"
      @input="handleInput"
      :placeholder="placeholder"
    />
    <span class="cc-input_suffix" v-if="showSuffix">
      <i
        class="cc-input_icon cc-icon-guanbi"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="cc-input_icon cc-icon-chakan"
        v-if="showPassword && value"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "CcInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      passwordVisible: false,
    };
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    clear() {
      this.$emit("input", "");
      this.$emit("clear");
    },
  },
};
</script>

<style lang="scss" scoped>
.cc-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .cc-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.cc-input_suffix {
  .cc-input_inner {
    padding-right: 30px;
  }
  .cc-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>