
<template>
    <div>
        <m-tree :data="list"></m-tree>
    </div>
</template>

<script>
import MTree from '../components/tree/index';
export default {
    components: {
        'm-tree': MTree
    },
    data() {
        return {
            list: [
                {
                    name: 'web',
                    cList: [
                        {
                            name: 'Vue',
                            cList: [
                                {
                                    name: 'Vue-router',
                                    cList: [
                                        {
                                            name: 'js'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'react',
                    cList: [
                        {
                            name: 'redux'
                        }
                    ]
                }
            ]
        };
    }
};
</script>