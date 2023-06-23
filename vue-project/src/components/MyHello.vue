<template>
    <div>
        <h1 class="title">{{ message }}</h1>
        
    </div>
</template>

<script>
export default {
    name: 'MyHello',

    props:['message'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.title{
    color: blue;
    background-color: gray;
    border-radius: 10px;
}
</style>