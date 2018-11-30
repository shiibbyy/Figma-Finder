<template>
  <div id="app">
    <div class="navbar-container">

      <div class="navbar">
        <div class="container">
          <div class="logo-container">
            <img src="@/assets/FigmaFinder-Logo.png" alt="Figma Finder">
          </div>

          <div class="nav-menu-container">

            <!-- <ul>
              <li class="nav-menu-item">
                <router-link to="/">
                  Home
                </router-link>
              </li>
              <li class="nav-menu-item">
                <router-link to="/about">
                  About
                </router-link>
              </li>
            </ul> -->

            <!-- <button class="btn">Submit Resource</button> -->
            
          </div>
        </div>
      </div>
      <div class="mobile-navbar">
        <div class="container">
          <div class="logo-container">
            <img src="@/assets/FigmaFinder-Logo.png" alt="Figma Finder">
          </div>

          <!-- <div class="nav-menu-container">
            <ul>
              <li class="nav-menu-item">
                <router-link to="/">
                  Home
                </router-link>
              </li>
              <li class="nav-menu-item">
                <router-link to="/about">
                  About
                </router-link>
              </li>
            </ul>
            
          </div> -->
        </div>
      </div>

    </div>

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
            Designed & Built by <a class="light" href='https://twitter.com/_kprkr'>Kieran Parker</a>
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
    Mailchimp
  },

  data() {
    return {
      isHovering: false
    }
  },


}

</script>

<style lang="scss">
@import '@/styles/global.scss';

.navbar, .mobile-navbar {
  background-color: $off-black, 0.0;
  position: absolute;
  z-index: 5;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  overflow: hidden;
  flex-direction: row;
}

.mobile-navbar {
  display: none;
}

@media only screen and (max-width : $large-mobile) {
  .navbar {
    display: none;
  }

  .mobile-navbar{
    display: flex;
  }

  // .mobile-navbar {
  //   flex-direction: column;
  // }

  .mob li {
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    cursor: pointer;
  }
}



.navbar a {
  font-weight: 400;
  color: $white;
  &.router-link-exact-active {
  color: $blue;
  font-weight: 600;
  }
}

.mobile-navbar a {
  font-weight: 400;
  color: $white;
  &.router-link-exact-active {
  color: $blue;
  font-weight: 600;
  }
}

a:hover {
  color: $purple;
}

button {
  margin-left: 20px;
}


.navbar .container, .mobile-navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 15px;
  padding: 16px 0px;
}

.navbar .logo-container, .mobile-navbar .logo-container {
  height: 40px;
}

.navbar .nav-menu-container, .mobile-navbar .nav-menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}

.nav-menu-container ul {
  list-style-type: none;
  display: flex;

}

.nav-menu-container li {
  padding: 0px 20px;
  font-weight: 400;
  
}

.nav-menu-container a {
  text-decoration: none;
  // color: $white;
}

.logo-container img {
  height: 100%;
}

.footer {
  background-color: $off-black;
}

.footer .container {
    margin: 0px 15px;
}

.footer .content {
  padding-top: 80px;
  padding-bottom: 100px;

    @media only screen and (max-width : $small-desktop) {
      padding-top: 40px;
      padding-bottom: 60px;
    }
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

    @media only screen and (max-width : $small-desktop) {
        height: 30px;
        width: 200px;
    }
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
