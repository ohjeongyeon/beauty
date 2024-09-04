<template>
    <v-container fluid style="margin-top: 150px;">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card class="detail-card">
                    <!-- 피드 이미지 -->
                    <v-img :src="feed.image" class="detail-image"></v-img>

                    <!-- 피드 내용 -->
                    <v-card-title>{{ feed.title }}</v-card-title>
                    <v-card-subtitle>by {{ feed.author }} | {{ feed.created_at }}</v-card-subtitle>

                    <v-card-text>
                        <p>{{ feed.content }}</p>
                        <h3>Product Information</h3>
                        <p>{{ feed.product }}</p>
                    </v-card-text>

                    <!-- 액션 버튼 -->
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="goBack">Back</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "FeedDetail",
    data() {
        return {
            feed: null,  // 기본적으로 null로 설정
        };
    },
    created() {
        this.fetchFeedDetail();
    },
    methods: {
        fetchFeedDetail() {
            const id = this.$route.params.id;

            // 실제 API 호출을 통해 데이터를 가져오는 코드로 대체해야 합니다.
            // 여기서는 예시로 하드코딩된 데이터를 사용합니다.
            const mockData = {
                1: {
                    title: "Lovely Makeup",
                    image: require("@/assets/hotfeed/hotfeed1.jpg"),
                    author: "Jane Doe",
                    created_at: "2023-09-01",
                    content: "Discover the secrets of a lovely makeup look with these tips!",
                    product: "Makeup Kit A",
                },
                2: {
                    title: "Glamour Styles",
                    image: require("@/assets/hotfeed/hotfeed2.jpg"),
                    author: "John Smith",
                    created_at: "2023-09-02",
                    content: "Explore glamorous styles for every occasion.",
                    product: "Fashion Accessories B",
                },
                3: {
                    title: "Beauty Trends 2023",
                    image: require("@/assets/hotfeed/hotfeed3.jpg"),
                    author: "Emily Johnson",
                    created_at: "2023-09-03",
                    content: "Stay ahead with the latest beauty trends of 2023.",
                    product: "Skincare Set C",
                },
            };

            this.feed = mockData[id] || null;  // ID에 해당하는 데이터가 없으면 null
        },
        goBack() {
            this.$router.push({ name: "FeedList" });
        },
    },
};
</script>

<style scoped>
.detail-card {
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.detail-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

.v-card-title {
    font-weight: bold;
    margin-top: 20px;
}

.v-card-subtitle {
    font-size: 14px;
    color: gray;
    margin-top: -8px;
}

.v-card-text {
    margin-top: 20px;
    font-size: 16px;
}

.v-btn {
    margin-top: 20px;
}
</style>
