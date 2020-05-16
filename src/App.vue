<template>
    <div id="app">
        <div class="nav">
            <router-link to="/mList">列表</router-link> | 
            <router-link to="/notice">通知</router-link> |
            <router-link to="/mtree">树</router-link> |
            <router-link to="/mform">表单</router-link> |
            <router-link to="/mcontainer">布局</router-link> |
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App'
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
}
.code-wrap {
    border: 1px solid #eee;
}
</style>
