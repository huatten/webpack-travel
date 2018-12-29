<template>
    <button @click="handleClick(color)" :style="styles">
        <slot></slot>
    </button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "buttons",
    data() {
      return {}
    },
    props: {
      color: {
        type: String,
        default: "#f5f5f5"
      }
    },
    computed: {
      styles() {
        return {
          background: this.color
        }
      }
    },
    methods: {
      handleClick(color){
        this.$emit('click', "子组件color:" +color)
      }
    }
  }

</script>

<style lang="css">
    button{
        outline: none;
        width: 100px;
        height: 30px;
        border: 1px solid #f90;
    }
</style>