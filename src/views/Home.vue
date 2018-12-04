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
  // metaInfo: {
  //   //basic info
  //   title: 'Figma Resources, UI Kits & Templates',
  //   meta: [
  //     //basic description
  //     {name: 'description', content: 'Figma Resources found by Figma Finder. Figma Finder is a collection of all the best Figma Resources found by us and our community. UI Kits, Icons, Mockups, etc. Created by those who love Figma for you!'},

  //     //Google / Search Engine Tags
  //     {itemprop: 'name', content: 'Figma Resources, UI Kits & Templates - FigmaFinder'},
  //     {itemprop: 'description', content: 'Figma Resources found by Figma Finder. Figma Finder is a collection of all the best Figma Resources found by us and our community. UI Kits, Icons, Mockups, etc. Created by those who love Figma for you!'},
  //     {itemprop: 'image', content: 'https://i.imgur.com/tUM1X5j.png'},

  //     //twitter
  //     {name: 'twitter:card', content: 'summary_large_image'},
  //     {name: 'twitte:title', content: 'Figma Resources, UI Kits & Templates - FigmaFinder'},
  //     {name: 'twitter:description', content: 'Figma Resources found by Figma Finder. Figma Finder is a collection of all the best Figma Resources found by us and our community. UI Kits, Icons, Mockups, etc. Created by those who love Figma for you!'},
  //     {name: 'twitter:image', content: 'https://i.imgur.com/tUM1X5j.png'},

  //     //facebook
  //     {property: 'og:url', content: 'https://www.figmafinder.com'},
  //     {property: "og:type", content: "website"},
  //     {property: "og:title", content: "Figma Resources, UI Kits & Templates - FigmaFinder"},
  //     {property: "og:description", content:"Figma Resources found by Figma Finder. Figma Finder is a collection of all the best Figma Resources found by us and our community. UI Kits, Icons, Mockups, etc. Created by those who love Figma for you!"},
  //     {property: "og:image", content: "https://i.imgur.com/tUM1X5j.png"},
  //   ],
  // },

  components: {
    Hero,
    Grid
  },
}
</script>
