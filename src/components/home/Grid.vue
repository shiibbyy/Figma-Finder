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

export default {
    name: 'Grid',
    components: {
    FeatureCard
    },
    data() {
            return {
                resources: [
                    { featuredImage: 'https://images.pexels.com/photos/1267051/pexels-photo-1267051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                    title: 'UI Kit V1', 
                    price: "Free", 
                    authorImage: 'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                    authorName: 'Kieran', 
                    resourceLink: 'https://www.google.com/', resourceInfo: 'https://www.reddit.com/', 
                    id: '2', 
                    slug:'ui-kit-v2' },

                    { featuredImage: 'https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    title: 'UI Kit V2', 
                    price: "£20", 
                    authorImage: 'https://images.pexels.com/photos/395085/pexels-photo-395085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    authorName: 'Kieran', 
                    resourceLink: '', 
                    resourceInfo: 'google.com', 
                    id: '3', 
                    slug:'ui-kit-v2' },

                    { featuredImage: 'https://images.pexels.com/photos/1267051/pexels-photo-1267051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                    title: 'UI Kit V3', 
                    price: "Free", 
                    authorImage: 'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                    authorName: 'Kieran', 
                    resourceLink: 'https://twitter.com/', 
                    resourceInfo: 'https://twitter.com/', 
                    id: '4', 
                    slug:'ui-kit-v2' },

                    { featuredImage: 'https://images.pexels.com/photos/1267051/pexels-photo-1267051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'UI Kit V4', price: "Free", authorImage: 'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', authorName: 'Kieran', resourceLink: '', resourceInfo: 'google.com', id: '5', slug:'ui-kit-v2' }
                ]
            }
        },
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.grid .container {
    display: flex;
    justify-content: space-between;
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
