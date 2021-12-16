<template>
  <div class="cc-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <span class="cc-switch_core" ref="core">
      <span class="cc-switch_button"></span>
    </span>
    <input type="checkbox" class="cc-switch_input" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "CcSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
  },
  watch: {
    value: {
      handler: "setColor",
      immediate: true,
    },
  },
  methods: {
    setColor(val) {
      this.$nextTick(() => {
        this.$refs.input.checked = val;
        if (this.activeColor || this.inactivecolor) {
          let color = val ? this.activeColor : this.inactiveColor;
          console.log(color);
          this.$refs.core.style.borderColor = color;
          this.$refs.core.style.backgroundColor = color;
        }
      });
    },
    handleClick() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.cc-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .cc-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: ncc;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .cc-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .cc-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .cc-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.cc-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>