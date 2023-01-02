<template>
    <div>
        <!-- Statua component -->
        <Status :status="status" /> 
        <div class="main-content">
            <section class="main-tasks">
                <div class="title">
                    <h1><i class="fas fa-clipboard"></i>Rejalaringiz ro'yxati</h1>
                </div>
                <div class="content content-cards">
                    <template v-if="tasks.length">
                        <!-- Listing tasks -->
                        <Task v-for="task in tasks" :key="task.id" :task="task" />
                    </template>
                    <div v-else class="no-task">
                        <div class="background"></div>
                        <div class="content">
                            <div class="group-header">
                                <i class="fas icon">🎉</i>
                                <h1>Hozircha,hech narsa yo'q</h1>
                            </div>
                            <button @click="showModal" class="btn button-primary">
                                <h3>Yangi qo'shish</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>



<script>
    import eventBus from '../eventBus'
    import Task from '@/components/task/task'
    import Status from '@/components/Status/status'
    export default {
        components: {
            Task,
            Status
        },
        data() {
            return {
                modalBoo: true
            }
        },
        props: {
            tasks: {
                required: true
            }
        },
        computed: {
            status() {
                let tasksTotal = this.tasks.length // Task total 
                let tasksToDo = this.tasks.filter(tasks => tasks.task.concluded == false).length // Tasks pending 
                let tasksDone = this.tasks.filter(tasks => tasks.task.concluded == true).length // Tasks done
                let tasksPercent = Math.round(tasksDone / tasksTotal * 100) || 0 // Tasks percent
                return {
                    tasksTotal,
                    tasksToDo,
                    tasksDone,
                    tasksPercent
                }
            }
        },
        methods: {
            showModal() {
                eventBus.$emit('showModal', this.modalBoo) // Show modal by center button
            },
        },
        created() {
            eventBus.$on('sendIdTask', (task) => { // Deleting card
                const i = this.tasks.indexOf(task)
                this.tasks.splice(i, 1)
            })
        },
    }
</script>


<style src="./style.scss" lang="scss" scoped />