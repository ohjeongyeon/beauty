<template>
  <div>
    <BannerBlock :banner="require('@/assets/banner/배너1.jpg')" />
    <HotFeedBlock />
    <HotProductBlock />
  </div>
</template>

<script>
import HotFeedBlock from './HotFeedBlock.vue';
import HotProductBlock from './HotProductBlock.vue';
import BannerBlock from './BannerBlock.vue';

export default {
  components: {
    HotFeedBlock,
    HotProductBlock,
    BannerBlock
  },
};
</script>
