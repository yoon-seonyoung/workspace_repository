import { defineStore } from "pinia";

//fruit store를 꺼내주는 함수 만들기
export const useFruitStore = defineStore('fruit', {
    state: () => ({
        fruitList: [
            { id: 1, name: "Apple" },
            { id: 2, name: "Banana" },
            { id: 3, name: "Orange" },
            { id: 4, name: "Data" },
            { id: 5, name: "Elderberry" },
        ]
    }),
    getters: { //fruitList의 현재길이 반환
        getFruitListLength: (state) => state.fruitList.length,
        getFruitByNameWithA: (state) => state.fruitList.filter(fruit => fruit.name.includes('a'))
    },
    actions: {
        removeFirstItem() {
            this.fruitList.shift()
        },
        removeLastItem() {
            this.fruitList.pop()
        }
    },

});