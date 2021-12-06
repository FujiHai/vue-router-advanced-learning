<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
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
