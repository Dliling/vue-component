<template>
    <div>
        <notice></notice>

        <pre v-highlightjs="NoticeCode" class="code-wrap">
            <code class="javascript"></code>
        </pre>
    </div>
</template>

<script>

import Notice from '../components/Notice';
import NoticeCode from '!!raw-loader!../components/Notice';

export default {
    components: {
        Notice
    },
    data() {
        return {
            NoticeCode
        };
    }
};
</script>