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

  //dynamic meta info
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '(Home) Figma Resources, UI Kits & Templates - FigmaFinder',
      // all titles will be injected into this template
      titleTemplate: '%s - FigmaFinder',
      
      meta: [
        { name: 'description', content: 'this is a test of the description section on the home page' },

        //     <!-- Google / Search Engine Tags -->
        {itemprop: 'name', content:'Figma Resources, UI Kits & Templates - FigmaFinder'},
        {itemprop: 'description', content: 'Figma Resources found by Figma Finder. Figma Finder is a collection of all the best Figma Resources found by us and our community. UI Kits, Icons, Mockups, etc. Created by those who love Figma for you!'},
        {itemprop:'image', content: 'https://i.imgur.com/tUM1X5j.png'}

        //     <!-- Facebook Meta Tags -->
        

    //     <!-- Facebook Meta Tags -->
    // <!-- <meta property="og:url" content="https://www.figmafinder.com">
    // <meta property="og:type" content="website">
    // <meta property="og:title" content="Figma Resources, UI Kits & Templates - FigmaFinder">
    // <meta property="og:description" content="Figma Resources found by Figma Finder. Figma Finder is a collection of all the best Figma Resources found by us and our community. UI Kits, Icons, Mockups, etc. Created by those who love Figma for you!">
    // <meta property="og:image" content="https://i.imgur.com/tUM1X5j.png"> -->
      ]
    },
//meta-info-end

  components: {
    Hero,
    Grid
  },
}
</script>
