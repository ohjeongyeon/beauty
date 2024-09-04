<template>
    <v-app-bar>
        <v-app-bar-title
            style="color :#FF4081; font-weight:700; width: 140px; text-align: left; margin-left: 40px; cursor: pointer;">
            🌈GlowUp
        </v-app-bar-title>

        <v-spacer></v-spacer> <!-- 중앙 정렬을 위해 추가 -->
        <searchbar />

        <v-spacer></v-spacer> <!-- 중앙 정렬을 위해 추가 -->

        <div class="nav-content">
            <router-link to="/feedlist" class="link"
                style="text-decoration: none; font-size: 14px; color: #424242; font-weight: 600; font-style:inherit;">FEED</router-link>

            <router-link to="/mypage" class="link"
                style="text-decoration: none; font-size: 14px; color: #424242; font-weight: 600; font-style:inherit;">MYPAGE</router-link>

            <router-link to="/loginpage" class="link"
                style="text-decoration: none; font-size: 14px; color: #424242; font-weight: 600; font-style:inherit;">LOGIN</router-link>

            <router-link to="/joinpage" class="link"
                style="text-decoration: none; font-size: 14px; color: #424242; font-weight: 600; font-style:inherit;">JOIN</router-link>


            <router-link to="/productranking" class="link"
                style="text-decoration: none; font-size: 14px; color: #424242; font-weight: 600; font-style:inherit;">PRODUCT
                RANKING</router-link>
        </div>
    </v-app-bar>
</template>``

<script>


export default {
    name: 'PageHeader',

};
</script>

<style>
.nav-content {
    margin-right: 30px;
    display: flex;
    align-items: center;
}

.link {
    padding: 10px;
}

.search-field .v-input__control {
    height: 40px;
    /* 높이를 줄여줍니다 */
    box-shadow: none;
    /* 그림자 제거 */
    /* 밑줄 제거 */
}

.search-field .v-input__slot {
    border-bottom: none !important;
    /* 밑줄 제거 */
}

.v-app-bar-title__placeholder {
    width: 120px;
    float: left;
}
</style>
