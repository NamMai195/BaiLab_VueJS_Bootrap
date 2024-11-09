<template>
    <h1>{{message}}</h1>
    <button v-bind:title="button" @click="changeMessage">click đi</button>
</template>
<script>
export default{
    data() {
        return {
            message: 'Hello Vue.js!',
            button:"Nhấn Để Thay Đổi Lời Chào"
        };
    },
    methods: {
        changeMessage() {
            this.message = this.message === 'Hello Vue.js!'? 'Goodbye Vue.js!' : 'Hello Vue.js!';
            this.button = this.button === 'Nhấn Để Thay Đ��i L��i Chào'? 'Đã Thay Đ��i' : 'Nhấn Để Thay Đ��i L��i Chào';
        }
    }
}
</script>