import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from "@/page/MainLayout.vue";

import {useUserStore} from "@/stores/useUserStore.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 定义根路径
            path: '/',
            // 设置重定向到 /home
            redirect: '/home/summary'
        },
        {
            path: "/home",
            name: "home",
            component: MainLayout,
            meta: {
                requiresAuth: true // 需要登录才能访问
            },
            children: [
                {
                    path: "summary",
                    component: () => import("@/page/BriefSituation.vue"),
                    meta: {
                        requiresAuth: true // 需要登录才能访问
                    },
                }, {
                    path: "order",
                    children: [
                        {
                            path: "ClassroomIdle",
                            component: () => import("@/page/ClassroomIdle.vue")
                        }, {
                            path: "RequestAppointment",
                            component: () => import("@/page/RequestAppointment.vue")
                        }, {
                            path: "AppointmentRecord",
                            component: () => import("@/page/AppointmentRecord.vue")
                        }, {
                            path: "result",
                            component: () => import("@/page/Result.vue")
                        }, {
                            path: 'AppointmentCheck',
                            name: 'AppointmentCheck',
                            component: () => import('@/page/AppointmentCheck.vue')
                        }
                    ]
                }, {
                    path: "lab",
                    children: [
                        {
                            path: "list",
                            component: () => import("@/page/lab/List.vue")
                        }, {
                            path: "add",
                            component: () => import("@/page/lab/Add.vue")
                        }, {
                            path: "update",
                            component: () => import("@/page/lab/Update.vue")
                        }, {
                            path: "maintain",
                            children: [
                                {
                                    path: "add",
                                    component: () => import("@/page/lab/maintain/Add.vue")
                                }, {
                                    path: "list",
                                    component: () => import("@/page/lab/maintain/List.vue")
                                }, {
                                    path: "dele",
                                    component: () => import("@/page/lab/maintain/Dele.vue")
                                }
                            ]
                        }
                    ]
                }, {
                    path: "user",
                    children: [{
                        path: "person",
                        component: () => import("@/page/Person.vue"),
                    }, {
                        path: "changepassword",
                        component: () => import("@/page/ChangePassword.vue"),
                    }
                    ]
                }
            ]
        },
        {
            path: "/login",
            component: () => import("@/page/Login.vue"),
            meta: {
                requiresAuth: false
            },
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && isUserLoggedIn()) {
        alert("请先登录");
        next({path: "/login"}); // 重定向到登录页
    } else {
        next();
    }
});

function isUserLoggedIn() {
    // 根据实际情况判断是否登录，可以从浏览器的 localStorage 或其他地方获取登录信息
    const userStore = useUserStore();
    return !localStorage.getItem('userName');
}

export default router;