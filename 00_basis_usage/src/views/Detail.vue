<template>
  <div>
      <!-- 方式一：通过当前路由规则，获取数据 -->
      通过当前路由规则获取：{{ $route.params.id }}
      <br>
      <!-- 方式二：路由规则中开启 props 传递参数 -->
      通过开启 props 获取：{{ id }}
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id']
}
</script>

<style>

</style>