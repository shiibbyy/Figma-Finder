<template>
    <div class="feature-card">

        <div class="label category">
            <h6>{{ resourceCategory }}</h6>
        </div>

        <div class="feature-image-container">
            <router-link :to="{ name: 'FigmaFind', params: { resource_slug: this.slug }}"><img class="feature-image" :src="featuredImage" alt="feature image"></router-link>
        </div>

        <div class="card-content">
            <div class="row-1">
                <router-link :to="{ name: 'FigmaFind', params: { resource_slug: this.slug }}"><h4 class="bold">{{ resourceTitle }}</h4></router-link> 

                <div class="label price">
                    <h6>{{ resourcePrice }}</h6>
                </div>
            </div>

            <div class="row-2">
                <a :href=creatorProfile target="_blank" >
                    <img  :src="creatorImage">
                </a>

                <a :href=creatorProfile target="_blank" >
                    <p>By <strong>{{ creatorsName }}</strong></p>
                </a>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'FeatureCard',
    props: [
    'resourceTitle', 'featuredImage', 'resourcePrice', 'creatorsName', 'creatorImage', 'downloadLink', 'resourceOriginalLink', 'resourceCategory', 'creatorProfile', 'reviewed', 'resourceSlug', 'resourceDescription',
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
    margin: 8%;
    background-color: $white;
    border-radius: 4px;

    @media only screen and (max-width : $large-mobile) {
        margin: 20px;
    }
}

.feature-image-container {
    position: relative;
    width: 100%;
}

.feature-image {
    object-fit: cover;
    height: 220px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    @media only screen and (max-width : $large-mobile) {
        height: 200px;
    }
}

.card-content {
    padding: 10px 18px;
}

.card-content .row-1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    height: 40px;
}

.label {
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    display: flex;
    justify-content: center;    
}

.label.category {
    border-color: $light-red;
}

.feature-card {
    position: relative;
}

.feature-card .label.category {
    position: absolute;
    z-index: 1;
    left: 0;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: $light-red
}

.category h6 {
    color: $white;
    padding: 4px 10px;
}

.label.price {
    margin-top: 3px;
    margin-left: 10px;
    background-color: $off-black;
}

.price h6 {
    font-size: 10px;
    color: $white;
    padding: 4px 12px;
    font-weight: 600;
}

.card-content .row-1 a {
    text-decoration: none;
}

.row-2 {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}

.row-2 img {
    height: 24px;
    width: 24px;
    margin-top: 4px;
    border-radius: 100%;
    margin-right: 10px;
}

.row-2 a {
    text-decoration: none;
    font-size: 12px;
    line-height: 18px;
}

.row-2 p {
    font-size: 12px;
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
