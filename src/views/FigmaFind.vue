<template>
    <div v-if="resource" class="section figma-find">
        <!-- header seciton -->
        <div class="container header-container">
            <div class="left-container">
                <div class="image-wrapper">
                    <img class="header-image" :src="resource.featuredImage" alt="feature image">
                </div>
            </div>
            <div class="right-container">
                <h1 class="light">{{resource.resourceTitle}}</h1>

                <div class="creator-row">

                    <a :href="resource.creatorProfile">
                        <img :src="resource.creatorImage" alt="Creator Image">
                    </a>

                    <a :href="resource.creatorProfile">
                        <p class="light">
                            By <Strong>{{resource.creatorsName}}</Strong>
                        </p>
                    </a>

                </div>

                <div class="info-row">
                    <button class="price"><h6 class="bold">{{ resource.resourcePrice }}</h6></button>

                    <a :href="downloadLink" class="resource-button" target="_blank" >
                    <h5 class="light semibold" for="info" >Download Resource</h5>
                </a>
                </div>

                <div class="info-row">

                </div>
            </div>
        </div>

        <!-- content body -->
        <div class="container body-container">
            <div class="container">
                <h3 class="semibold">A Few Words From {{resource.creatorsName}}</h3>
                <p class="body-text">{{resource.resourceDescription}}</p>
                <a :href="downloadLink" class="btn main" target="_blank" >
                    <p class="light semibold" for="info" >Download Resource</p>
                </a>
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

.figma-find {
    background-color: $off-black;
}

.figma-find .header-container {
    margin: 150px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.left-container, .right-container {
    flex-basis: 48%
}

.header-image {
    object-fit: cover;
    height: 400px;
    width: 100%;
    border-radius: 4px;
}

.body-container {
    background-color: $white;
    width: 100%;
    display: flex;
    justify-content: center;
}

.body-container .container { 
    display: flex;
    flex-direction: column;
    padding: 100px 0px;
    width: $narrow-desktop-container;
}

.body-container h3 {
    margin-bottom: 24px;
}

.body-container .btn {
    margin-top: 60px;
    text-align: center;
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
    margin-bottom: 4px;
}

.info-row {
    display: flex;
    align-content: center;
    margin-top: 50px;
}

.info-row .price {
    background-color: $off-black;
    border: 1px solid $white;
    margin: 0px;
    padding: 0px 20px;
    border-radius: 4px;
    height: 28px;
    margin-right: 20px;
}

.info-row h6 {
    color: $white;
}

.info-row .resource-button {
    display: flex;
    align-items: center;
    height: 28px;
    background-color: $purple;
    padding: 0px 46px;
    border-radius: 4px;
}

</style>
