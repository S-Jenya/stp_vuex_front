<template>
  <div class="container">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Обновить данные</h5>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submit">
          <input type="hidden" id="idForUpd">
          <input type="text" placeholder="Логин" v-model="login">
          <button type="submit" class="btn btn-primary linkCard">Обновить</button>
        </form>
        <button @click="goBack" class="btn linkCard">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  data() {
    return {
      id: '',
      login: '',
      user: []
    }
  },
  computed: mapGetters(['getDataForUpd']),
  methods: {
    ...mapMutations(["updUser"]),
    ...mapActions(['updUserFunc']),
    submit() {
      if (this.login != "") {
        this.updUser({
          id: this.user.idUser,
          login: this.login
        });
        this.updUserFunc()
        this.$router.push('/')
      } else {
        alert("Все поля обязательны для заполнения!")
      }
    },
    goBack() {
      this.$router.push('/')
    }
  },
  mounted() {
    this.user = this.getDataForUpd;
    this.login = this.user.name
  }
}
</script>
