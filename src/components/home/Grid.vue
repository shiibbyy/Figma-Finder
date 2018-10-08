<template>
    <div class="section grid">
        <div class="container grid-container">
            <!-- <h1>This Is The Grid</h1> -->
            <div class="featured-card" v-for="resource in resources" :key="resource.id">
                <FeatureCard 
                    v-bind:featuredImage="resource.featuredImage"
                    v-bind:title="resource.title"
                    v-bind:price="resource.price"
                    v-bind:authorName="resource.authorName"
                    v-bind:authorImage="resource.authorImage"
                    v-bind:resourceLink="resource.resourceLink"
                    v-bind:resourceInfo="resource.resourceInfo"
                />
            </div>
            
        </div>
    </div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'
import db from '@/firebase/init'

export default {
    name: 'Grid',
    components: {
    FeatureCard
    },
    data() {
            return {
                resources: []
            }
        },
        methods: {
            
        },
        created(){
            db.collection('resources').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let resource = doc.data()
                    resource.id = doc.id
                    this.resources.push(resource)
                    
                })
            })
        }
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.grid .container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.grid-container {
    width: $desktop-container + 30px;
}

.grid {
    background-color: $grey;
    padding-top: 100px;
    padding-bottom: 100px;
}

.featured-card {
    min-width: 280px;
    flex-basis: 33.333%;
}

</style>
