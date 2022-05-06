<template>
  <div>
    <input type="checkbox" v-model="isCheck"/>
    <div v-show="isCheck">
      <textVFor></textVFor>
    </div>
  </div>
</template>
<script>
import textVFor from "./textVFor.vue";

export default {
  components: {
  textVFor
  },
  name: "checkBox",
  data() {
    return {
      isCheck: false,
    };
  },
};
</script>
<style scoped>
button {
  padding: 2%;
}
</style>