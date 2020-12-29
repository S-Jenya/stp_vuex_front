import {AXIOS} from "@/http-commons";

export default {
    state: {
        id: '',
        id_card: '',
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
            this.id_card = data.id_card
            this.id = data.id_inst
        },
        setDataForUpdInst(state, data) {
            this.id_card = data.id_card
            this.id = data.id_inst
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
            // let response = await AXIOS.get('/inst-update/' + this.id_card + '/' + this.id + '/getInfo', );
            await AXIOS.get('/inst-update/' + this.id_card + '/' + this.id + '/getInfo', ).then(res => {
                // console.log(res.data)
                ctx.commit("setNameInst", res.data);
            })

        },
        async updInstFunc() {
            console.log('idCard' + this.id_card +
                "\nOldName" + this.nameOld +
                "\nNewName" + this.nameInst)
            await AXIOS.post('/update-inst/confirmed', {id: this.id_card, oldName: this.nameOld, name: this.nameInst});
        }
    }


}
