<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="FigmaFinder"/> -->
    <Hero />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/home/Hero.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Hero
  }
}
</script>
