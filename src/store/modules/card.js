import {AXIOS} from "@/http-commons";

export default {
    state: {
        myuser: {},
        mycards: []
    },

    getters: {
        getUserInfo(state) {
            return state.myuser;
        },
        getCardInfo(state) {
            return state.mycards;
        }
    },

    mutations: {
        clearStats(state) {
            state.users = {}
            state.mycards = []
        },
        fillCards(state, data) {
            state.myuser = data.user
            // this.mycards = new Array();
            data.card.forEach((curCard) => {
                console.log(data.card)
                state.mycards.push(curCard)
            })
            // console.log(this.myuser)
            // console.log(this.mycards)
        }

    },

    actions: {
        async loadCards(ctx, idUser) {
            ctx.commit("clearStats");
            let response = await AXIOS.get('/user-info/'+ idUser +'/get');
            console.log(response)
            ctx.commit("fillCards", response.data);
        }
    }


}
