import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

Vue.config.productionTip = false;

// new Vue({
//   // 3. 注册路由对象
//   router,
//   render: (h) => h(App),
// }).$mount("#app");

const vm = new Vue({
  // 3. 注册路由对象
  router,
  render: (h) => h(App),
}).$mount("#app");

console.log("vue: ", vm);
