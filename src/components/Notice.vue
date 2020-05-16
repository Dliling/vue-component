
<template>
    <div>
        <div class="btn" @click="$notice('hello', 'world', {duration: 2000})">open</div>
    </div>
</template>

<script>
import Vue from 'vue';
import Notice from '../components/notice/plugin';

Vue.use(Notice);
export default {};
</script>

<style scoped>
    .btn {
        width: 100px;
        height: 50px;
        margin: 100px auto 0;
        border: 1px solid red;
    }
</style>