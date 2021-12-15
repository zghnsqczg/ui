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
    <cc-button type="primary" circle icon="cc-icon-bluetoothoff"></cc-button> -->
    <cc-dialog
      title="你好"
      width="60%"
      top="100px
    "
    >
    </cc-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    fn(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
</style>
