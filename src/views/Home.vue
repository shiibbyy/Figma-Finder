<template>
  <div class="home">
    <Hero />
    <Grid />

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/home/Hero.vue'
import Grid from '@/components/home/Grid.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Grid
  }
}
</script>
