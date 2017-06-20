<template lang="html">
    <div class="pagea">
        pagec-由于没有在路由进入前获取数据，所以也就没有关闭loading状态，切换到此页面 会一直loading
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        beforeRouteLeave (to, from, next) {
            console.log('before leave')
            this.$store.commit('changestate',true);
            next()
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .pagea {
        width: 800px;
        height: 800px;
        border: 2px solid yellow;
    }

</style>