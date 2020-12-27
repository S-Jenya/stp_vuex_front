<template>
  <div class="container">
<!--    <div id="app">-->
      <h1>Пользователь</h1>

<!--              <pre>-->
<!--                      <code>-->
<!--                          {{$store.getters.getCardInfo}}-->
<!--                      </code>-->
<!--                  </pre>-->

      <ul>
        <li>Name:{{$store.getters.getUserInfo.name}}</li>
        <li>Password:{{$store.getters.getUserInfo.password}}</li>
        <li>
          <p>Карточки:
            <a class="button" @click="$router.push('/card-create/' + $store.getters.getUserInfo.id_user)">
              Добавить карточку
            </a>
          </p>
        </li>

        <div v-for="(myCards, index) in $store.getters.getCardInfo" :key="myCards.id_card">
          <div class="card" style="margin-bottom: 20px">
            <div class="card-body" style="padding-top: 0px;">
              <div class="card-header">
                <h5><label>Учебное учреждение № {{index + 1}}</label>
                  <button class="close" aria-label="Close" v-on:click="delCard(myCard.id_card)">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h5>
              </div>

              <input type="hidden" name="idCard" id="idCard">
              <h5 id="name">
                <p class="card-title">
                  Наименование: {{myCards.headline}}
                  <a v-bind:href="'/card-update-page/' + myCards.id_card"> Edit </a>
                </p>
              </h5>

              <div v-for="myInst in myCards.institutions" :key="myInst.id">
                <label style="margin-right: 15px;">{{myInst.name}}</label>
                <a v-bind:href="'/inst-update-page/' + myCards.id_card + '/' + myInst.id"> Edit </a>
                <a href="#" @click="deleteInst(myCards.id_card, myInst.name)"> Del </a>
              </div>

              <a v-bind:href="'/inst-create/' + myCards.id_card" class="btn btn-primary linkCard">Добавить институт</a>
            </div>
          </div>
        </div>
      </ul>

<!--    </div>-->
    <input type="submit" onclick="javascript:history.back(); return false;" value="Назад">
  </div>
</template>


<script>
import {mapActions, /*mapGetters, mapMutations*/} from 'vuex';

export default {
  name: 'App',
  data() {
    return{
      idUser: ''
    }
  },
  computed: {
    // getUserInfo() {
    //     return this.$store.getters.getUserInfo;
    // },
    // getCardInfo() {
    //   return this.$store.getters.getCardInfo;
    // }
  } ,
  methods: {
    ...mapActions(['loadCards']),
    // ...mapMutations(["delUser"]),

  } ,
  async mounted() {
    this.idUser = this.loadCards(document.location.href.split('/')[4])
    this.loadCards(this.idUser)
  }
}
</script>
