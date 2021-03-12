<template>
    <div>
        <Sidebar></Sidebar>
        <TodoList></TodoList>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList.vue';
    import Sidebar from '@/components/Sidebar.vue';

    export default {
        name: 'Home',
        components: {
            TodoList,
            Sidebar,

        }
    }
</script>

<style scoped>
    div {
        display: flex;
    }
</style>