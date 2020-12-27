import {AXIOS} from "@/http-commons";

export default {
    state: {
        id: '',
        login: '',
        password: '',
        role: '',
        users: []
    },

    getters: {
        getUsers(state) {
            return state.users;
        }
    },

    mutations: {
        clearUser(state) {
            state.users = []
        },
        fillUsers(state, data) {
            data.forEach(element => state.users.push(element));
        },
        addUser(state, newUser) {
            this.login = newUser.login;
            this.password = newUser.password;
            this.role = newUser.role;
        },
        updUser(state, user) {
            console.log(user)
            this.id = user.id
            this.login = user.login
        },
        delUser(state, user) {
            this.id = user.id
            this.login = user.login
        }
    },

    actions: {
        async loadUsersList(ctx) {
            ctx.commit("clearUser");
            let response = await AXIOS.get('/user/getUsers');
            // response.data.forEach(user => this.users.push(user))
            ctx.commit("fillUsers", response.data);
        },

        async addUserFunc(ctx) {
            await AXIOS.get('/user-create/' + this.login + '/' + this.password + '/' + this.role);
            ctx.dispatch("loadUsersList");
        },

        async updUserFunc(ctx) {
            await AXIOS.post('/user-update/confirmed', {id: this.id, name: this.login});
            ctx.dispatch("loadUsersList");
        },

        async delUserFunc(ctx) {
            await AXIOS.get('/user-delete/' + this.id);
            ctx.dispatch("loadUsersList");
        }
    }
}
