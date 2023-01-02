<template>
  <div id="app">
    <main>
      <Home />
    </main>
    <Navbar />
    
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Navbar'
  import Home from '@/views/Home/Home'
 
  export default {
    components: {
      Navbar,
      Home,
     
    }
  }
</script>

<style src="./_App.scss" lang="scss" />