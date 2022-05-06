<template>
  <div>
    <ul v-for="item in message" :key="item.id">
      {{
        item.name
      }}
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:[]
    }
  },
  created(){
    this.message = this.$router.query.array
  }
};
</script>