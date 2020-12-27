<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Логи" v-model="login">
    <input type="text" placeholder="Пароль" v-model="password">
    <input type="text" placeholder="Роль" v-model="role">
    <button type="submit">Create user</button>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        login: '',
        password: '',
        role: ''
      }
    },
    methods: {
      ...mapMutations(["addUser"]),
      submit(){
        this.addUser({
          login: this.login,
          password: this.password,
          role: this.role
        });

        this.$store.dispatch("addUserFunc");
      }
    }
  }
</script>

<style scoped>

</style>
