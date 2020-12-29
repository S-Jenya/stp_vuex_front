<template>
  <div class="container">
    <h1>Обновить данные карты</h1>
    <form @submit.prevent="updCard">
      <input type="text" v-model="name" placeholder="Наименование">
      <button type="submit" class="btn btn-primary linkCard">Обновить</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      name: ''
    }
  },
  computed: mapGetters(['getHeadline']),
  methods: {
    ...mapActions(['loadDataCardForUpd', "updateCardFunc"]),
    ...mapMutations(["setIdCard", "setDataCard"]),

    updCard() {
      this.setDataCard(
          {
            id: document.location.href.split('/')[4],
            nameLine: this.name
          }
      );
      this.updateCardFunc();
    }
  },
  async mounted() {
    this.setIdCard({id: document.location.href.split('/')[4]})
    await this.loadDataCardForUpd()
    this.name = this.getHeadline
  }
}
</script>
