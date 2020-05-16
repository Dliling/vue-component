<template>
    <div>
        <m-list></m-list>
        <pre v-highlightjs="ListCode" class="code-wrap">
            <code class="javascript"></code>
        </pre>
    </div>
</template>

<script>
import MList from '@/components/MList';
import ListCode from '!!raw-loader!../components/MList';

export default {
    components: {
        MList
    },
    data() {
        return {
            ListCode
        };
    }
};
</script>