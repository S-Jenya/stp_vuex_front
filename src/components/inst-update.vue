<template>
  <div class="container">
    <h1>Обновить данные института</h1>
    <form @submit.prevent="updInst">
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
  computed: mapGetters(['getNameInstData']),
  methods: {
    ...mapActions(['getInstInfoFunc', "updInstFunc"]),
    ...mapMutations(["setDataForLoadInst", "setDataForUpdInst", "setNewNameInst"]),

    updInst() {
      this.setNewNameInst(
          {
            name: this.name
          }
      );
      this.updInstFunc();
    }
  },
  async mounted() {
    this.setDataForLoadInst({
      idCard: document.location.href.split('/')[4],
      idInst: document.location.href.split('/')[5]
    })
    await this.getInstInfoFunc().then(() => {
      this.name = this.getNameInstData
    })

  }
}
</script>
