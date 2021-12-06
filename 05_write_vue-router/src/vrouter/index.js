let _Vue = null;

export default class VRouter {
  static install(Vue) {
    /**
     * 1. 判断当前插件是否已经被安装
     * 2. 把 Vue 构造函数记录到全局变量
     * 3. 把创建 Vue 实例传入的 router 对象注入到 Vue 实例上
     */

    if (VRouter.install.installed) {
      return;
    }
    VRouter.install.installed = true;

    _Vue = Vue;

    // _Vue.prototype.$router = this.$options.router

    // 混入
    _Vue.mixin({
      beforeCreate() {
        // Vue 实例创建时, $options 中才会有 router 属性
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      },
    });
  }

  constructor(options) {
    this.options = options;
    this.routeMap = {};
    this.data = _Vue.observable({
      current: "home",
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  createRouteMap() {
    // 遍历所有的路由规则，把路由规则解析成键值对的形式，
    // 存储到 routeMap 中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    // 创建 router-link 和 router-view 组件

    // router-link 本质上是一个 a 标签
    Vue.component("router-link", {
      props: {
        to: String,
      },
      // 使用 template 属性，需要引入带有 compiler 特性的 vue
      // template: '<a :href="to"><slot></slot></a>',
      render(h) {
        return h(
          "a",
          {
            // dom 对象属性
            attrs: {
              href: this.to,
            },
            on: {
              click: this.clickHandler,
            },
          },
          [this.$slots.default]
        );
      },
      methods: {
        clickHandler(e) {
          // 改变地址栏，不发送请求
          history.pushState({}, "", this.to);
          this.$router.data.current = this.to;
          e.preventDefault();
        },
      },
    });

    const self = this;
    // router-view 组件
    Vue.component("router-view", {
      render(h) {
        // h 函数用于 获取虚拟 dom
        const component = self.routeMap[self.data.current];
        return h(component);
      },
    });
  }

  initEvent() {
    window.addEventListener("popstate", () => {
      this.data.current = window.location.pathname;
    });
  }
}
