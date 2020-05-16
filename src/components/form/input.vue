<template>
    <input
        type="text"
        :value="curValue"
        @input="handleInput"
        @blur="handleBlur"
    />
</template>

<script>
/**
 * @file input
 */
export default {
    name: 'MInput',
    props: {
        value: {
            'type': String,
            'default': ''
        },
        prop: {
            'type': String,
            'default': ''
        }
    },
    watch: {
        value(val) {
            this.curValue = val;
        }
    },
    data() {
        return {
            curValue: this.value
        };
    },
    methods: {
        handleInput(e) {
            const value = e.target.value;
            this.curValue = value;
            this.$emit('input', value);
        },
        handleBlur() {
            this.$bus.$emit('input-blur', {
                value: this.curValue,
                prop: this.prop
            });
        }
    }
};
</script>
