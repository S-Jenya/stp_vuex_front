<template>
  <div class="HelloWorld">

    <div class="container">
      <h1>Добавить нового пользователя</h1>
      <createUser/>
      <hr>
      <h1>Обновить данные пользователя</h1>
      <updUser/>
      <h2 style="text-align: center; padding: 10px 10px;">Спасок пользователей</h2>
      <div class="wrapper">
        <table class="table">
          <thead>
          <tr>
            <th>Ид</th>
            <th>Имя</th>
            <th>Пароль</th>
            <th>Роль</th>
            <th>Действие</th>
          </tr>
          </thead>
          <tr v-for="user in getUsers" :key="user.id_user">
            <td>{{ user.id_user }}</td>
            <td><a href="#"  @click="$router.push('/user-info/' + user.id_user)">{{ user.name }}</a></td>
            <td>{{ user.password }}</td>
            <td>{{ user.role }}</td>
            <td data-label="Действие">
              <form @submit.prevent="getInfoForUpd(user.id_user, user.name)">
                <button type="submit">Edit</button>
              </form>
              <form @submit.prevent="deleteUser(user.id_user)">
                <button type="submit">Delete</button>
              </form>
            </td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>


<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import createUser from './create-user'
import updUser from './user-update'

export default {
  name: 'App',
  computed: mapGetters(['getUsers']),
  methods: {
    ...mapActions(['loadUsersList'], ['addUserFunc']),
    ...mapMutations(["delUser"]),

    deleteUser(id) {
      this.delUser({id: id});
      this.$store.dispatch("delUserFunc");
    },

    getInfoForUpd(id, name) {
      document.getElementById("idForUpd").value = id;
      document.getElementById("nameForUpd").value = name;
    },

    showCards() {
      // let id = event.target.parentNode.children[0].innerText
      // console.log('Id user: ' + id)
      // this.$store.dispatch("setId", {id: id});
      // this.$store.dispatch("loadCardsInfo");
      location.href='/user-info/' + event.target.parentNode.children[0].innerText

    }
  } ,
  async mounted() {
    this.loadUsersList();
  },
  components: {
    createUser,
    updUser
  }
}
</script>
