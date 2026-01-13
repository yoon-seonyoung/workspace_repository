<template>
    <div>
        <button @click="fruitStore.removeFirstItem">Remove First Item</button>
        <button @click="fruitStore.removeLastItem">Remove Last Item</button>

        <ul>
            <ItemComponent v-for="item in fruitStore.fruitList" :key="item.id" :item="item" />
        </ul>
        <!-- <FeedList :feeds="feeds" /> -->
        <div>getFruitListLength:{{ fruitStore.getFruitListLength }}</div>
        <div>getFruitByNameWithA:{{ fruitStore.getFruitByNameWithA }}</div>
    </div>
</template>

<script>
//import FeedList from '@/components/FeedList.vue';
import ItemComponent from '@/components/ItemComponent.vue';
import { useFruitStore } from '@/store/fruit';

export default {
    name: "DemoPage",
    components: { ItemComponent },
    data() {
        return {
            fruitStore: useFruitStore() //fruit.js의 state, getters, actions들어가있음.(store 인스턴스 객체)
        };
    },

};
</script>

<style></style>