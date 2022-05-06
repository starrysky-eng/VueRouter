<template>
  <div>
    <p>お名前</p>
    <input
      type="text"
      placeholder="お名前を入力してください"
      v-model="nextText"
    /><button @click="push">追加</button
    ><button @click="deleteData">删除</button>
    <ul v-for="item in list" :key="item.id">
      <li>
        <input type="checkbox" v-model="item.isCheck" />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'textVForCanCreateAndDelete',
  data() {
    return {
      list: [
        { id: 1, name: "田中", isCheck: false },
        { id: 2, name: "渡辺", isCheck: false },
        { id: 3, name: "木村", isCheck: false },
      ],
      nextText: null,
      nextId: 4,
    };
  },
  methods: {
    push() {
      if (this.nextText == null) {
        return alert("名前を入力してください");
      }
      this.list.unshift({
        id: this.nextId++,
        name: this.nextText,
        isCheck: false,
      });
      this.nextText = null;
    },
    deleteData() {
      for (var i = this.list.length - 1; i >= 0; i--) {
        if (this.list[i].isCheck) {
          this.list.splice(i, 1);
        }
      }
      console.log(this.list);
    },
  },
};
</script>

<style scoped>
p {
  margin: 0%;
}
input[type="text"] {
  padding: 2.5%;
  font-size: 100%;
  width: 40%;
}
button {
  margin: 1.5%;
  padding: 2%;
  font-size: 100%;
}
div {
  margin: 15%;
}
ul {
  margin: 3%;
}
</style>
