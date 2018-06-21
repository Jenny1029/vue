<template>
    <div>
        <span v-show="showOrHidden">儿子知道爸爸喝了，儿子也想喝</span>
        <tt-button v-show="showOrHidden" @click="sonDrink">儿子也要喝一个</tt-button>
        <tt-button @click="motherBuy">妈妈给儿子买一个</tt-button>
    </div>
</template>
<script>
    import ttButton from '@/view/common/button'
    export default {
        props: {
            showOrHidden: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                
            }
        },
        methods: {
            sonDrink(){
                this.$emit('tell-father', true);
                this.$root.eventBus.$emit('annoyChild', -1);
            },
            motherBuy(){
                this.$root.eventBus.$emit('annoyChild', -1);
            }
        },
        components: {
            ttButton
        }
    }
</script>