import {defineStore} from "pinia";

export const useUserStore = defineStore('main', {
    state: () => ({
        userId: localStorage.getItem('userId') || undefined,
        userName: localStorage.getItem('userName') || undefined,
        userEmail: localStorage.getItem('userEmail') || undefined,
        token: localStorage.getItem('token') || undefined,
        role: localStorage.getItem('role') || undefined
    }),
    getters: {},
    actions: {

        setUserName(name: string) {
            this.userName = name;
            localStorage.setItem('userName', name);
        },
        setUserEmail(email: string) {
            this.userEmail = email;
            localStorage.setItem('userEmail', email);
        },
        setToken(token: string) {
            this.token = token;
            localStorage.setItem('token', token);
        },
        setRole(role: string) {
            this.role = role;
            localStorage.setItem('role', role);
        }
    },
    persist: true
})