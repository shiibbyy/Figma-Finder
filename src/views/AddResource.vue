<template>
    <div class="section">
        <SubmitResource />
        <!-- <div class="container">
            <h2>Add New Resource</h2>
            <form @submit.prevent="AddResource">
                <div class="field">
                    <label for="title">Featured Image</label>
                    <input type="url" name="featuredImage" placeholder="Enter Featured Image URL" v-model="featuredImage">
                </div>

                <div class="field">
                    <label for="title">Resource Title</label>
                    <input type="text" name="title" placeholder="Enter Resource Title" v-model="title">
                </div>

                <div class="field">
                    <label for="title">Creators Name</label>
                    <input type="text" name="authorName" placeholder="Enter Creators Name " v-model="authorName">
                </div>

                <div class="field">
                    <label for="title">Creators Image</label>
                    <input type="url" name="authorImage" placeholder="Enter Creators Profile Image URL" v-model="authorImage">
                </div>

                <div class="field">
                    <label for="title">Creator Link</label>
                    <input type="url" name="authorLink" placeholder="Enter Creators Social URL" v-model="authorLink">
                </div>

                <div class="field">
                    <label for="title">Price</label>
                    <input type="text" name="price" placeholder="Enter Resource price" v-model="price">
                </div>

                <div class="field">
                    <label for="title">Date</label>
                    <input type="datetime-local" name="date" placeholder="Enter Date" v-model="date">
                </div>

                <div class="field">
                    <label for="title">Original URL</label>
                    <input type="url" name="originalURL" placeholder="Where can people find information about this resource" v-model="originalURL">
                </div>

                <div class="field">
                    <label for="title">Category</label>
                    <input type="text" name="category" placeholder="What category is this?" v-model="category">
                </div>

                <div class="field">
                    <label for="title">Download Link</label>
                    <input type="url" name="resourceLink" placeholder="Where can people download this resource" v-model="resourceLink">
                </div>

                <div class="field">
                    <button class="btn">Add Resource</button>
                </div>
            </form>
        </div> -->
    </div>
</template>

<script>
import SubmitResource from '@/components/forms/SubmitResource.vue'

export default {
  name: 'AddResource',
  components: {
    SubmitResource
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

// .field {
//     display: flex;
//     flex-direction: column;
// }

form input {
    background-color: $white;
    border: 1px solid $black;
    color: $black;
    padding: 0px 10px;
    border-radius: 4px;
    height: 24px;
    margin-bottom: 20px;
}

.field input::placeholder {
    color: $black;
}

</style>
