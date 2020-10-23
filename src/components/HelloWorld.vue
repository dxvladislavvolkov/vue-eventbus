
<script>
import Vue from "vue";
const a = Vue.extend({
  render(h) {
    return h("div", {}, []);
  },
  data() {
    /* eslint-disable */
    debugger;
    return {
      eventBus: new Vue()
    }
  },
});
export default a.extend({

  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
