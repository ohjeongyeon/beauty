<template>
    <div style="margin: auto;">
        <div style="font-size: 30px; font-weight: 800; margin-bottom: 40px; margin-top: 50px; color: #424242;">로그인</div>
        <v-sheet class="mx-auto" width="450">
            <v-form fast-fail @submit.prevent="submitForm" class="form">
                <v-text-field v-model="userId" :rules="userIdRules" label="User ID"></v-text-field>
                <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password"></v-text-field>
                <v-btn class="mt-2" type="submit" block style="height:50px; background-color: pink; font-weight:900;">
                    로그인
                </v-btn>
            </v-form>
            <div class="routerLink3">
                <router-link to="/join" style="text-decoration: none; color:#616161;">회원가입</router-link> |
                <router-link to="/findid" style="text-decoration: none; color:#616161;">아이디 찾기</router-link> |
                <router-link to="/findpwd" style="text-decoration: none; color:#616161;">비밀번호 찾기</router-link>
            </div>
        </v-sheet>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';

export default {
    data() {
        return {
            userId: '',
            password: '',
            userIdRules: [
                value => !!value || '아이디를 입력하세요.',
                value => value.length >= 6 || '아이디는 최소 6자 이상이어야 합니다.',
            ],
            passwordRules: [
                value => !!value || '비밀번호를 입력하세요.',
                value => value.length >= 6 || '비밀번호는 최소 6자 이상이어야 합니다.',
            ],
        };
    },
    methods: {
        async submitForm() {
            const userStore = useUserStore();
            try {
                const success = await userStore.login(this.userId, this.password);
                if (success) {
                    alert('로그인 성공');
                    this.$router.push('/mainpage'); // 로그인 성공 시 메인 페이지로 이동
                } else {
                    alert('아이디 또는 비밀번호가 잘못되었습니다.');
                }
            } catch (error) {
                console.error('로그인 중 오류 발생:', error);
            }
        }
    }
};
</script>

<style>
.form {
    margin-bottom: 25px;
}

.routerLink3 {
    font-size: 14px;
    font-weight: bolder;
    margin: auto;
    color: #616161;
    float: right;
}
</style>
