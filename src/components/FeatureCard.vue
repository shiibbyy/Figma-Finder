<template>
    <div class="feature-card">
        <div class="feature-image-container">
            <img class="feature-image" src="https://images.pexels.com/photos/1262352/pexels-photo-1262352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="feature image">
        </div>
        <div class="card-content">
            <div class="row-1">
                <h4 class="bold">UI Kit</h4>
                <button class="btn">FREE</button>
            </div>
            <div class="row-2">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Author Image">
                <p>By <strong>Kieran Parker</strong></p>
            </div>
            <div class="row-3">
                <button class="btn main">
                    <p class="semibold light">Download Resource</p>
                </button>
                <button class="btn icon"><p class="semibold light">I</p></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureCard',
    props: ['title', 'authorName', 'downloadLink', 'price', 'authorImage', 'featuredImage', 'slug'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.feature-card {
    width: 350px;
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
    margin-bottom: 20px;
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

.row-3 {
    display: flex;
    align-items: center;
}

.row-3 .main {
    flex: 1;
    padding: 0;
    height: 26px;
}

.row-3 .icon {
    padding: 0;
    height: 26px;
    width: 26px;
    margin-left: 10px;
}
</style>
