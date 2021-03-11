<template>
    <div>
        <p>j'ai compris</p>
        <TodoList :time="time"></TodoList>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
export default {
    name: 'Home',
    components: {
        TodoList
    },
    computed: {
        time: function() {
            return Date.now()
        }
    }
}
</script>

<style scoped>

</style>