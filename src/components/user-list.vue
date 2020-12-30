<template>


  <div class="HelloWorld">


    <div class="container">
      <h1>Список зарегистрированных пользователей</h1>
      <hr>
      <button @click="$router.push('/user-create')" class="btn btn-primary linkCard">Новый пользователь</button>
      <h2 style="text-align: center; padding: 10px 10px;">Список пользователей</h2>
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
          <tr v-for="user in getUsers" :key="user.idUser">
            <td>{{ user.idUser }}</td>
            <td><a href="" @click="$router.push('/user-info/' + user.idUser)">{{ user.name }}</a></td>
            <td>{{ user.password }}</td>
            <td>{{ user.role }}</td>
            <td data-label="Действие">
              <button @click="goUpdUser(user.idUser)" type="submit">Edit</button>
              <form @submit.prevent="deleteUser(user.idUser)">
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

export default {
  name: 'App',
  data() {
    return {
      isCreateUserVisible: false,
      showModal: false,
      modalText: ''
    }
  },
  computed: mapGetters(['getUsers']),
  methods: {
    ...mapActions(['loadUsersList']),
    ...mapMutations(["delUser", "setIdUserForUpd"]),

    deleteUser(id) {
      this.delUser({id: id});
      this.$store.dispatch("delUserFunc");
    },

    showCards() {
      location.href = '/user-info/' + event.target.parentNode.children[0].innerText
    },

    goUpdUser(id) {
      this.setIdUserForUpd({id: id})
      this.$router.push('/user-update')
    }

  },
  async mounted() {
    await this.loadUsersList();
  }
}
</script>
