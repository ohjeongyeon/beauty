<template>
    <v-container fluid style="padding: 0;">
        <div
            style="width: 100%; height: 350px; background-color: pink; display: flex; justify-content: center; align-items: center;">
            <v-row justify="center" style="width: 100%;">
                <v-col cols="12" sm="8" md="6">
                    <v-text-field v-model="searchQuery" append-icon="mdi-magnify" label="제품 검색" single-line hide-details
                        class="simple-search-bar"></v-text-field>
                </v-col>
            </v-row>
        </div>

        <h2 class="text-center" style="margin-top: 120px; margin-bottom: 120px;">Top 100 제품 랭킹</h2>


        <!-- 제품 랭킹 리스트 -->
        <v-row justify="center">
            <v-col cols="12" sm="6" md="4" v-for="(product, index) in filteredRankings" :key="index">
                <v-card class="ranking-card">
                    <v-img :src="product.image" height="250px" cover></v-img>

                    <!-- 제품 정보 -->
                    <v-card-title class="product-title">{{ product.productName }}</v-card-title>
                    <v-card-subtitle class="product-brand">{{ product.brand }}</v-card-subtitle>
                    <v-card-text class="product-description">
                        {{ product.description }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductRanking',
    data() {
        return {
            rankings: [],
            searchQuery: '',
        };
    },
    computed: {
        filteredRankings() {
            // 검색어에 따라 필터링된 제품 리스트를 반환
            if (this.searchQuery) {
                return this.rankings.filter(product =>
                    product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            return this.rankings;
        },
    },
    methods: {
        async fetchRankings() {
            try {
                const response = await axios.get(`/api/productrankings`); // Top 100 제품을 가져오는 API 호출
                this.rankings = response.data;
            } catch (error) {
                console.error('제품 랭킹을 가져오는 중 오류 발생:', error);
            }
        },
    },
    mounted() {
        this.fetchRankings();
    },
};
</script>

<style scoped>
.ranking-card {
    align-items: center;
    width: 100%;
    margin: 20px auto;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ranking-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
}

.product-title {
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    font-size: 1.2rem;
}

.product-brand {
    text-align: center;
    color: #888;
    font-size: 1rem;
}

.product-description {
    text-align: center;
    margin: 10px 15px;
    font-size: 0.9rem;
    color: #555;
}

.v-text-field {
    margin-bottom: 30px;
}
.text-center {
    text-align: center;
}

.simple-search-bar {
    background-color: transparent;
    /* 배경 투명하게 */
    box-shadow: none;
    /* 그림자 제거 */
    padding: 0;
    /* 추가적인 패딩 제거 */
    font-size: 1.2rem;
    /* 글씨 크기 유지 */
}
</style>
