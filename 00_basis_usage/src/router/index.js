import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

// 1. 注册路由组件
// Vue.use 是用来注册插件，它会调用传入对象的 install 方法
Vue.use(VueRouter);

// 2. 路由规则
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
  {
    path: "/photo",
    name: "Photo",
    component: () =>
      import(/* webpackChunkName: "photo" */ "../views/Photo.vue"),
  },
  // 动态路由
  {
    path: "/detail/:id",
    name: "Detail",
    // 设置 props 属性，会把 URL 中的参数传递给组件，在组件中通过 props 来接收 URL 参数
    props: true,
    component: () =>
      import(/* webpackChunkName: "Detail" */ "../views/Detail.vue"),
  },
];

// 2. 创建 router 对象，需要传递路由规则。
const router = new VueRouter({
  routes,
});

export default router;
