import { defineStore } from 'pinia';
import axios from 'axios';

export const useFeedStore = defineStore('feedStore', {
    state: () => ({
        feeds: [],
    }),
    actions: {
        async fetchFeeds() {
            try {
                const response = await axios.get('http://localhost:8085/feeds');
                this.feeds = response.data;
            } catch (error) {
                console.error("Error fetching feeds:", error);
            }
        },
        async addFeed(newFeed) {
            try {
                const response = await axios.post('http://localhost:8085/feeds', newFeed);
                this.feeds.push(response.data); // 새로운 피드를 리스트에 추가
            } catch (error) {
                console.error("Error adding new feed:", error);
            }
        }
    }
});
