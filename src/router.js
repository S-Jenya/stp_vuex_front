import Vue from 'vue'
import Router from 'vue-router'
import cards from '@/components/user-info'
import newCards from '@/components/card-create'
import userList from './components/user-list'

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
            path: '/user-info/:id',
            name: 'cards',
            component: cards
        },
        {
            path: '/card-create/:id',
            name: 'newCards',
            component: newCards
        }
    ]
})
