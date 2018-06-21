<template>
    <div class="products-siderbar-container">
        <ul>
            <li v-for="item in siderBarList" :key="item.text" :class="{'active': item.isActive}" @click="setActiveStatus(item);leaveThisPage(item);">{{item.text}}</li>
        </ul>
        <div class="router-view-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                siderBarList: [
                    { text: '饮料', isActive: true, route: 'drinks'},
                    { text: '食物', isActive: false, route: 'foods'},
                    { text: '肉', isActive: false},
                    { text: '汤', isActive: false}
                ]
            }
        },
        methods: {
            setActiveStatus(item){
                this.siderBarList.map( sitem => {
                    sitem.isActive = false;
                })
                item.isActive = true;
            },
            leaveThisPage(item){
                item.route && this.$router.push({
                    name: item.route,
                    params: { route: item.route }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
//用scss编译style样式
    .products-siderbar-container{
        float: left;

        & ul {
            display: inline-block;

            & li {
                padding: 10px 20px;
                margin-bottom: 8px;
                border: 1px solid #ccc;
                cursor: pointer;
                border-radius: 4px;
                box-shadow: 0 0 10px #ccc;
            }
            & li:hover{
                opacity: 0.8;
                border: 1px solid #00a0dc;
            }
        }
        
        & .router-view-container{
            margin-left: 20px;
            display: inline-block;
        }
    }
</style>