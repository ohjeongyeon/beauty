<template>
    <div class="hot-feeds">
        <h1>🔥Hot feeds🔥</h1>
        <ul class="feed-list">
            <li v-for="feed in feeds" :key="feed.id" class="feed-item">
                <div class="feed-card">
                    <img :src="feed.image" alt="feed Image" class="feed-image" />
                    <div class="feed-content">
                        <h3>{{ feed.title }}</h3>
                        <p>{{ feed.content }}</p>
                        <p>❤️{{ feed.likeCount }}</p>
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
            feeds: [
                { id: 1, title: '러블리메이크업', content: 'Summary of hot post 2', image: require('@/assets/hotfeed/hotfeed1.jpg'), likeCount: '39' },
                { id: 2, title: '러블리메이크업', content: 'Summary of hot post 2', image: require('@/assets/hotfeed/hotfeed1.jpg'), likeCount: '39' },
                { id: 3, title: '러블리메이크업', content: 'Summary of hot post 3', image: require('@/assets/hotfeed/hotfeed1.jpg'), likeCount: '39' },
            ]
        };
    }
};
</script>

<style scoped>
.hot-feeds {
    margin-top: 150px;
    margin:auto;
    padding: 20px;
    width: 90%;
    margin-bottom: 50px;
    text-align: center;
}

.hot-feeds h1 {
    margin-bottom: 50px;
}

.feed-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.feed-item {
    margin-bottom: 40px;
    width: 30%;
}

.feed-card {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s;
    background-color: white;
}

.feed-card:hover {
    transform: scale(1.03);
}

.feed-image {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
}

.feed-content {
    margin-left: 15px;
    text-align: left;
    flex: 1;
}

.feed-content h3 {
    font-size: 1.5em;
    margin: 0;
    color: #333;
}

.feed-content p {
    margin: 10px 0 0;
    color: #666;
}
</style>
