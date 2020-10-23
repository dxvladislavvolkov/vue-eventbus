<template>
   <div>
    <input type="checkbox" v-model="checked">
    <HelloWorld/>
    <HelloWorld v-if="checked"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import DxDropDownButton from "devextreme-vue/drop-down-button";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      checked: false
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
