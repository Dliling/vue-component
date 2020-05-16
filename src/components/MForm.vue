
<template>
    <div>
        <m-form :model="model" :rules="rules" ref="mform">
            <m-form-item label="name" prop="name">
                <m-input :value="model.name" prop="name"/>
            </m-form-item>
        </m-form>
        <button type="button" @click="handleSubmit">submit</button>
    </div>
</template>

<script>
/**
 * @file form
 */
import MForm from './form/form';
import MFormItem from './form/form-item';
import MInput from './form/input';
export default {
    components: {
        'm-form': MForm,
        'm-form-item': MFormItem,
        'm-input': MInput
    },
    data() {
        return {
            model: {
                name: ''
            },
            rules: {
                name: [
                    {required: true, message: 'it is required'}
                ]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.mform.validate(valid => {
                if (valid) {
                    alert('it is ok');
                }
                else {
                    alert('wait');
                }
            });
        }
    }
};
</script>