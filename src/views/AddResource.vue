<template>
    <div class="section">
        <SubmitResource />
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
