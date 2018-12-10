<template>
    <div class="section featured div-main snow-bg">
        <div class="card">
            <h3 class="semibold light line-one">Holiday Sale!</h3>
            <h4 class="light line-two">Figma UI Kit Sale Now On over at...</h4>
            <h2 class="light ui8">UI 8</h2>
            <h4 class="light line-three">Up To 50% Off</h4>
            <a href="https://ui8.net/?rel=figma" class="resource-button" target="_blank" >
                <h5 class="light semibold" for="info" >Shop Now</h5>
            </a>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'Featured',

    data() {
        return {

        }
    },

    
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

.featured {

    @media only screen and (max-width: $small-desktop) {
        padding-top: 20px;
    }

    @media only screen and (max-width: $large-mobile) {
        padding-top: 20px;
    }
}

.featured .container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.featured .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card .line-one {
    padding-top: 70px;
    margin-bottom: 4px;
}

.card .line-two {
    margin-bottom: 20px;
}

.card .line-three {
    margin-top: 8px;
}

.card .ui8 {
    color: $green;
}

.card .resource-button {
    display: flex;
    align-items: center;
    height: 28px;
    background-color: $purple;
    padding: 0px 46px;
    border-radius: 4px;
    margin-top: 30px;
    margin-bottom: 70px
}

.card a {
    text-decoration: none;
}

// snow bg
.div-main {
    width: 100%;
    background: $off-black;
    display: grid;
    margin: 0;
    margin-top: 4px;
    padding: 0;
}

.snow-bg {
    position: relative;
}
.snow-bg:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background-image: 
    url('http://i.piccy.info/i9/e6d78e8b783758995b729b1637002876/1513932320/2765/1207018/s1.png'),
    url('http://i.piccy.info/i9/0422ed89cdacbb54e227c0684871d3f7/1513932376/4867/1207018/s2.png'),
    url('http://i.piccy.info/i9/e734ae78fe5661be311860bfd8da45da/1513932388/3117/1207018/s3.png');
    animation: snow 10s linear infinite;
}
@keyframes snow {
        0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
        50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
        100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}

//snow bg end

</style>
