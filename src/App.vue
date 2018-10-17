<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <div class="section footer">
      <div class="container">
        <div class="content">
          <img src="@/assets/FigmaFinder-Logo.png" alt="Figma Finder">
          <p class="light">Whatever we find, directly to your inbox!</p>
          <div class="form-row">
            <mailchimp /> 
          </div>
          <h6 class="light">
            Designed by Kieran Parker & Built by Joshua Parker
          </h6>
          <h6 class="light">
            © 2018, FigmaFinder </br>
            FigmaFinder has no association with the Figma app
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mailchimp from '@/components/forms/Mailchimp.vue'

export default {
    components: {
        Mailchimp,
    }
}
</script>




<style lang="scss">
@import '@/styles/global.scss';

.footer {
  background-color: $off-black;
}

.footer .content {
  padding-top: 80px;
  padding-bottom: 100px;
}

.footer img {
  height: 35px;
  margin-bottom: 40px;
}

.footer input {
  width: 250px;
}

.footer .form-row {
  padding-top: 10px;
  padding-bottom: 30px;
}

.footer h6 {
  opacity: 0.5;
  margin-bottom: 10px;
}

.footer .email-input {
    height: 30px;
    width: 300px;
    border-radius: 4px;
    border: none;
}

.footer .email-button {
    height: 30px;
    border-radius: 4px;
    background-color: $purple;
    border: none;
    color: $white;
    padding: 0px 14px;
    cursor: pointer;
    margin-left: 10px;
}

.footer .form-row p {
  font-size: 12px;
}

</style>
