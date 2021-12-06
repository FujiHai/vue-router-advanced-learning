<template>
  <div id="app">
    <!-- 5. 创建链接 -->
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
    <!-- 4. 创建路由占位组件,当前路由匹配到的组件会在此处显示 -->
    <div class="router-view-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabs: Object.freeze([
        { to: "/", name: "Home" },
        { to: "about", name: "About" },
        { to: "video", name: "Video" },
      ]),
      curTabIndex: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs div {
  display: inline-block;
  width: 80px;
  padding: 16px;
  cursor: pointer;
}

.tabs__tab--active {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom-color: transparent;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.tabs__tab--inactive {
  /* Has only the bottom border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.router-view-wrapper {
  padding: 48px;
  width: 600px;
  margin: 0 auto;
}
</style>
