<template>
<!-- 每个元素高度不固定，如何做 -->
    <div class="list-view" @scroll="handleScroll">
        <div class="list-view-platform" :style="{height: contentHeight}">
            <div ref="content" class="list-view-content">
                <div
                    class="list-view-item"
                    :style="{height: itemHeight + 'px'}"
                    v-for="item in visibleData"
                    :key="item.id"
                >
                    {{item.value}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * @file vue virtual list
 */
export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        itemHeight: {
            'type': Number,
            'default': 30
        }
    },
    computed: {
        // 内容高度
        contentHeight() {
            return (this.data.length * this.itemHeight) + 'px';
        }
    },
    mounted() {
        // 计算可视区域的高度
        this.calculateVisibleData();
    },
    data() {
        return {
            visibleData: []
        };
    },
    methods: {
        handleScroll() {
            // TODO 节流滚动
            const scrollTop = this.$el.scrollTop;
            this.calculateVisibleData(scrollTop);
        },
        // 根据偏移量，计算可见数据
        calculateVisibleData(scrollTop = 0) {
            const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight);
            const start = Math.floor(scrollTop / this.itemHeight);
            const end = visibleCount + start;
            // 预留几条数据
            this.visibleData = this.data.slice(start, end + 2);
            // 将可视区域做移动
            this.$refs.content.style.webkitTransform = `translateY(${start * this.itemHeight}px)`;
        }
    }
};
</script>

<style>
.list-view {
    height: 300px;
    overflow: auto;
    border: 1px solid #eee;
    position: relative;
    text-align: center;
}

.list-view-platform {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

.list-view-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
