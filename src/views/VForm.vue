<template>
    <div>
        <m-form></m-form>
        <pre v-highlightjs="FormCode" class="code-wrap">
            <code style="javascript"></code>
        </pre>
    </div>
</template>

<script>
/**
 * @file form
 */
import MForm from '../components/MForm';
import FormCode from '!!raw-loader!../components/MForm';
export default {
    components: {
        'm-form': MForm
    },
    data() {
        return {
            FormCode
        };
    }
};
</script>