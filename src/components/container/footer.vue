<template>
    <div class="footer" :style="{height: `${footerHeight}px`}">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @file footer
 */
export default {
    name: 'Footer',
    props: {
        footerHeight: {
            'type': [String, Number],
            'default': 60
        }
    }
};
</script>

<style>
    .footer {
        width: 100%;
        border: 1px solid #555;
    }
</style>