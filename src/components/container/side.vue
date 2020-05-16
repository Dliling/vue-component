<template>
    <div class="side" :style="{width: `${sideWidth}px`}">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @file side
 */
export default {
    name: 'Side',
    props: {
        sideWidth: {
            'type': [String, Number],
            'default': 100
        }
    }
};
</script>

<style>
    .side {
        border: 1px solid #555;
    }
</style>