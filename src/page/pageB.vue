<template lang="html">
    <div class="pagea">
        {{content}}
    </div>
</template>
<script type="text/ecmascript-6">
    import api from '../api'
    export default{
        data () {
            return {
                content:'pageb-我是先获取数据在跳转'
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log('我是pageb进入前的导航钩子', to, from)
            api.getDatas(data => {
                next(vm =>{
                    vm.$store.commit('changestate',false);
                    vm.content= data
                })

            })
        },
        beforeRouteLeave (to, from, next) {
            console.log('before leave')
            this.$store.commit('changestate',true);
            next()
        },
        methods: {},
        watch:{
            $route() {
                console.log(123123123)
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .pagea {
        width: 300px;
        height: 300px;
        border: 1px solid red;
    }

</style>