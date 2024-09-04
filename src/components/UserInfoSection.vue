<template>
    <div class="user-info-section">
        <div class="user-info">
            
            <div class="info-details">
                <h1>{{ userStore.nickname }}님💕</h1>
                <p><strong>📭️ 이메일:</strong> {{ userStore.email }}</p>
                <p><strong>🎂 생년월일:</strong> {{ userStore.birthdate }}</p>
                <p><strong>🙋 팔로워 수:</strong> {{ userStore.followers }}명</p>
                <p><strong>💭 한줄소개:</strong> {{ userStore.userInfo }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';

export default {
    setup() {
        const userStore = useUserStore();

        return {
            userStore,
        };
    },
};
</script>

<style scoped>
.info-details{
    width:800px;
    padding: 50px;
}
</style>
