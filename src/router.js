import Vue from 'vue'
import Router from 'vue-router'
import userList from './components/user-list'
import createUser from './components/create-user'
import updUser from './components/user-update'
import cards from '@/components/user-info'
import newCards from '@/components/card-create'
import updCards from '@/components/card-update'
import newInst from '@/components/inst-create'
import updInst from '@/components/inst-update'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: userList
        },
        {
            path: '/user-create',
            name: 'createUser',
            component: createUser
        },
        {
            path: '/user-update',
            name: 'updateUser',
            component: updUser
        },
        {
            path: '/user-info/:id',
            name: 'cards',
            component: cards
        },
        {
            path: '/card-create/:id',
            name: 'newCards',
            component: newCards
        },
        {
            path: '/card-update/:id',
            name: 'updCards',
            component: updCards
        },
        {
            path: '/inst-create/:id',
            name: 'newInst',
            component: newInst
        },
        {
            path: '/inst-update/:id_card/:id_inst',
            name: 'updInst',
            component: updInst
        }
    ]
})
