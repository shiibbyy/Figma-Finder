<template>
    <div class="section grid">
        <div class="container grid-container">
            <!-- <h1>This Is The Grid</h1> -->
            <div class="featured-card" 
            v-for="resource in visibleResources"
            v-bind:visibleResources="visibleResources"
            v-bind:currentPage="currentPage"
            :key="resource.id">
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
    created(){
            db.collection('resources').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let resource = doc.data()
                    resource.id = doc.id
                    this.resources.push(resource)
                    
                })
                this.updateVisibleResources();
            })
            
        },
    data() {
            return {
                resources: [],
                currentPage: 0,
                pageSize: 5,
                visibleResources: [],
            }
        },
        methods: {
            updatePage(pageNumber) {
                this.currentPage = pageNumber;
                this.updateVisibleResources();
            },
            updateVisibleResources() {
                this.visibleResources = this.resources.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
                

                //stop from neg pages
                // if (this.visibleResources.length == 0 && this.currentPage > 0) {
                //     this.updatePage(this.currentPage - 1);
                // }

            }
        },
}


</script>

<style lang="scss">
@import '@/styles/global.scss';

.grid .container {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
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
