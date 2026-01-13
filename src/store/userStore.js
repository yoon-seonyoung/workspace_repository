import { defineStore } from "pinia";

//
export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            name: "김유저"
        }
    }),

    getters: {
        userName(state) {
            return state.user.name
        }
    }

});