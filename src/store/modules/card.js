import {AXIOS} from "@/http-commons";

export default {
    state: {
        id: '',
        headLine: '',
        myuser: {},
        mycards: []
    },

    getters: {
        getUserInfo(state) {
            return state.myuser
        },
        getCardInfo(state) {
            return state.mycards
        },
        getHeadline(state) {
            return state.headLine
        }
    },

    mutations: {
        clearStats(state) {
            state.users = {}
            state.mycards = []
        },

        fillCards(state, data) {
            state.myuser = data.user
            data.card.forEach((curCard) => {
                state.mycards.push(curCard)
            })
        },

        setIdCard(state, card) {
            this.id = card.id
        },

        setDataCard(state, data) {
            this.id = data.id
            this.headLine = data.nameLine
        },

        setHeadline(state, data) {
            state.headLine = data.headline
            state.id = data.id_card
        }

    },

    actions: {
        async loadCards(ctx, idUser) {
            let response = await AXIOS.get('/user-info/'+ idUser +'/get');
            ctx.commit("fillCards", response.data);
        },

        async loadDataCardForUpd(ctx) {
            let response = await AXIOS.get('/card-update/'+ this.id);
            ctx.commit("setHeadline", response.data);
        },

        async delCardFunc(ctx) {
            await AXIOS.get('/del-card/' + this.id);
            ctx.dispatch("loadCards");
        },

        async createCardFunc(ctx) {
            await AXIOS.post('/new-card/confirmed', {id: this.id, name: this.headLine});
            ctx.dispatch("loadCards");
        },

        async updateCardFunc(ctx) {
            await AXIOS.post('/update-card/confirmed', {id: this.id, name: this.headLine});
            ctx.dispatch("loadCards");
        }
    }


}
