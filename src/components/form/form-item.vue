<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <div v-if="errMsg" class="error-tips" style="color: red;">{{errMsg}}</div>
        </div>
    </div>
</template>

<script>
/**
 * @file form-item
 */

// import Schema from 'async-validator';

export default {
    name: 'MFormItem',
    inject: ['mForm'],
    props: {
        label: {
            'type': String,
            'default': ''
        },
        prop: {
            'type': String,
            'default': ''
        }
    },
    data() {
        return {
            errMsg: '',
            value: ''
        };
    },
    mounted() {
        if (this.prop) {
            this.$bus.$emit('form-item-add', this);
            this.setRules();
        }
    },
    methods: {
        setRules() {
            this.$bus.$on('input-blur', v => {
                if (v.prop !== this.prop) {
                    return;
                }
                this.value = v.value;
                this.validate();
            });
        },
        validate() {
            // 可借用async-validator
            const rules = this.mForm.rules[this.prop];
            const len = rules.length;
            for (let i = 0; i < len; i++) {
                const item = rules[i];
                if (item.required) {
                    if (this.value) {
                        this.errMsg = '';
                        return true;
                    }
                    this.errMsg = item.message;
                    return false;
                }
            }
        }
    }
};
</script>
