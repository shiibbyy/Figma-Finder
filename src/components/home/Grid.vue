<template>
    <div class="section grid">
        <div class="container">
            <!-- <h1>This Is The Grid</h1> -->
            <FeatureCard />
        </div>
    </div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'

export default {
    name: 'Grid',
    components: {
    FeatureCard
    },
    data() {
            return {
                resources: [
                    { title: 'this is my new title', price: 'FREE' }
                ]
            }
        },
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.grid .container {
    display: flex;
    justify-content: center;
}

.grid {
    background-color: $grey;
}

</style>
