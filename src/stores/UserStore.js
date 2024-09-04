import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8085'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        async checkEmail(email) {
            try {
                const response = await axios.post('/user/check-email', { email });
                console.log(response)
                return response.data; // API가 Boolean 값을 직접 반환
            } catch (error) {
                console.error('이메일 확인 중 오류 발생:', error);
                throw error;
            }
        },
        async checkUserId(userId) {
            try {
                const response = await axios.post('/user/check-userid', { userId });
                return response.data; // API가 Boolean 값을 직접 반환
            } catch (error) {
                console.error('아이디 확인 중 오류 발생:', error);
                throw error;
            }
        },
        async checkNickname(nickname) {
            try {
                const response = await axios.post('/user/check-nickname', { nickname });
                return response.data; // API가 Boolean 값을 직접 반환
            } catch (error) {
                console.error('닉네임 확인 중 오류 발생:', error);
                throw error;
            }
        },

        //회원가입
        async signUp(userData) {
            try {
                const response = await axios.post('/user/join', userData);
                return response; // 회원가입 성공 시 응답
            } catch (error) {
                console.error('회원가입 중 오류 발생:', error);
                throw error;
            }
        },
        //로그인
        async login(userId, password) {
            try {
                const response = await axios.post('/user/login', { userId, password });
                console.log(response);
                if (response.data) {
                    this.user = response.data; // 로그인 성공 시 사용자 데이터를 저장
                    return true;
                }
            } catch (error) {
                console.error('로그인 실패:', error);
                return false;
            }
        },
        logout() {
            this.user = null; // 로그아웃 시 사용자 정보 초기화
        }
    },
});
