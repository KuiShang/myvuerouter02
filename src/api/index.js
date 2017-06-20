/**
 * Created by shangkuikui on 2017/6/19.
 */
const _data = '假装我是很多很多的内容...';
export default {
    getDatas (cb) {
        setTimeout(() => cb(_data), 4000)
    },
}