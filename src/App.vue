<template>
  <div id="app">
    <router-link to="/textVFor" tag="button">textVFor</router-link>
    <router-link to="/textVForCanCreateAndDelete" tag="button">textVForCanCreateAndDelete</router-link>
    
    <router-link to="/textRelationShip" tag="button">textRelationShip</router-link>

    <router-view></router-view>

    <relationShip :message="nameList" @returnName="catchName = $event"></relationShip>
    {{catchName}}
  </div>
</template>

<script>
import relationShip from './components/relationShip.vue'
export default {
  name: "App",
  components: {
    relationShip
  },
  data() {
    return {
      total: null,
      catchName: null,
      nameList:[
        {id: 1,name: "田中"},
        {id: 2,name: "黒田"},
        {id: 3,name: "西村"},
      ]
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{

}
</style>
