<template>
    <div class="container" :class="{'row-wrap': hasSide}">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @file container
 * @desc flex布局，请先确认是否支持
 */
export default {
    name: 'Container',
    data() {
        return {
            hasSide: false
        };
    },
    mounted() {
        this.$children.forEach(vm => {
            if (vm.$options.name === 'Side') {
                this.hasSide = true;
            }
        });
    }
};
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .row-wrap {
        flex-direction: row;
    }
</style>