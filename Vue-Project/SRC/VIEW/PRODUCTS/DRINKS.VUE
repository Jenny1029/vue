<template>
    <div class="drinks-container">
        <table class="table-container">
            <thead>
                <tr>
                    <th>种类</th>
                    <th>剩余数量</th>
                    <th>父组件操作</th>
                    <th>子组件信息</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in drinksList" :key="index">
                <td>{{item.type}}</td>
                <td>{{item.num}}</td>
                <td><tt-button @click="fatherDrink(item)">爸爸喝一个</tt-button></td>
                <td><child-prop :showOrHidden="item.isFatherDrink" @tell-father="tell_father(item)"></child-prop></td>
            </tr>
                <tr v-if="!drinksList || drinksList.length === 0">
                    <td colspan="3" style="text-align:center;">没有符合条件的数据</td>
                </tr>
            </tbody>
        </table>
        <brother></brother>
    </div>
</template>
<script>
    import childProp from './child-prop'
    import ttButton from '@/view/common/button'
    import brother from '@/view/products/brother'
    export default {
        data(){
            return {
                drinksList: []
            }
        },
        methods: {
            fatherDrink(item){
                item.isFatherDrink = !item.isFatherDrink;
                item.num -=1
                item.num = item.num <= 0 ? 0 : item.num;
                this.$root.eventBus.$emit('annoyChild', 1);
            },
            tell_father(item){
                item.isFatherDrink = !item.isFatherDrink;
            },
            fetchDrinksList(){
                this.$axios.get(`/tt/products/${this.routeName}`).then(res => {
                    if( res.statusText === 'OK' ){
                        this.drinksList = res.data.data;
                    }
                })
            }
        },
        beforeMount(){
            this.routeName = this.$route.params.route;
        },
        mounted(){
            this.fetchDrinksList();
        },
        components: {
            childProp, ttButton, brother
        }
    }
</script>
<style scoped lang="scss">
    .drinks-container{
        width: 500px;
    }
</style>