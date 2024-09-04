<template>
    <div style="margin-top: 100px;">
        <div style="font-size: 30px; font-weight: 800; text-align: center; color: #424242;">
            회원가입
        </div>
        <v-sheet class="mx-auto" width="500" style="margin-top: 80px; margin-bottom: 80px;">
            <v-form @submit.prevent="submitForm">

                <!-- 이메일 필드 -->
                <v-text-field ref="emailField" v-model="email" :rules="emailRules" label="Email">
                </v-text-field>
                <v-btn @click="checkEmail" :disabled="emailCheckLoading || emailCheckStatus === false" class="mb-4"
                    color="primary">
                    {{ emailCheckLoading ? '확인 중...' : '중복확인' }}
                </v-btn>
                <v-alert v-if="emailCheckStatus !== null" :type="emailCheckStatus ? 'error' : 'success'">
                    {{ emailCheckStatus ? '이메일이 이미 사용 중입니다.' : '사용 가능한 이메일입니다.' }}
                </v-alert>

                <!-- 사용자 아이디 필드 -->
                <v-text-field ref="useridField" v-model="userid" :rules="useridRules" label="User ID">
                </v-text-field>
                <v-btn @click="checkUserId" :disabled="userIdCheckLoading || userIdCheckStatus === false" class="mb-4"
                    color="primary">
                    {{ userIdCheckLoading ? '확인 중...' : '중복확인' }}
                </v-btn>
                <v-alert v-if="userIdCheckStatus !== null" :type="userIdCheckStatus ? 'error' : 'success'">
                    {{ userIdCheckStatus ? '아이디가 이미 사용 중입니다.' : '사용 가능한 아이디입니다.' }}
                </v-alert>

                <!-- 닉네임 필드 -->
                <v-text-field ref="nicknameField" v-model="nickname" :rules="nicknameRules" label="Nickname">
                </v-text-field>
                <v-btn @click="checkNickname" :disabled="nicknameCheckLoading || nicknameCheckStatus === false"
                    class="mb-4" color="primary">
                    {{ nicknameCheckLoading ? '확인 중...' : '중복확인' }}
                </v-btn>
                <v-alert v-if="nicknameCheckStatus !== null" :type="nicknameCheckStatus ? 'error' : 'success'">
                    {{ nicknameCheckStatus ? '닉네임이 이미 사용 중입니다.' : '사용 가능한 닉네임입니다.' }}
                </v-alert>

                <!-- 비밀번호 필드 -->
                <v-text-field ref="passwordField" v-model="password" :rules="passwordRules" label="Password"
                    type="password">
                </v-text-field>

                <!-- 비밀번호 확인 필드 -->
                <v-text-field ref="confirmPasswordField" v-model="confirmPassword" :rules="confirmPasswordRules"
                    label="Confirm Password" type="password">
                </v-text-field>

                <!-- 사용자 이름 필드 -->
                <v-text-field ref="usernameField" v-model="username" :rules="usernameRules" label="Username">
                </v-text-field>

                <!-- 생년월일 필드 -->
                <v-text-field ref="birthdateField" v-model="birthdate" :rules="birthdateRules" label="Birthdate"
                    placeholder="YYYYMMDD" @input="formatBirthdate">
                </v-text-field>

                <!-- 제출 버튼 -->
                <v-btn class="mt-4" type="submit" block color="primary">Sign Up</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    setup() {
        const router = useRouter(); 
        const userStore = useUserStore();

        const email = ref('');
        const userid = ref('');
        const nickname = ref('');
        const username = ref('');
        const password = ref('!');
        const confirmPassword = ref('');
        const birthdate = ref('');

        const emailCheckStatus = ref(null);
        const emailCheckLoading = ref(false);
        const userIdCheckStatus = ref(null);
        const userIdCheckLoading = ref(false);
        const nicknameCheckStatus = ref(null);
        const nicknameCheckLoading = ref(false);

        const emailRules = [
            (v) => !!v || '이메일은 필수입니다.',
            (v) => /.+@.+\..+/.test(v) || '유효한 이메일 주소를 입력하세요.',
        ];

        const useridRules = [
            (v) => !!v || '아이디는 필수입니다.',
            (v) => (v && v.length >= 4) || '아이디는 최소 4자 이상이어야 합니다.',
        ];

        const nicknameRules = [
            (v) => !!v || '닉네임은 필수입니다.',
            (v) => (v && v.length >= 2) || '닉네임은 최소 2자 이상이어야 합니다.',
        ];

        const passwordRules = [
            (v) => !!v || '비밀번호는 필수입니다.',
            (v) => (v && v.length >= 6) || '비밀번호는 최소 6자 이상이어야 합니다.',
        ];

        const confirmPasswordRules = [
            (v) => !!v || '비밀번호 확인은 필수입니다.',
            (v) => v === password.value || '비밀번호가 일치하지 않습니다.',
        ];

        const usernameRules = [
            (v) => !!v || '사용자 이름은 필수입니다.',
        ];

        const birthdateRules = [
            (v) => !!v || '생년월일은 필수입니다.',
            (v) => /^\d{8}$/.test(v) || '생년월일은 YYYYMMDD 형식이어야 합니다.',
        ];

        const checkEmail = async () => {
            emailCheckLoading.value = true;
            console.log(email);
            try {
                emailCheckStatus.value = await userStore.checkEmail(email.value);
                console.log(emailCheckStatus.value);
            } catch (error) {
                console.error('이메일 확인 중 오류 발생:', error);
            } finally {
                emailCheckLoading.value = false;
            }
        };

        const checkUserId = async () => {
            userIdCheckLoading.value = true;
            try {
                userIdCheckStatus.value = await userStore.checkUserId(userid.value);
            } catch (error) {
                console.error('아이디 확인 중 오류 발생:', error);
            } finally {
                userIdCheckLoading.value = false;
            }
        };

        const checkNickname = async () => {
            nicknameCheckLoading.value = true;
            try {
                nicknameCheckStatus.value = await userStore.checkNickname(nickname.value);
            } catch (error) {
                console.error('닉네임 확인 중 오류 발생:', error);
            } finally {
                nicknameCheckLoading.value = false;
            }
        };

        const formatBirthdate = () => {
            if (birthdate.value.length === 8) {
                birthdate.value = birthdate.value.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
            }
        };

        const submitForm = async () => {
            if (password.value !== confirmPassword.value) {
                alert('비밀번호가 일치하지 않습니다.');
                return;
            }

            const userData = {
                userId: userid.value,
                email: email.value,
                password: password.value,
                nickname: nickname.value,
                username: username.value,
                birthdate: birthdate.value,
            };

            try {
                const response = await userStore.signUp(userData);
                console.log(response);
                if (response.data) {
                    alert('회원가입이 성공적으로 완료되었습니다.');
                    router.push('/loginpage');
                } else {
                    alert('회원가입에 실패했습니다.');
                }
            } catch (error) {
                console.error('회원가입 중 오류 발생:', error);
                console.error('회원가입 중 오류 발생:', error);
                alert('회원가입에 실패했습니다.');
            }
        };

        return {
            email,
            userid,
            nickname,
            username,
            password,
            confirmPassword,
            birthdate,
            emailCheckStatus,
            emailCheckLoading,
            userIdCheckStatus,
            userIdCheckLoading,
            nicknameCheckStatus,
            nicknameCheckLoading,
            checkEmail,
            checkUserId,
            checkNickname,
            submitForm,
            emailRules,
            useridRules,
            nicknameRules,
            passwordRules,
            confirmPasswordRules,
            usernameRules,
            birthdateRules,
            formatBirthdate,
        };
    },
});
</script>
