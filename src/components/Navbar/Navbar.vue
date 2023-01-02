<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">

        
        <div class="navbar-content">
            <div class="navbar-menu">
            <router-link to="/" class="navbar-item">    
                    <div class="menu-item">
                        <i class="fas fa-home"></i>
                        <h3>Bosh sahifa</h3>
                    </div>
                    
            </router-link>

                
            </div>

            

            <div class="navbar-item menu-bars-content">
                <button @click="show = !show" class="menu-bars-button button">
                    <i v-if="!show" class="fas fa-bars solo-i"></i>
                    <i v-if="show" class="fas fa-times solo-i jello-horizontal"></i>
                </button>
            </div>

            <section :class="{showMenu: show}" class="menu-mobile opacity-slow">
                <div @click="show = !show" class="background-menu-mobile"></div>
                <div class="content-menu-mobile">
                    <a class="navbar-item">
                        <div class="menu-item">
                            <i class="fas fa-home"></i>
                            <h3>Bosh sahifa</h3>
                        </div>
                    </a>

                   
                </div>
            </section>
        </div>
    </nav>

</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style src="./style.scss" lang="scss" scoped />