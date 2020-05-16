<template>
    <div>
        <m-tree></m-tree>
        <pre v-highlightjs="TreeCode" class="code-wrap">
            <code class="javascript"></code>
        </pre>
    </div>
</template>

<script>
import MTree from '../components/MTree';
import TreeCode from '!!raw-loader!../components/MTree';

export default {
    components: {
        'm-tree': MTree
    },
    data() {
        return {
            TreeCode
        };
    }
};
</script>