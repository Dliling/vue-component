
<template>
    <div style="width: 500px;">
        <m-container>
            <m-side>side</m-side>
            <m-container>
                <m-header>header</m-header>
                <m-content>content</m-content>
                <m-footer>footer</m-footer>
            </m-container>
        </m-container>
    </div>
</template>

<script>
/**
 * @file container
 */
import MContainer from './container/container';
import MHeader from './container/header';
import MFooter from './container/footer';
import MSide from './container/side';
import MContent from './container/content';

export default {
    components: {
        'm-container': MContainer,
        'm-header': MHeader,
        'm-footer': MFooter,
        'm-side': MSide,
        'm-content': MContent
    }
};
</script>