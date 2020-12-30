<template>
  <div class="container">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Новый пользователь</h5>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submit">
          <input type="text" placeholder="Логи" v-model="login" size="10">
          <input type="text" placeholder="Пароль" v-model="password" size="10">
          <p>
            <select v-model="role">
              <option>USER</option>
              <option>ADMIN</option>
            </select>
          </p>
          <button type="submit" class="btn btn-primary linkCard">Создать</button>
        </form>
        <button @click="goBack" class="btn linkCard">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "createUserForm",
  data() {
    return {
      login: '',
      password: '',
      role: ''
    }
  },
  methods: {
    ...mapMutations(["addUser"]),
    ...mapActions(['addUserFunc']),
    submit() {
      if (this.login != "" && this.password != "" && this.role != "") {
        this.addUser({
          login: this.login,
          password: this.password,
          role: this.role
        });
        this.addUserFunc();
        this.$router.push('/')
      } else {
        alert("Все поля обязательны для заполнения");
      }
    },
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>
