import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'

const routes = [
    {
        path: '/',
        name: 'PageHome',
        component: PageHome
    },
    {
        path: '/error',
        name: 'Error',
        component: () => import('../components/PageError.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/error"
    },
    {
        path: '/notice/:id',
        name: 'Notice Content',
        component: () => import('../views/notice/PageContent.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/terms/PageContact.vue')
    },
    {
        path: '/free',
        name: 'Free PageContent',
        component: () => import('@/views/free/PageBoard.vue')
    },
    {
        path: '/free/write',
        name: 'Free Write',
        component: () => import('@/views/free/PageWrite.vue')
    },
    {
        path: '/free/:id',
        name: 'Free ID',
        component: () => import('@/views/free/PageContent.vue')
    },
    {
        path: '/report',
        name: 'Report PageContent',
        component: () => import('../views/report/PageBoard.vue')
    },
    {
        path: '/report/write',
        name: 'report Write',
        component: () => import('../views/report/PageWrite.vue')
    },
    {
        path: '/report/:id',
        name: 'report ID',
        component: () => import('../views/report/PageContent.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router