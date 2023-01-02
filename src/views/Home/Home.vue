<template>
  <div class="main">
    <tasks-component :tasks="tasks"/>
    <!-- Modal component to add new task and receiving task -->
    <Modal @taskAdded="addTask" />
  </div>
</template>
 


<script>
  import tasksComponent from '@/components/tasks/tasks'
  import Modal from '@/components/ModalAdd/Modal'
  export default {
    name: 'Home',
    components: {
      tasksComponent,
      Modal
    },
    data() {
      return {
        tasks: [] //Tasks array
      }
    },
    methods: {
      addTask(task) {  // receiving task and pushing to tasks array
        this.tasks.push(task)
        console.log(this.tasks)
      }
    },
    watch:{ // stoing task to local storage
      tasks:{
        deep: true,
        handler(){
          localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
      }
    },
    created(){ // receiving tasks from local storage
      const json = localStorage.getItem('tasks')
      const array = JSON.parse(json) 
      this.tasks = Array.isArray(array) ? array : []
    },
  }
</script>


<style src="./style.scss" lang="scss" scoped />