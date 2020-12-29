import {AXIOS} from "@/http-commons";

export default {
    state: {
        id: '',
        idCard: '',
        nameInst: '',
        nameOld: ''
    },

    getters: {
        getIdInst(state) {
            return state.id
        },
        getNameInstData(state) {

            console.log("\nnameInst: " + state.nameInst)

            return state.nameInst
        }
    },

    mutations: {
        setDataInst(state, data) {
            this.id = data.id
            this.nameInst = data.name
        },
        setNameInst(state, data) {
            this.nameInst = data.name
            this.nameOld = data.name
        },
        setNewNameInst(state, data) {
            this.nameInst = data.name
        },
        setDataForLoadInst(state, data) {
            this.idCard = data.idCard
            this.id = data.idInst
        },
        setDataForUpdInst(state, data) {
            this.idCard = data.idCard
            this.id = data.idInst
        }
    },

    actions: {
        async delInstFunc() {
            await AXIOS.post('/inst-del/confirmed', {id: this.id, name: this.nameInst});
        },
        async createInstFunc() {
            await AXIOS.post('/create-inst/confirmed', {id: this.id, name: this.nameInst});
        },
        async getInstInfoFunc(ctx) {
            await AXIOS.get('/inst-update/' + this.idCard + '/' + this.id + '/getInfo', ).then(res => {
                ctx.commit("setNameInst", res.data);
            })

        },
        async updInstFunc() {
            await AXIOS.post('/update-inst/confirmed', {id: this.idCard, oldName: this.nameOld, name: this.nameInst});
        }
    }


}
