<template lang="html">
    <div class="pagea">
        <div class="loading" v-show="this.loading">数据加载中...</div>
        {{content}}
    </div>
</template>

<script type="text/ecmascript-6">
    import api from '../api'
    export default{
        data () {
            return {
                loading: false,
                content: 'pagea-我是先跳转在获取数据'
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.loading = true
                api.getDatas(data => {
                    this.content = data
                    this.loading = false
                })
            }
        },
        beforeRouteLeave (to, from, next) {
            console.log('before leave')
            this.$store.commit('changestate', true);
            next()
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @keyframes mymove {
        0% {
            left: 0px;
        }
        25% {
            left: 200px;
        }
        50% {
            left: 100px;
        }
        75% {
            left: 200px;
        }
        100% {
            left: 0px;
        }
    }

    @keyframes loading {
        from {
            transform: translate(0) scale(0.6);
        }
        to {
            transform: translate(100px) scale(0.9);
        }
    }

    .pagea {
        width: 500px;
        height: 500px;
        border: 4px solid royalblue;

        .loading {
            font-size: 12px;
            position: relative;
            animation: loading 1s infinite linear;
        }
    }

</style>