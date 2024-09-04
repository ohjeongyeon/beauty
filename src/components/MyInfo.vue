<template>
    <div class="info-content" style="width: 400px;">
        <h2>내 정보</h2>
        <div class="info-item-box" style="width:965px;">
            <div class="info-wrapper" style="margin: auto;">
                <div class="info-item">
                    <p><strong>💭 이름:</strong> {{ userStore.userName }}</p>
                </div>
                <div class="info-item">
                    <p><strong>💭 닉네임:</strong> {{ userStore.nickname }}</p>
                </div>
                <div class="info-item">
                    <p><strong>📭️ 이메일:</strong> {{ userStore.email }}</p>
                </div>
                <div class="info-item">
                    <p><strong>🎂 생년월일:</strong> {{ userStore.birthdate }}</p>
                </div>
                <div class="info-item">
                    <p><strong>💭 한줄소개:</strong> {{ userStore.userInfo }}</p>
                </div>
                <v-btn color="primary" @click="editProfile">회원정보 수정</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';
import { useRouter } from 'vue-router'; // useRouter를 가져옵니다.

export default {
    setup() {
        const userStore = useUserStore();
        const router = useRouter(); // useRouter를 사용하여 router 객체를 가져옵니다.

        const editProfile = () => {
            // 회원정보 수정 페이지로 이동
            router.push({ name: 'EditProfile' });
        };

        return {
            userStore,
            editProfile,
        };
    }
}
</script>

<style scoped>
/* 기존 스타일 유지 */
.info-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
}

.info-item-box {
    width: 100%;
}

.info-item {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
}
</style>
