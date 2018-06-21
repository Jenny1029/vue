<template>
    <button type="button" class="tt-button" @click="handleButton">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        methods:{
            handleButton(){
                this.$emit('click');
            }
        }
    }
</script>