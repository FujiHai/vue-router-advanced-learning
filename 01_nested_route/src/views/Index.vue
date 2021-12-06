<template>
  <div>
    <h1>这里是首页</h1>
    <div class="tabs">
      <div
        v-for="(tab, idx) in tabs"
        :class="{
          tabs__tab: true,
          'tabs__tab--active': idx === curTabIndex,
          'tabs__tab--inactive': idx !== curTabIndex,
        }"
        :key="idx"
        @click="curTabIndex = idx"
      >
        <router-link v-if="tab.to.length < 10" :to="tab.to">{{
          tab.name
        }}</router-link>
        <router-link v-else :to="JSON.parse(tab.to)">{{
          tab.name
        }}</router-link>
      </div>
    </div>

    <div class="button" @click="onRouterReplace">router.replace</div>
    <div class="button" @click="goDetail">router.go</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: Object.freeze([
        { to: "login", name: "Login" },
        { to: '{"name":"detail","params":{"id":123}}', name: "Detail" },
      ]),
      curTabIndex: 0,
    };
  },
  methods: {
    onRouterReplace() {
      this.$router.replace("/login");
    },
    goDetail() {
      this.$router.push({ name: "login", params: { id: 1 } });
    },
  },
};
</script>

<style scoped>
div.button {
  padding: 16px;
  background: slateblue;
  color: whitesmoke;
  margin: 12px;
}
</style>