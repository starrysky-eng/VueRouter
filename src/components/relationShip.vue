<template>
  <div>
    <h1>お名前一覧</h1>
    <div class="divColor">
    <ul v-for="item in message" :key="item.id">
      <input type="radio" v-model="Name" :value="item.name"/>
      {{item.name}}
    </ul>
    </div>
    <button @click="result">選択</button>
  </div>
</template>

<script>
export default {
  props: {
    message: [],
  },
  data() {
    return {
      Name: null,
    };
  },
  methods:{
    result(){
      this.$emit("returnName",this.Name);
    }
  }
};
</script>
<style scoped>
button{
    padding: 1% 2%;
    border: 2px solid black;
    background-color: coral
}
.divColor{
  background-color: antiquewhite;
}
</style>