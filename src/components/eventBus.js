import Vue from 'vue';
export default new Vue({
    methods: {
        sendShowModal(modal){
            this.$emit('ShowSend', modal)
        },
        onShowModal(callback){
            this.$on('ShowSend', callback)
        },
    }
})