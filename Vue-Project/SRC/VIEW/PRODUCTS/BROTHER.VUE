<template>
    <div style="display:inline-block;">
        儿子生气指数 {{angry}}%  （这是兄弟组件哟！）
    </div>
</template>
<script>
    export default {
        data(){
            return {
                angry: 50 
            }
        },
        mounted(){
            this.$root.eventBus.$on('annoyChild',msg => {
                this.angry += msg;
            })
        },
        beforeDestroyed(){
            this.$root.eventBus.$off('annoyChild');
        }
    }
</script>