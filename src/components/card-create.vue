<template>
  <div class="container">
    <h1>Добавить карточку</h1>
    <form @submit.prevent="createNewCard()">
      <input type="text" v-model="nameLine">
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
      nameLine: ''
    }
  },
  methods: {
    ...mapActions(['createCardFunc']),
    ...mapMutations(["setDataCard"]),

    createNewCard() {
      console.log('Id:' + document.location.href.split('/')[4] + '\nheadLine: ' + this.nameLine)
      this.setDataCard(
          {
            id: document.location.href.split('/')[4],
            nameLine: this.nameLine
          }
      );
      this.createCardFunc();
    }
  }
}
</script>
