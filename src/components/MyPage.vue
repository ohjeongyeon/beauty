<template>
    <div class="my-page">
        <div class="space"></div>

        <!-- 사용자 정보 섹션 -->
        <UserInfoSection />

        <!-- 탭 영역 -->
        <v-tabs v-model="tab" fixed-tabs class="tab-area">
            <v-tab class="topic-tab" @click="navigateTo('MyFeeds')">내 게시물</v-tab>
            <v-tab class="topic-tab" @click="navigateTo('MyInfo')">내 정보</v-tab>
        </v-tabs>

        <!-- 탭 콘텐츠 -->
        <div class="tab-content-container">
            <router-view></router-view> <!-- 라우터 뷰를 통해 각 탭에 맞는 컴포넌트를 로드 -->
        </div>
    </div>
</template>

<script>
import UserInfoSection from '@/components/UserInfoSection.vue'; // 새 컴포넌트 import
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        UserInfoSection,  // 컴포넌트 등록
    },
    setup() {
        const tab = ref(0);
        const router = useRouter();

        const navigateTo = (routeName) => {
            router.push({ name: routeName });
        };

        return {
            tab,
            navigateTo,
        };
    },
};
</script>

<style scoped>
body {
    background-color: #FCE4EC;
}

.my-page {
    min-height: calc(100vh - 230px);
    padding: 20px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.space {
    height: 100px;
}

.tab-area {
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 2px solid #e0e0e0;
    /* 탭 영역 하단에 라인 추가 */
}

.topic-tab {
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: #424242;
}

.topic-tab:hover {
    color: #f48fb1;
    /* 탭 hover 시 색상 변경 */
}

.tab-content-container {
    width: 100%;
    min-height: 600px;
    /* 각 탭 콘텐츠의 최소 높이 설정 */
    padding: 20px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
