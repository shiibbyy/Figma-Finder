<template>
    <div class="feature-card">
        <div class="feature-image-container">
            <!-- <div v-bind:class="compClasses" class="category-tag">
                <h6 class="bold light">{{ resourceCategory }}</h6>
            </div> -->

            <div v-bind:class="compClasses" class="category-tag">
                <h6 class="bold light">{{ resourceCategory }}</h6>
            </div>

            <!-- <img class="feature-image" :src="featuredImage" alt="feature image"> -->
            <router-link :to="{ name: 'FigmaFind', params: { resource_slug: this.slug }}"><img class="feature-image" :src="featuredImage" alt="feature image"></router-link>
        </div>
        <div class="card-content">
            <div class="row-1">
                <router-link :to="{ name: 'FigmaFind', params: { resource_slug: this.slug }}"><h4 class="bold">{{ resourceTitle }}</h4></router-link>                
                
                <button class="price"><h6 class="bold">{{ resourcePrice }}</h6></button>
            </div>
            <div class="row-2">
                <a :href=creatorProfile target="_blank" >
                    <img  :src="creatorImage">
                </a>

                <a :href=creatorProfile target="_blank" >
                    <p>By <strong>{{ creatorsName }}</strong></p>
                </a>

            </div>
            <div class="row-3">
                <a :href="downloadLink" class="btn main" target="_blank" >
                    <p class="light semibold" for="info" >Download Resource</p>
                </a>
                <router-link class="btn icon" :to="{ name: 'FigmaFind', params: { resource_slug: this.slug }}"><p class="material-icons light md-18">info</p></router-link>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'FeatureCard',
    props: [
    'resourceTitle', 'featuredImage', 'resourcePrice', 'creatorsName', 'creatorImage', 'downloadLink', 'resourceOriginalLink', 'resourceCategory', 'creatorProfile', 'reviewed', 'resourceSlug'
    ],

    data () {
        return {
            desktop: false,
            mobile: false,
            icons: false,
            other: false,
            slug: this.resourceSlug
        }
    },

    created () {
        
    },

    methods: {
        

        // updateCategory() {
        //     if ({resourceCategory} == "Mobile") {
        //         this.mobile = true
        //     }
        // }
    },

    computed: {
        compClasses: function() {
            return {
                desktop: this.desktop,
                mobile: this.mobile,
                icons: this.icons,
                other: this.other
            }
        }
    }
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
    position: relative;
    width: 100%;
}

.feature-image-container .category-tag {
    position: absolute;
    background-color: $blue;
    padding: 5px 10px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 4px;
}

.feature-image {
    object-fit: cover;
    height: 262px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    @media only screen and (max-width : $large-mobile) {
        height: 200px;
    }
}

.card-content {
    padding: 20px;
}

.row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 48px;
    align-items: flex-start;

    @media only screen and (max-width : $large-mobile) {
        margin-bottom: 12px;
    }
}

.row-1 .price {
    background-color: $white;
    border: 2px solid $black;
    color: $black;
    margin-top: 4px;
    padding: 0px 10px;
    border-radius: 4px;
    height: 24px;

}

.row-1 a {
    text-decoration: none;
}

.row-2 {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    @media only screen and (max-width : $large-mobile) {
        margin-bottom: 20px;
    }
}

.row-2 img {
    height: 24px;
    width: 24px;
    border-radius: 100%;
    object-fit: cover;
}

.row-2 p {
    margin-left: 10px;
    margin-bottom: 5px;
}

.row-2 a {
    text-decoration: none;
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

//conditional class for category
.feature-card .desktop {
    background-color: $blue;
}

.feature-card .mobile {
    background-color: $purple;
}

.feature-card .icons {
    background-color: $green;
}

.feature-card .other {
    background-color: $light-red;
}


</style>
