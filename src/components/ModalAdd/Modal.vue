<template>
    <div>
        <button @click="modal = !modal" class="btn button-add-task p-2">
            <i class="fas fa-plus m-0"></i>
        </button>

        <div class="modal-container opacity-slow" v-if="modal">
            <Notification v-if="showNotification" />
            <div class="modal">
                <div class="menu">
                    <div class="menu-group">
                        <button @click="boldFunc" class="btn menu-item"><i class="fas fa-bold"></i></button>
                        <button @click="italicFunc" class="btn menu-item"><i class="fas fa-italic"></i></button>
                        <button @click="underlineFunc" class="btn menu-item"><i class="fas fa-underline"></i></button>
                    </div>
                    <div class="menu-group">
                        <button @click="orderNumFunc" class="btn menu-item">
                            <h3>1<i class="fas fa-stream"></i></h3>
                        </button>
                        <button @click="unorderedNumFunc" class="btn menu-item">
                            <h3>U<i class="fas fa-stream"></i></h3>
                        </button>
                    </div>
                    <div class="menu-group">
                        <button @click="justifyleftFunc" class="btn menu-item">
                            <i class="fas fa-outdent"></i>
                        </button>
                        <button @click="justifycenterFunc" class="btn menu-item">
                            <i class="fas fa-align-justify"></i>
                        </button>
                        <button @click="justifyrightFunc" class="btn menu-item">
                            <i class="fas fa-indent"></i>
                        </button>
                    </div>
                </div>
                <div class="group-text">
                    <div contenteditable="true" @keydown.enter="save" data-text="Rejalaringizni matnini kiriting :)" spellcheck="false"
                        class="text-area" id="title" />
                </div>
                <div class="group-button">
                    <button @click="save" class="btn button-success">
                        <h3>Saqlash</h3>
                    </button>
                    <button @click="modal = !modal" class="btn button-danger">
                        <h3>Chiqish</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from '../eventBus'
    import Notification from '@/components/Notification/notification'
    import DateFactory from '@/factories/dateFactory'
    const factory = DateFactory()


    export default {
        components: {
            Notification
        },
        data() {
            return {
                modal: false,
                showNotification: false,
            }
        },
        watch: {
            modal() { // Removing scroll when opening modal
                let body = document.body
                if (this.modal == true) {
                    body.classList.add("noScroll")
                } else {
                    body.classList.remove("noScroll")
                }
            }
        },
        created() { // Closing modal by ESC key
            eventBus.$on('showModal', (data) => {
                this.modal = data
            })
            document.addEventListener('keyup', this.onEsc)
        },
        beforeDestroy() {
            document.removeEventListener('keyup', this.onEsc)
        },
        methods: {  // Closing modal by ESC key
            onEsc(e) {
                if (!e) e = window.event
                let keyCode = e.keyCode || e.which
                if (keyCode == '27') {
                    this.modal = false
                }
            },
            save() {
                let id = Date.now() // Creatgin a id by the date.now()
                let tit = document.getElementById("title").innerHTML // Taking the task and storing on the let tit.

                if (tit.length === 0) { // Verifying that the task is not empty.
                    this.showNotification = true;
                    setTimeout(() => { // If it is empty, a notification will appear.
                        this.showNotification = false;
                    }, 4500)
                } else {
                    // If it is not empty, all data will be stored in the task object.
                    let task = {
                        id,
                        tit,
                        concluded: false,
                        dateCreate: factory.BuildDate(new Date()), // It will create a custom date according to the current date.
                        hourCreate: factory.BuildTime(new Date()), // It will create a custom time according to the current date.
                        concludedDate: String,
                        concludedHour: String,
                    }
                    // It will emit an event that will be heard by the parent component (Home) and the task will be passed to it.
                    this.$emit('taskAdded', {
                        task: task
                    })
                    // Finally, the modal will close.
                    this.modal = false
                }

            },
            boldFunc() {
                document.execCommand("bold", false, null)
            },
            italicFunc() {
                document.execCommand("italic", false, null)
            },
            underlineFunc() {
                document.execCommand("underline", false, null)
            },
            orderNumFunc() {
                document.execCommand("insertOrderedList", false, null)
            },
            unorderedNumFunc() {
                document.execCommand("insertUnorderedList", false, null)
            },
            justifyleftFunc() {
                document.execCommand("justifyleft", false, null)
            },
            justifyrightFunc() {
                document.execCommand("justifyright", false, null)
            },
            justifycenterFunc() {
                document.execCommand("justifycenter", false, null)
            },
        },
    }
</script>

<style src="./style.scss" lang="scss" scoped />