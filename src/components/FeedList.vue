<template>
    <v-container fluid style="margin-top: 150px;">
        <TopicBlock />
        <v-row justify="center">
            <v-col v-for="(feed, idx) in feeds" :key="idx" cols="12">
                <v-card class="feed-card">
                    <div class="image-container">
                        <v-img :src="feed.image_url" class="feedList-image"></v-img>
                    </div>
                    <div class="content-box">
                        <v-card-title>{{ feed.title }}</v-card-title>
                        <v-card-subtitle>by {{ feed.nickname }} | {{ formatDate(feed.created_at) }}</v-card-subtitle>
                        <v-card-text>
                            {{ feed.content }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" text @click="fnView(feed.id)">View Details</v-btn>
                            <v-spacer></v-spacer>
                            <v-icon color="red">mdi-heart</v-icon>
                            <span>{{ feed.like_count }}</span>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Floating Action Button -->
        <v-btn fab dark color="primary" class="floating-btn" @click="fnCreateNewFeed">
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
import TopicBlock from './TopicBlock.vue';
import { useFeedStore } from '@/stores/FeedStore';

export default {
    name: 'FeedList',
    setup() {
        const feedStore = useFeedStore();

        // 피드를 가져오는 메서드를 setup에서 호출하지 않고 mounted에서 호출하도록 변경
        const fnView = (id) => {
            this.$router.push({ name: 'FeedDetail', params: { id } });
        };

        const fnCreateNewFeed = () => {
            this.$router.push({ name: 'FeedForm' });
        };

        return {
            feeds: feedStore.feeds,
            fnView,
            fnCreateNewFeed,
            fetchFeeds: feedStore.fetchFeeds, // fetchFeeds를 feedStore의 메서드로 바인딩
        };
    },
    components: {
        TopicBlock,
    },
    methods: {
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
    },
    mounted() {
        this.fetchFeeds(); // feedStore의 fetchFeeds를 호출
    }
};
</script>

<style scoped>
.feed-card {
    align-items: center;
    width: 650px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

.feed-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.image-container {
    width: 650px;
    height: 650px;
    overflow: hidden;
}

.feedList-image {
    height: 700px;
    width: 700px;
    object-fit: cover;
}

.content-box {
    padding: 30px;
}

.v-card-title {
    font-weight: bold;
}

.v-card-subtitle {
    font-size: 14px;
    color: gray;
    margin-top: -8px;
}

.v-card-text {
    margin-top: -10px;
    font-size: 16px;
}

.v-icon {
    margin-right: 5px;
}

.floating-btn {
    position: fixed;
    top: 130px;
    right: 30px;
    z-index: 1000;
}
</style>
