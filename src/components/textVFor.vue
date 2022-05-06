<template>
  <div>
    <table border="1px">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>著者</th>
        </tr>
      </thead>
      <tbody>
        <!-- データを表示する -->
        <tr v-for="book in books" v-bind:key="book.id">
          <td>
            {{ book.title }}
          </td>
          <td>
            {{ book.author }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "textVFor",
  data() {
    return {
      books: [
        { id: 1, title: "坊っちゃん", author: "夏目漱石" },
        { id: 2, title: "人間失格", author: "太宰治" },
        { id: 3, title: "ノルウェイの森", author: "村上春樹" },
      ],
    };
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
tr,
td,
th {
  padding: 20px;
  font-size: 20px;
}

th {
  background-color: rgb(25, 79, 133);
  color: white;
}
</style>

