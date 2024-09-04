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
import axios from 'axios';
import TopicBlock from './TopicBlock.vue';
import { useFeedStore } from '@/stores/feedStore';


export default {
    name: 'FeedList',
    setup(){
        const feedStore = useFeedStore();

        //컴포넌트가 마운트될때 내 피드를 가져온다.
        feedStore.fetchFeeds();

        return{
            feeds : feedStore.feeds,
            fnView(id){
                this.$router.push({name : 'FeedDetail', params:{id}});
            },
            fnCreateNewFeed(){
                this.$router.push({name : 'FeedForm'});
            },
        };
    },
    components: {
        TopicBlock,
    },
    data() {
        return {
            feeds: [], // 초기에는 빈 배열로 시작
        };
    },
    methods: {
        fnView(id) {
            // 특정 피드 보기 액션 처리
            this.$router.push({ name: 'FeedDetail', params: { id: id } });
        },
        fnCreateNewFeed() {
            // 새로운 피드 생성 액션 처리
            this.$router.push({ name: 'FeedForm' });
        },
        fetchFeeds() {
            // API 호출로 피드 데이터 가져오기
            axios.get('http://localhost:8085/api/feeds') // 백엔드 API 엔드포인트를 사용하여 데이터 가져오기
                .then(response => {
                    this.feeds = response.data; // 백엔드에서 받아온 데이터를 feeds에 저장
                })
                .catch(error => {
                    console.error("Error fetching feeds:", error);
                });
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
    },
    mounted() {
        this.fetchFeeds(); // 컴포넌트가 마운트되면 피드 데이터를 가져옵니다
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
