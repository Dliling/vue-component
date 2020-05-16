<template>
    <div>
        <node v-for="(item, index) in data" :key="index" :treedata="item"></node>
    </div>
</template>

<script>
/**
 * @file tree
 */
import Node from './node';
export default {
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: {
        Node
    }
};
</script>