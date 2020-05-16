
<template>
    <div>
        <m-list :data="data"></m-list>
    </div>
</template>

<script>
import MList from '@/components/list/list';
export default {
    components: {
        MList
    },
    data() {
        let data = [];
        for (let i = 0; i < 10000; i++) {
            data.push({
                value: i
            });
        }
        return {
            data
        };
    }
};
</script>