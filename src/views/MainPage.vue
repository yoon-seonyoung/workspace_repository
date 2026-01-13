<template>
    <div>
        <div class="title-container">
            <h2>Home</h2>
            <div>{{ userStore.userName }}</div>
        </div>
        <TweetBar />
        <FeedList :feeds="feedStore.feeds" />
    </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
import { useUserStore } from '@/store/userStore';
import { useFeedStore } from '@/store/feedStore';

export default {
    name: "MainPage",
    components: { FeedList, TweetBar },
    data() {
        return {
            feedStore: useFeedStore(),
            userStore: useUserStore(),
        };
    },
    created() {
        this.feedStore.setFeeds()
    }
};
</script>

<style scoped>
.title-container {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>