<template>
    <div class="divider"></div>
        
        <div class="hot-products">
            <div style="margin-top: 100px;"></div>
            <h1 style="margin-bottom: 100px; text-align: center;">💛HOT PRODUCT💛</h1>

            <ul>
                <li v-for="product in products" :key="product.id">
                    <div class="product-card">
                        <img :src="product.image" alt="product Image" class="product-image" />
                        <div class="product-content">
                            <h3>{{ product.title }}</h3>
                            <p>{{ product.content }}</p>
                            <p>❤️{{ product.likeCount }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, title: '러블리메이크업', content: 'Summary of hot post 2', image: require('@/assets/product/제품1.jpg'), likeCount: '39' },
                { id: 2, title: '러블리메이크업', content: 'Summary of hot post 2', image: require('@/assets/product/제품2.jpg'), likeCount: '39' },
                { id: 3, title: '러블리메이크업', content: 'Summary of hot post 3', image: require('@/assets/product/제품3.jpg'), likeCount: '39' },


            ]
        };
    }
};
</script>

<style scoped>
.hot-products {
    margin: auto;
    padding: 20px;
    width: 90%;

}

.hot-products h2 {

    color: #000000;
    /* 제목 색상 딥 로즈 */
    margin-bottom: 20px;
}

.hot-products ul {
    list-style-type: none;
    padding: 0;
    /* display: flex; */
    margin: auto;
}

.hot-products li {
    /* margin-bottom: 20px; */
    width: 750px;
    padding: 10px;
    margin: auto;

}

.product-card {
    margin: auto;
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s;
}

.product-card:hover {
    transform: scale(1.03);
}

.product-image {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;

}

.product-content {
    margin: auto;
}

.product-content h3 {

    font-size: 1.5em;
    margin: 0;
    color: #333;
}

.product-content p {
    margin: 10px 0 0;
    color: #666;
}

.divider{
    margin-top: 20px;
    border-bottom:1px solid rgb(192, 192, 192) ;
}
</style>
