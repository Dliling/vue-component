<template>
    <div>
        <div @click="toggle">
            <span v-if="isFolder">{{open ? '-' : '+'}}</span>
            {{treedata.name}}
        </div>
        <ul v-show="open" v-if="isFolder">
            <m-tree
                v-for="(item, index) in treedata.cList"
                :key="index"
                :treedata="item"
            >
            </m-tree>
        </ul>
    </div>
</template>

<script>
/**
 * @file treeNode 组件递归
 */
export default {
    name: 'MTree',
    props: {
        treedata: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    computed: {
        isFolder() {
            return this.treedata.cList && this.treedata.cList.length;
        }
    },
    data() {
        return {
            open: false
        };
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        }
    }
};
</script>
