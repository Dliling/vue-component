<template>
    <div>
        <m-container></m-container>
        <pre v-highlightjs="ContainerCode" class="code-wrap">
            <code class="javascript"></code>
        </pre>
    </div>
</template>

<script>
/**
 * @file container view
 */
import MContainer from '../components/MContainer';
import ContainerCode from '!!raw-loader!../components/MContainer';
export default {
    components: {
        'm-container': MContainer
    },
    data() {
        return {
            ContainerCode
        };
    }
};
</script>