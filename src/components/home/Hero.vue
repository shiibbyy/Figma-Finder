<template>
    <div class="section hero">
        <div class="container">

            <div class="content">
                <h1 class="light">Figma Finder</h1>
                <h3 class="light">All the Figma Resources you need. <br>
                                    UI Kits, Mockups, Templates, Icons & Much More!</h3>
                <!-- <div class="form-row">
                    <mailchimp />
                </div> -->
            </div>

        </div>
        <ul class="shapes">
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
            <li class="shape"></li>
        </ul>
    </div>
</template>

<script>
import Mailchimp from '@/components/forms/Mailchimp.vue'

export default {
    name: 'Hero',
    components: {
        Mailchimp
    }
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.hero {
    height: 70vh;
    padding-top: -40px;
    min-height: 600px;
    background-color: $off-black;
    position: relative;

    @media only screen and (max-width : $small-desktop) {
        height: 100vh;
    }
}

h1 {
    padding-bottom: 26px;

        @media only screen and (max-width : $small-desktop) {
        padding-bottom: 26px;
    }

    @media only screen and (max-width : $large-mobile) {
        padding-bottom: 30px;
    }
}

.hero .container {
    margin: 0px 15px;
    text-align: center;
}

.form-row {
    display: flex;
    justify-content: center;
    padding-top: 80px;
}

.hero .btn {
    margin-left: 10px;
}

.hero .container {
    z-index: 5;
    display: flex;
    justify-content: center;
}

.hero .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}

.shapes {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: inherit;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.shape {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    position: absolute;
    background-color: $purple;
    list-style: none;
    //animation
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, -0px); }
}

.shape:nth-child(1) {
    top: 25px;
    left: -20px;
    background-color: $light-red;
    animation-delay: 2s;
}

.shape:nth-child(2) {
    bottom: 150px;
    left: 40px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    animation-delay: 1s;
}

.shape:nth-child(3) {
    height: 50px;
    width: 50px;
    border-bottom-right-radius: 0;
    background-color: $green;
    top: 120px;
    left: 250px;
    animation-delay: 0.5s;
}

.shape:nth-child(4) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: $light-red;
    top: 140px;
    right: 200px;
    animation-delay: 3s;
}

.shape:nth-child(5) {
    background-color: $green;
    top: -30px;
    right: 0px;
    animation-delay: 1s;
}

.shape:nth-child(6) {
    height: 50px;
    width: 50px;
    border-top-left-radius: 0;
    background-color: $blue;
    bottom: 100px;
    right: 130px;
    animation-duration: 8s;
    animation-delay: 1.5s;
}

.shape:nth-child(7) {
    background-color: $red;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    bottom: 0;
    right: -25px;
    animation-delay: .5s;
}

.shape:nth-child(8) {
    background-color: $blue;
    margin-right: 400px;
    margin-top: 520px;
    animation-duration: 7s;
    animation-delay: 2s;
}

.shape:nth-child(9) {
    height: 50px;
    width: 50px;
    background-color: $purple;
    border-top-right-radius: 0;
    margin-right: 320px;
    margin-top: 440px;
}

</style>
