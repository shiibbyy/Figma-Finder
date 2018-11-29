<template>
  <div id="app">
    <div class="navbar-container">

      <div class="navbar">
        <div class="container">
          <div class="logo-container">
            <img src="@/assets/FigmaFinder-Logo.png" alt="Figma Finder">
          </div>

          <div class="nav-menu-container">
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
            
          </div>
        </div>
      </div>

      <div class="mobile-navbar">
        <div class="container">
          <div class="logo-container">
            <img src="@/assets/FigmaFinder-Logo.png" alt="Figma Finder">
          </div>

          <div class="nav-menu-container">
            <div class="hamburger-btn">
              
            </div>
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
            
          </div>
        </div>
      </div>

    </div>
    

    <!-- <div class="nav-container">
      <nav class="desktop-nav">
        <ul>
          <ul>
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-menu-item">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </ul>
      </nav>

      <nav class="mobile-nav">
        <ul>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-menu-item">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </ul>
      </nav>

      <div class="header"></div>

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

// .nav-container nav.desktop-nav,
// .nav-container nav.mobile-nav {
//   width: 100%;
//   background: $blue;
//   height: 60px;
//   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14);
//   position: fixed;
//   top: 0;
//   left: 0;
// }

// nav.desktop-nav ul {
//   list-style: none;
//   width: 75%;
//   height: 60px;
//   margin: 0 auto;
// }

// nav.desktop-nav ul li {
//   width: 20%;
//   float: left;
//   text-align: center;
//   line-height: 60px;
//   text-transform: uppercase;
//   cursor: pointer;
//   transition: all 0.5s ease;
// }

// nav.desktop-nav ul li:hover {
//   background: #a3ada5;
// }

// nav.desktop-nav ul li.active {
//   background: #a3ada5;
// }

// nav ul li a {
//   color: #ffffff;
//   text-decoration: none;
// }

// nav.desktop-nav a {
//   font-weight: 400;
//   color: $white;
//   &.router-link-exact-active {
//   color: $blue;
//   font-weight: 600;
//   }
// }

// @media only screen and (max-width : $large-mobile) {
//   nav.desktop-nav {
//     display: none;
//   }
//   }

//temp above this line

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
}

.mobile-navbar {
  display: none;
}

@media only screen and (max-width : $large-mobile) {
  .navbar {
    display: none;
  }

  .mobile-navbar {
    display: flex;
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
