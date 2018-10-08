<template>
    <div class="feature-card">
        <div class="feature-image-container">
            <img class="feature-image" :src="featuredImage" alt="feature image">
        </div>
        <div class="card-content">
            <div class="row-1">
                <h4 class="bold">{{ title }}</h4>
                <button class="price"><h6 class="bold">{{ price }}</h6></button>
            </div>
            <div class="row-2">
                <img :src="authorImage" alt="Author Image">
                <p>By <strong>{{ authorName }}</strong></p>
            </div>
            <div class="row-3">
                <a :href="resourceLink" class="btn main" target="_blank"><p class="light semibold">Download Resource</p></a>
                <a :href="resourceInfo" class="btn icon" target="_blank"><p class="light semibold">I</p></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureCard',
    props: [
        'featuredImage', 'title', 'price', 'authorName', 'authorImage', 'resourceLink', 'resourceInfo', 
        ],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.feature-card {
    margin: 18px 15px;
    // height: 437px;
    background-color: $white;
    border-radius: 4px;
}

.feature-image-container {
    width: 100%;
}

.feature-image {
    object-fit: cover;
    height: 262px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.card-content {
    padding: 20px;
}

.row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.row-1 .price {
    background-color: $white;
    border: 2px solid $black;
    color: $black;
    padding: 0px 10px;
    border-radius: 4px;
    height: 24px;
}

.row-2 {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.row-2 img {
    height: 24px;
    width: 24px;
    border-radius: 100%;
    object-fit: cover;
}

.row-2 p {
    margin-left: 10px;
}

.row-3 {
    display: flex;
    align-items: center;
}

.row-3 .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0;
    height: 26px;
    background-color: $black;
    text-decoration: none !important;
}

.row-3 .icon {
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 0;
    height: 26px;
    width: 26px;
    margin-left: 10px;
    text-decoration: none !important;
}
</style>
