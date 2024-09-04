<template>
    <v-container class="edit-profile-container">
        <v-card class="edit-profile-card">
            <v-card-title>
                <h2>회원정보 수정</h2>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="userName" label="이름" :rules="[rules.required]" required></v-text-field>

                    <v-text-field v-model="nickname" label="닉네임" :rules="[rules.required]" required></v-text-field>

                    <v-text-field v-model="email" label="이메일" :rules="[rules.required, rules.email]"
                        required></v-text-field>

                    <v-text-field v-model="birthdate" label="생년월일" :rules="[rules.required]" required></v-text-field>

                    <v-textarea v-model="userInfo" label="한줄소개" :rules="[rules.required]"></v-textarea>

                    <div class="button-group">
                        <v-btn color="primary" @click="saveProfile">저장</v-btn>
                        <v-btn color="secondary" @click="cancel">취소</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const userStore = useUserStore();
        const router = useRouter(); // useRouter로 router 객체를 가져옵니다.
        const valid = ref(false);

        // 폼 필드에 사용자 정보를 바인딩
        const userName = ref(userStore.userName);
        const nickname = ref(userStore.nickname);
        const email = ref(userStore.email);
        const birthdate = ref(userStore.birthdate);
        const userInfo = ref(userStore.userInfo);

        const rules = {
            required: value => !!value || '필수 입력 사항입니다.',
            email: value => /.+@.+\..+/.test(value) || '유효한 이메일을 입력하세요.',
        };

        const saveProfile = () => {
            if (valid.value) {
                // 사용자 정보를 저장
                userStore.userName = userName.value;
                userStore.nickname = nickname.value;
                userStore.email = email.value;
                userStore.birthdate = birthdate.value;
                userStore.userInfo = userInfo.value;

                // 저장 후 마이페이지로 이동
                router.push('/mypage/myinfo');
            }
        };

        const cancel = () => {
            router.push('/mypage/myinfo');
        };

        return {
            userName,
            nickname,
            email,
            birthdate,
            userInfo,
            valid,
            rules,
            saveProfile,
            cancel,
        };
    }
}
</script>

<style scoped>
.edit-profile-container {
    max-width: 600px;
    margin: 50px auto;
}

.edit-profile-card {
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.v-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
