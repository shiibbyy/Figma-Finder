<template>
    <div class="button-container">
        <div v-if="totalPages() > 1" class="pagination-wrapper">
            <!-- <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"><</span> -->

            <!-- <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)">></span> -->


            <div class="page-buttons-wrapper">
                <button v-if="currentPage > 0" class="page-button" v-on:click="updatePage(currentPage - 1)"><p class="light semibold"><</p></button>

                <button class="page-button" v-for="(page, index) in totalPages()" :key="index" v-on:click="updatePage(index)">
                    <p class="light semibold">{{ index + 1}}</p>
                </button>

                <button v-if="currentPage < totalPages() - 1 " class="page-button" v-on:click="updatePage(currentPage + 1)"><p class="light semibold">></p></button>
            </div>
            <div class="page-count">
                <h6 class="dark-grey">Page {{ currentPage + 1}} of {{ totalPages() }}</h6>
            </div>

        </div>
    </div>
    


</template>

<script>
import paginate from 'vuejs-paginate'


export default {
    name: "pagination",
    props: ['resources', 'currentPage', 'pageSize'],
    components: {

    },
    data() {
        return {
            
        }
    },
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber);
        },
        totalPages() {
            return Math.ceil(this.resources.length / this.pageSize);
        },
        showPreviousLink() {
            return this.currentPage == 1 ? false : true;
        },
        showNextLink() {
            return this.currentPage == (this.totalPages() - 1) ? false : true;
        },
    }
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.button-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.page-buttons-wrapper {
    display: flex;
    width: 100%;
    margin-top: 18px;
}

.page-button {
    border-radius: 4px;
    background-color: $purple;
    border: none;
    color: $white;
    height: 32px;
    width: 32px;
    margin: 0px 5px;
    cursor: pointer;
}

.page-count {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 8px;
}

</style>
