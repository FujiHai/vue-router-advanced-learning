<template>
    <div>
        <div>
            <img src="@/assets/logo.png" alt="vue logo" width="25%">
        </div>
        <div>
            <router-view></router-view>
        </div>
        <div>
            Footer
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout'
}
</script>