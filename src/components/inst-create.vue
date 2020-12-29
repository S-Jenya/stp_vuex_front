<template>
  <div class="container">
    <h1>Новое учебное учреждение</h1>
    <form @submit.prevent="createNewCard()">
      <input type="text" v-model="name" placeholder="Наименование">
      <button type="submit" class="btn btn-primary linkCard">Создать</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions(['createInstFunc']),
    ...mapMutations(["setDataInst"]),

    createNewCard() {
      this.setDataInst(
          {
            id: document.location.href.split('/')[4],
            name: this.name
          }
      );
      this.createInstFunc();
      this.$router.push('/user-info/' + document.location.href.split('/')[4])
    }
  }
}
</script>
