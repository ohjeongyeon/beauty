<template>
  <v-app>
    <v-main class="main-content">
      <PageHeader />
      <router-view />
      <v-spacer></v-spacer> <!-- 여백 추가 -->
      <PageFooter />
    </v-main>
  </v-app>
</template>

<script>
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style scoped>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.v-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.v-spacer {
  flex-grow: 1;
}
</style>
