import { createRouter, createWebHistory} from "vue-router"


import StudentList from '../pages/StudentList.vue';
import Home from '../pages/Home.vue';

const routes=[
    {path:'/',component:Home},
    {path:'/studentlist',component:StudentList},
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;