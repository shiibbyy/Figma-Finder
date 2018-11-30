<template>
  <div class="section grid">
    <div class="grid-container">
      <!-- <div class="filter-container">
                <input type="text" v-model="search" placeholder="Search Finds">
      </div>-->
      <!-- <h1>This Is The Grid</h1> -->
      <div
        class="featured-card"
        v-for="resource in visibleResources"
        v-bind:visibleResources="visibleResources"
        v-bind:currentPage="currentPage"
        :key="resource.id"
      >
        <FeatureCard
          v-bind:featuredImage="resource.featuredImage"
          v-bind:resourceTitle="resource.resourceTitle"
          v-bind:resourcePrice="resource.resourcePrice"
          v-bind:creatorsName="resource.creatorsName"
          v-bind:creatorProfile="resource.creatorProfile"
          v-bind:creatorImage="resource.creatorImage"
          v-bind:downloadLink="resource.downloadLink"
          v-bind:resourceOriginalLink="resource.resourceOriginalLink"
          v-bind:resourceCategory="resource.resourceCategory"
        />
      </div>
    </div>
    <pagination
      v-bind:resources="resources"
      v-on:page:update="updatePage"
      v-bind:currentPage="currentPage"
      v-bind:pageSize="pageSize"
    />
  </div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'
import db from '@/firebase/init'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Grid',
  components: {
    FeatureCard,
    Pagination
  },
  created () {
    db.collection('resources')
      .orderBy('timestamp')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
    
          
          let resource = doc.data()
          resource.id = doc.id

          if (resource.reviewed != false) {
            this.resources.push(resource)
          }
          
        })
        this.resources = this.resources.reverse()
        this.updateVisibleResources()

      })
  },

  data () {
    return {
      resources: [],
      currentPage: 0,
      pageSize: 18,
      visibleResources: []
    }
  },

  computed: {
    // search function. Issue being i cannot use another resource array
    // filteredFinds: function(){
    //     return this.resources.filter((resource) => {
    //         return resource.resourceTitle.match(this.search);
    //     })
    // }
  },

  methods: {
    updatePage (pageNumber) {
      this.currentPage = pageNumber
      this.updateVisibleResources()
    },
    updateVisibleResources () {
      // this.resources = this.resources.reverse()
      this.visibleResources = this.resources.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      )

      // stop from neg pages
      // if (this.visibleResources.length == 0 && this.currentPage > 0) {
      //     this.updatePage(this.currentPage - 1);
      // }
    },

    filter: function (event) {}
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

.grid .container {
}
.filter-container {
  width: 100%;
  margin-right: 15px;
  margin-left: 15px;
}

.grid-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: $desktop-container + 30px;
}

.grid {
  background-color: $grey;
  padding-top: 100px;
  padding-bottom: 100px;

  @media only screen and (max-width: $small-desktop) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: $large-mobile) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.featured-card {
  min-width: 280px;
  flex-basis: 33.333%;

  @media only screen and (max-width: $small-desktop) {
    flex-basis: 49%;
  }

  @media only screen and (max-width: $large-mobile) {
    flex-basis: 100%;
  }
}
</style>
