<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
/**
 * @file content
 */
export default {
    name: 'Content'
};
</script>

<style>
    .content {
        flex-grow: 1;
        border: 1px solid #555;
    }
</style>