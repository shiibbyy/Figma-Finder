<template>
    <div class="section hero">
        <div class="container">
            <div class="content">
                <h1 class="light">Figma Finder</h1>
                <h3 class="light">All the Figma Resources you need. </br>
                Right here, right now, found by us.</h3>
                <div class="form-row">
                    <input type="text" placeholder="Enter Email">
                    <button class="btn"><p class="semibold light">Sign Up!</p></button>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.hero {
    height: 70vh;
    background-color: $off-black;
}

h1 {
    padding-bottom: 20px;
}

.form-row {
    display: flex;
    padding-top: 80px;
}

.btn {
    margin-left: 10px;
}

.hero .content {
    margin-top: -30px;
}

</style>
