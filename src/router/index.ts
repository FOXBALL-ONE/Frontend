import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from "@/stores/useUserStore.ts";
import {message} from "ant-design-vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 定义根路径
            path: '/',
            // 设置重定向到 /home
            redirect: '/home/front_page'
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/page/MainLayout.vue"),
            meta: {
                requiresAuth: false // 需要登录才能访问
            },
            children: [
                {
                    path: "front_page",
                    component: () => import("@/page/Home/HomePage.vue"),
                    meta: {
                        requiresAuth: true // 需要登录才能访问
                    },
                }, {
                    path: "bounty",
                    children: [
                        {
                            path: "market",
                            component: () => import("@/page/Bounty/BountyMarket.vue"),
                        }, {
                            path: "search",
                            component: () => import("@/page/Bounty/BountySearch.vue")
                        }, {
                            path: "publish",
                            component: () => import("@/page/Bounty/BountyPublish.vue")
                        }, {
                            path: "detail",
                            component: () => import("@/page/Bounty/BountyDetails.vue"),
                        }, {
                            path: "chat",
                            component: () => import("@/page/Bounty/BountyChat.vue"),
                        }, {
                            path: "my",
                            children: [{
                                path: "myOrder",
                                component: () => import("@/page/Bounty/BountyMyOrder.vue")
                            }, {
                                path: "myPublish",
                                component: () => import("@/page/Bounty/BountyMyPublish.vue")
                            }
                            ]
                        },
                    ]
                }, {
                    path: "second_hand",
                    children: [
                        {
                            path: "market",
                            component: () => import("@/page/SecondHand/SecondHandMarket.vue"),
                        }, {
                            path: "search",
                            component: () => import("@/page/SecondHand/SecondHandSearch.vue")
                        }, {
                            path: "publish",
                            component: () => import("@/page/SecondHand/SecondHandPublish.vue")
                        }, {
                            path: "my",
                            children: [{
                                path: "myorder",
                                component: () => import("@/page/SecondHand/My/MyOrder.vue")
                            }, {
                                path: "mypublish",
                                component: () => import("@/page/SecondHand/My/MyPublish.vue")
                            }]
                        }
                    ]


                },

                {
                    path: "user",
                    children: [{
                        path: "userCenter",
                        component: () => import("@/page/User/PersonalCenter.vue"),
                    }, {
                        path: "changePassword",
                        component: () => import("@/page/User/ChangePassword.vue"),
                    }, {
                        path: "bounty",
                        component: () => import("@/page/User/Bounty.vue"),
                    }, {
                        path: "order",
                        component: () => import("@/page/User/Order.vue"),
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
    if (to.meta.requiresAuth && !isUserLoggedIn()) {
        message.error("请先登录");
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