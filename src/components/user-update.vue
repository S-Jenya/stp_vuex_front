<template>
  <form @submit.prevent="submit">
    <input type="hidden" id="idForUpd">
    <input type="text" placeholder="Логин" id="nameForUpd">
    <button type="submit">Update user</button>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      id: '',
      login: ''
    }
  },
  methods: {
    ...mapMutations(["updUser"]),
    submit(){

      this.id = document.getElementById("idForUpd").value;
      this.login = document.getElementById("nameForUpd").value;

      console.log('Child form: ' + this.id +'\n' + this.login)
      this.updUser({
        id: this.id,
        login: this.login
      });

      this.$store.dispatch("updUserFunc");
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
