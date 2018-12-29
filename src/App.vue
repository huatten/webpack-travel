<template>
    <div>
        <div class="title">Hello {{ name }}</div>
        <v-button @click="handleClick" :color="color">点击按钮</v-button>
        <img src="../src/images/logo.png" alt="logo"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import vButton from './component/button';
  export default {
    name: "App",
    components: {
      vButton
    },
    data() {
      return {
        name: "Webpack",
        color: "#ffdedf"
      }
    },
    methods: {
      handleClick(e){
        alert(e)
      }
    }
  }

</script>

<style scoped lang="css">
    .title{
        text-align: center;
    }
</style>