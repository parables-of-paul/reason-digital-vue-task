<template>
  <SearchNav />
  <div id="nav">
    <a href="/"><img src="../assets/good-things-logo.png" class="nav__logo" alt="Good Things Foundation Logo" /></a>
    <div class="nav__menu-items--desktop">
      <router-link class="nav__menu-items" v-for="item in allMenuItems" :key="item.url" :to="item.url">{{item.text}}</router-link>
    </div>
    <div class="nav-menu__items--mobile">
    <div class="hamburger__icon" @click="menuToggle()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="hamburger__menu">
      <router-link class="nav__menu-items" v-for="item in allMenuItems" :key="item.url" :to="item.url">{{item.text}}</router-link>
    </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import SearchNav from './SearchNav.vue';
export default {
    name: "Nav",
    components: {
      SearchNav
    },
    computed: mapGetters(['allMenuItems']),
    methods: {
      menuToggle() {
        const hamburgerMenu = document.querySelector('.hamburger__menu');
        const hamburgerIcon = document.querySelector('.hamburger__icon');
        hamburgerMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
      }
    }
}
</script>

<style lang="scss" scoped>
  #nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 8%;
    width: 100%;
    max-width: 100vw;
    position: relative;
  .nav__logo {
    @media screen and (min-width: 769px){
      max-width: 150px;
    }
    @media screen and (max-width: 768px){
      max-width: 100px;
    }
  }
  .nav__menu-items--desktop {
    @media screen and (min-width: 769px){
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      justify-self: flex-end;
      flex: 0 1 70%;
    }
    @media screen and (max-width: 768px){
      display: none;
    }
  }
  .nav__menu-items {
    font-weight: 900;
  }
  .nav-menu__items--mobile {
    @media screen and (min-width: 769px){
      display: none;
    }
    @media screen and (max-width: 768px){
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .hamburger__menu {
    @media screen and (max-width: 769px){
      display: flex;
      flex-flow: column nowrap;
      gap: 15px 0px;
      position: absolute;
      top: 0px;
      left: -100vw;
      background-color: #e5e5e5;
      height: 100vh;
      width: 100vw;
      transition: left 0.5s ease-in-out;
      padding: 30px;
    }
    &.open {
      left: 0px;
    }
  }
  .hamburger__icon {
    @media screen and (max-width: 768px){
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      height: 45px;
      width: 45px;
      padding: 15px 10px;
      &.open {
        z-index: 450;
        span:nth-of-type(1) {
          transform: rotate(45deg);
          top: 6px;
        }
        span:nth-of-type(2){
          opacity: 0;
        }
        span:nth-of-type(3) {
          transform: rotate(-45deg);
          top: -7px;
        }
      }
      span {
        border-bottom: 2px solid #000;
        width: 25px;
        position: relative;
        transition: transform 0.5s ease-in-out, opacity 0.2s ease-in-out, top 0.5s ease-in-out;
      }
    }
  }
  }
</style>