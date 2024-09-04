<template>
    <v-container class="banner-block" fluid style="margin-top:1px;">
        <v-img class="banner-img" :src="banner" width="100%" height="850px" cover></v-img>
    </v-container>
</template>

<script>

export default {
    props: {
        banner: {
            type: String,
            required: true,
            default: require('@/assets/banner/배너1.jpg')
        }
    }
}

</script>

<style scoped>
.banner-block {
    
    padding: 0;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-img {
    object-fit: contain;
}
</style>
