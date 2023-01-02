<template>
    <section class="status-section">
        <div class="status-content">
            <div class="group-header">
                <div class="group-percent">
                    <h1>{{status.tasksPercent}}<span>%</span></h1>
                    <h3>bajarildi</h3>
                </div>
                <div class="status-bar">
                    <div class="bar" :style="{width: status.tasksPercent + '%'}"></div>
                </div>
                    <p>Sizning qilish kerak bo'lgan rejalaringiz</p>
            </div>
           
            <div class="group-bottom">
                <div class="status-item">
                    <div class="group-info-header">
                        <h3>Rejalaringizning soni : {{status.tasksToDo}} ta</h3>
                        <h3></h3>
                    </div>
                    <div></div>
                </div>
                <div class="status-item">
                    <h2>─</h2>
                </div>
                <div class="status-item">
                    <div class="group-info-header">
                       
                        <h3>Made by ProDev22</h3>
                    </div>
                    <div></div>
                </div>
                
            </div>
        </div>
    </section>
</template>



<script>
    export default {
        props: {
            status: {
                required: true
            }
        },
    }
</script>


<style src="./style.scss" lang="scss" scoped />