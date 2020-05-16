<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
/**
 * @file form
 */
import Vue from 'vue';
Vue.prototype.$bus = new Vue();

export default {
    provide() {
        return {
            mForm: this
        };
    },
    props: {
        model: {
            type: Object,
            default() {
                return {};
            }
        },
        rules: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            fields: []
        };
    },
    created() {
        // 不可写在mounted里，组件已挂载，监听还未注册
        this.$bus.$on('form-item-add', field => {
            if (field) {
                this.fields.push(field);
            }
        });
    },
    methods: {
        validate(cb) {
            let valid = true;
            this.fields.forEach(field => {
                if (!field.validate()) {
                    valid = false;
                }
            });
            cb(valid);
        }
    }
};
</script>
