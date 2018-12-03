<template>
    <div v-if="resource" class="section resource">
        <div class="container">
            <div class="left">
                <img class="header-image" :src="resource.featuredImage" alt="feature image">
            </div>
            <div class="right">
                <h1 class="light">{{ resource.resourceTitle }}</h1>

                <!-- <p class="light">{{ resource.resourceDescription }}</p> -->

                <div class="creator-row">
                    <a :href=resource.creatorProfile target="_blank" >
                        <img  :src="resource.creatorImage">
                    </a>

                    <a :href=resource.creatorProfile target="_blank" >
                        <p class="light">By <strong>{{ resource.creatorsName }}</strong></p>
                    </a>
                </div>

                <div class="info-row">
                    <button class="price"><h6 class="bold regular">{{ resource.resourcePrice }}</h6></button>

                    <a :href="resource.downloadLink" class="single-resource" target="_blank" >
                    <p class="light semibold" for="info" >Download Resource</p>
                </a>
                </div>
                
            </div>

        </div>
        <div class="body-content">
            <div class="narrow-container">
                <div class="content">
                    <h3 class="semibold">Words From {{ resource.creatorsName }}</h3>
                    <p class="body-text">{{ resource.resourceDescription }}</p>
                </div>
        </div>
        </div>
        
        
    </div>    
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'FigmaFind',
    data() {
        return {
            resource: null,
        }
    },

    created() {
        let ref = db.collection('resources').where('slug', '==', this.$route.params.resource_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.resource = doc.data()
                this.resource.id = doc.id
            })
        })
    }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

.resource {
    height: 640px;
    // padding-top: 40px;
    min-height: 500px;
    background-color: $off-black;
    position: relative;
}

.resource .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    flex-wrap: wrap;
}

.resource .left {
    flex-basis: 50%;
}

.resource .header-image {
    object-fit: cover;
    height: 350px;
    width: 450px;
    border-radius: 4px;
}

.resource .right {
    flex-basis: 50%;
}

.resource h1 {
    width: 80%
}

.resource a {
    text-decoration: none;
}

.creator-row {
    display: flex;
    align-items: center;
}

.creator-row img {
    height: 32px;
    width: 32px;
    border-radius: 100%;
    object-fit: cover;
}

.creator-row p {
    margin-left: 10px;
    margin-bottom: 5px;
}

.creator-row a {
    text-decoration: none;
}

.info-row {
    width: 100%;
    display: flex;
    margin: 50px 0px 30px 0px;
}

.info-row .price {
    background-color: $off-black;
    border: 1px solid $white;
    color: $white;
    padding: 0px 20px;
    border-radius: 4px;
    height: 28px;
    margin: 0px;
}

.info-row .single-resource {
    display: flex;
    align-items: center;
    background-color: $purple;
    color: $white;
    padding: 0px 60px;
    border-radius: 4px;
    margin-left: 20px;
    height: 28px;
}

.info-row h6 {
    color: $white;
}

.resource .body-content {
    background-color: $white;
    width: 100%;
    display: flex;
    justify-content: center;
    
}

// .resource .content {
    
// }

.resource .body-text {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
}


.resource h3 {
    padding-bottom: 20px
}




</style>
