<template>
    <div class="post-gallery">
        <h2>📷️ 내 게시물</h2>
        <div class="gallery">
            <div v-for="(post, index) in visiblePosts" :key="index" class="gallery-item">
                <img :src="post.image" :alt="'Post ' + index" />
            </div>
        </div>
        <button v-if="visiblePosts.length < userStore.posts.length" @click="loadMore" class="load-more">
            더보기
        </button>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';
import { ref, computed } from 'vue';

export default {
    setup() {
        const userStore = useUserStore();
        const visiblePostsCount = ref(9);

        const visiblePosts = computed(() => {
            return userStore.posts.slice(0, visiblePostsCount.value);
        });

        const loadMore = () => {
            visiblePostsCount.value += 6;
        };

        return {
            userStore,
            visiblePosts,
            loadMore,
        };
    }
}
</script>

<style scoped>
.post-gallery {
    margin: auto;
    width: 100%;
    height: auto;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 10px;
}

.gallery-item {
    width: calc(33.33% - 10px);
    height: 350px;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.load-more {
    display: block;
    width: 15%;
    height: 45px;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    margin: 50px auto;
    background-color: #f8bbd0;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
</style>
