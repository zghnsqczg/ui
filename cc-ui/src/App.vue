<template>
  <div id="app">
    <!-- <cc-button @click="fn" disabled>按钮</cc-button>
    <cc-button disabled type="primary">按钮</cc-button>
    <cc-button type="success">按钮</cc-button>
    <cc-button type="warning">按钮</cc-button>
    <cc-button type="danger">按钮</cc-button>
    <cc-button type="danger" plain>按钮</cc-button>
    <cc-button type="danger" round>按钮</cc-button>
    <cc-button type="primary" circle>你</cc-button>
    <cc-button type="primary" circle icon="cc-icon-guanbi"></cc-button> -->

    <!-- <cc-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</cc-button
    >
    <cc-dialog
      :visible.sync="dialogVisible"
      title="你好"
      width="60%"
      top="100px
    "
    >
    </cc-dialog> -->

    <!-- <cc-input
      show-password
      v-model="input"
      @input="handleInput"
      placeholder="请输入内容"
    ></cc-input>
    <cc-input
      clearable
      v-model="input"
      @input="handleInput"
      placeholder="请输入内容"
    ></cc-input> -->

    <!-- <cc-switch
      v-model="active"
      active-color="#13ce66"
      inactive-color="#ff4949"
      name='username'
    ></cc-switch> -->
    <cc-radio-group v-model="radio">
      <cc-radio label="1">男</cc-radio>
      <cc-radio label="2">女</cc-radio>
    </cc-radio-group>
    <cc-radio v-model="radio" label="1">男</cc-radio>
    <cc-radio v-model="radio" label="2">女</cc-radio>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      radio: "1",
      input: "",
      dialogVisible: false,
      active: false,
    };
  },
  methods: {
    fn(e) {
      console.log(e);
    },
    handleInput(tag) {
      console.log(this.input);
    },
  },
};
</script>

<style lang="scss">
</style>
