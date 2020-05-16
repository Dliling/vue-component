<template>
    <div class="header" :style="{height: `${headerHeight}px`}">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @file header
 */
export default {
    name: 'Header',
    props: {
        headerHeight: {
            'type': [String, Number],
            'default': 60
        }
    }
};
</script>

<style>
    .header {
        width: 100%;
        border: 1px solid #555;
    }
</style>