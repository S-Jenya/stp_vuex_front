<template>
  <div class="container">
    <h1>Пользователь</h1>

    <ul>
      <li>Name:{{ getUserInfo.name }}</li>
      <li>Password:{{ getUserInfo.password }}</li>
      <li>
        <p>Карточки:
          <a class="button" @click="$router.push('/card-create/' + getUserInfo.idUser)">
            Добавить карточку
          </a>
        </p>
      </li>

      <div v-for="(myCards, index) in getCardInfo" :key="myCards.idCard">
        <div class="card" style="margin-bottom: 20px">
          <div class="card-body" style="padding-top: 0px;">
            <div class="card-header">
              <h5><label>Учебное учреждение № {{ index + 1 }}</label>
                <button class="close" aria-label="Close" v-on:click="deleteCard(myCards.idCard)">
                  <span aria-hidden="true">&times;</span>
                </button>
              </h5>
            </div>

            <input type="hidden" name="idCard" id="idCard">
            <h5 id="name">
              <p class="card-title">
                Наименование: {{ myCards.headline }}
                <a v-bind:href="'/card-update/' + myCards.idCard"> Edit </a>
              </p>
            </h5>

            <div v-for="myInst in myCards.institutions" :key="myInst.id">
              <label style="margin-right: 15px;">{{ myInst.name }}</label>
              <a v-bind:href="'/inst-update/' + myCards.idCard + '/' + myInst.id"> Edit </a>
              <a href="" v-on:click="deleteInst(myCards.idCard, myInst.name)"> Del </a>
            </div>

            <a v-bind:href="'/inst-create/' + myCards.idCard" class="btn btn-primary linkCard">Добавить институт</a>
          </div>
        </div>
      </div>
    </ul>

    <input type="submit" onclick="javascript:history.back(); return false;" value="Назад">
  </div>
</template>


<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      idUser: ''
    }
  },
  computed: mapGetters(['getUserInfo', 'getCardInfo']),
  methods: {
    ...mapActions(['loadCards', 'delInstFunc']),
    ...mapMutations(["setIdCard", 'setDataInst']),

    deleteCard(id) {
      this.setIdCard({id: id});
      this.$store.dispatch("delCardFunc");
    },
    deleteInst(id, name) {
      this.setDataInst({id: id, name: name})
      this.delInstFunc()
      this.loadCards(this.idUser)
    }

  },
  async mounted() {
    this.idUser = document.location.href.split('/')[4]
    await this.loadCards(this.idUser)
  }
}
</script>
