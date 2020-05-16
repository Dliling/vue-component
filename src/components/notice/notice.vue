<template>
    <div class="box">
        <h3>{{title}}</h3>
        <p class="box-content">{{message}}</p>
    </div>
</template>

<script>
/**
 * @file notice
 */
export default {
    props: {
        title: {
            type: String,
            default: ''
        },

        message: {
            type: String,
            default: ''
        },

        duration: {
            type: Number,
            default: 1000
        }
    },

    data() {
        return {};
    },

    mounted() {
        this.show();
    },

    methods: {
        show() {
            setTimeout(this.hide, this.duration);
        },

        hide() {
            this.$el.remove();
            this.$destroy();
        }
    }
};
</script>

<style>
.box {
    position: fixed;
    top: 10px;
    left: 0;
    width: 100%;
    border: 1px solid #eee;
    text-align: center;
    background: #fff;
    box-sizing: border-box;
}
h3 {
    font-size: 20px;
    margin: 0;
}
.box-content {
    background: #efefef;
    margin: 0;
}
</style>
