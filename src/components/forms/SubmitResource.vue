<template>
    <div class="section background">
        <div class="form-card">
            <div class="header-image">
                <h2 class="light">Submit New Resource</h2>
            </div>
            <form @submit.prevent="SubmitResource">
                <div class="form-content">
                    <div class="row">
                        <div class="form-field">
                            <label for="title">Resource Title</label>
                            <input class="form-input" type="text" name="resourceTitle" placeholder="Enter Resource Title" v-model="resourceTitle">
                        </div>
                        <div class="form-field">
                            <label for="title">Featured Image</label>
                            <input class="form-input" type="url" name="featuredImage" placeholder="Enter Featured Image URL" v-model="featuredImage">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-field">
                            <label for="title">Creators Name</label>
                            <input class="form-input" type="text" name="creatorsName" placeholder="Enter Name of Creator" v-model="creatorsName">
                        </div>
                        <div class="form-field">
                            <label for="title">Creators Social Profile</label>
                            <input class="form-input" type="url" name="creatorProfile" placeholder="Enter Creators Social Profile" v-model="creatorProfile">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-field">
                            <label for="title">Creators Image</label>
                            <input class="form-input" type="url" name="creatorImage" placeholder="Enter Creators Image URL" v-model="creatorImage">
                        </div>
                        <div class="form-field">
                            <label for="title">Resource Original Location</label>
                            <input class="form-input" type="url" name="resourceOriginalLink" placeholder="Enter Resource Original Link" v-model="resourceOriginalLink">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-field">
                            <label for="title">Resource Category</label>
                            <input class="form-input" type="text" name="resourceCategory" placeholder="What Category Is This Resource?" v-model="resourceCategory">
                        </div>
                        <div class="form-field">
                            <label for="title">Resource Price ($)</label>
                            <input class="form-input" type="number" min="0" max="1000" step="0.01" name="resourcePrice" placeholder="0" v-model="resourcePrice">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-field">
                            <label for="title">Figma Download Link</label>
                            <input class="form-input" type="url" name="downloadLink" placeholder="URL To download Resource" v-model="downloadLink">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-field">
                            <label for="title">Figma Download Link</label>
                            <textarea class="form-input" name="resourceDescription" cols="30" rows="10" placeholder="Tell everyone a little bit about your resource and how it is going to help their workflow!" v-model="resourceDescription"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-field">
                            <div class="field">
                            <button class="btn">Submit Resource</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            
            
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'SubmitResource',

    data() {
        return {
            resourceTitle: null,
            featuredImage: null,
            creatorsName: null,
            creatorProfile: null,
            creatorImage: null,
            resourceOriginalLink: null,
            resourceCategory: null,
            resourcePrice: null,
            downloadLink: null,
            resourceDescription: null,
            date: null,
            slug: null,
        }
    },

    methods: {
        SubmitResource(){
            if (this.resourceTitle){
                this.feedback = null
                //create slug
                this.slug = slugify(this.resourceTitle, {
                    replacement: '-',
                    remove: /[$*_+-:@"'`~±§?()]/g,
                    lower: true
                })

                if (this.resourcePrice == 0) {
                this.resourcePrice = "FREE"
                }
                

                db.collection('resources').add({

                    resourceTitle: this.resourceTitle,
                    featuredImage: this.featuredImage,
                    creatorsName: this.creatorsName,
                    creatorProfile: this.creatorProfile,
                    creatorImage: this.creatorImage,
                    resourceOriginalLink: this.resourceOriginalLink,
                    resourceCategory: this.resourceCategory,
                    resourcePrice: this.resourcePrice,
                    downloadLink: this.downloadLink,
                    resourceDescription: this.resourceDescription,
                    date: this.date,
                    slug: this.slug

                }).then(() => {
                    this.$router.push({ name: 'home'})
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = "You must enter a resource title"
            }

            


        }
    }
}

</script>

<style lang="scss">
@import '@/styles/global.scss';

.background {
    background-color: $grey;
}

.form-card {
    margin-top: 8%;
    margin-bottom: 10%;
    background-color: $white;
    width: 600px;    
}

.header-image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $off-black;
    height: 200px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.form-content {
    margin-top: 18px;
    padding: 10px;
}

.form-field {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
}


.form-field input, textarea {
    border: solid;
    border-width: 1px;
    border-color: $grey;
    flex: 1;
    width: 234px;
}

.form-field .btn {
    margin-top: 15px;
    margin-bottom: 5px;
}

.form-field .field {
    display: flex;
    justify-content: flex-end;
}

.field .btn {
    cursor: pointer;
}

.row {
    display: flex;
    width: inherit;
    justify-content: space-between;
    margin-bottom: 5px;
}

.row input {
    padding: 5px 15px;
}

.row textarea {
    padding: 15px 15px;
    line-height: 17px;
    width: 530px;
    border-radius: 4px;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 12px;
}

input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

</style>
