import { createRouter, createWebHistory } from 'vue-router';
import FeedList from '@/components/FeedList.vue';
import MainPage from '@/components/MainPage.vue';
import FeedForm from '@/components/FeedForm.vue';
import FeedDetail from '@/components/FeedDetail.vue';
import MyPage from '@/components/MyPage.vue';
import MyFeeds from '@/components/MyFeeds.vue';  // 새로운 컴포넌트들 추가
import MyInfo from '@/components/MyInfo.vue';
import EditProfile from '@/components/EditProfile.vue';
import ProductRanking from '@/components/ProductRanking.vue';
import LoginPage from '@/components/LoginPage.vue';
import JoinPage from '@/components/JoinPage.vue';


const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/feedlist',
        name: 'FeedList',
        component: FeedList
    },
    {
        path: '/feedlist/:id',
        name: 'FeedDetail',
        component: FeedDetail,
    },
    {
        path: '/create',
        name: 'FeedForm',
        component: FeedForm,
    },
    {
        path: '/mypage',
        component: MyPage,
        children: [
            {
                path: 'myfeed',
                name: 'MyFeeds',
                component: MyFeeds,
            },
            {
                path: 'myinfo',
                name: 'MyInfo',
                component: MyInfo,
            },
            {
                path: 'edit',
                name: 'EditProfile',
                component: EditProfile,
            },
            {
                path: '',
                redirect: { name: 'MyFeeds' },  // 기본적으로 'MyPosts'로 리다이렉트
            },
        ],
    },
    {
        path: '/productranking',
        name: 'productranking',
        component: ProductRanking,
    },

    {
        path: '/loginpage',
        name: 'LoginPage',
        component: LoginPage,
    },

    {
        path: '/joinpage',
        name: 'JoinPage',
        component: JoinPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
