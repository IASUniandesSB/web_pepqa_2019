<script>


/**
 * ---------------------------------------------------------
 * ---                                                    --
 * --- Component::Header /                                --
 * ---                                                    --
 * ---                                                    --
 * ---------------------------------------------------------
 */

import BurgerButton from 'vue-burger-button';

// ------------------------------------------------------- //
// -- Config & Settings ---------------------------------- //
// ------------------------------------------------------- //
  const ieeeLinksJSON = require('@/config/IEEE_LINKS.json');
  const socialLinksJSON = require('@/config/Contact_Info/SOCIAL_LINKS.json');
  const locationJSON = require('@/config/Event_Info/LOCATION.json');
  const deadlinesJSON = require('@/config/Deadlines_Info/DEADLINES.json');
// ------------------------------------------------------- //



export default {
  name: 'vHeader',
  components: {
    BurgerButton
  },
  created() {

  },
  data(){
    return{

      isActive: false,

      LINKS: ieeeLinksJSON,
      SOCIAL: socialLinksJSON,

      LOCATION: locationJSON,

      DEADLINES :deadlinesJSON,

      EVENTS: {
        title: 'PAST EVENTS'
      }
    }
  }
}
</script>


<template>
  <header>

    <div class="header-links">

      <ul class="IEEE-Links">
        <li v-for="ieeeLink in LINKS">
          <a :href="ieeeLink.link" target="_blank">{{ieeeLink.name}}</a>
        </li>
      </ul>

      <ul class="SOCIAL-Links">
        <li v-for="socialLink in SOCIAL">
          <a :href="socialLink.link" target="_blank" :class="socialLink.name">
            <i :class="socialLink.class"></i>
          </a>
        </li>
      </ul>

    </div>

    <nav class="header-navbar">

      <div class="row">
        <div class="header-logo">
          <router-link to="/">
            <img src="@/assets/header_logo.png">
          </router-link>
        </div>
        <div class="header-title">

          <div class="row">
            IEEE Workshop on Power Electronics and Power Quality Applications
          </div>

          <div class="row">
            <div class="header-deadline">
              {{ DEADLINES.conference.from.day }} {{ DEADLINES.conference.from.month }} to
              {{ DEADLINES.conference.to.day }} {{ DEADLINES.conference.to.month }},
              {{ DEADLINES.conference.to.year }} //
              {{ LOCATION.city }} , {{ LOCATION.country }}
            </div>
          </div>

        </div>

        <div class="header-menu">

          <div class="header-menu-item">
            <b-button size="sm">
                <router-link to="/about">About</router-link>
            </b-button>
          </div>

          <div class="header-menu-item author">
                <b-dropdown id="ddown1" text="AUTHORS" size="sm">
                  <b-dropdown-item><router-link to="/authors/call4papers">Call For Papers</router-link></b-dropdown-item>
                  <b-dropdown-item><router-link to="/authors/guidelines">Guidelines</router-link></b-dropdown-item>
                </b-dropdown>
          </div>

          <div class="header-menu-item location">
             <b-dropdown id="ddown2" text="LOCATION" size="sm">
                  <b-dropdown-item><router-link to="/location/city"> {{ LOCATION.city }} </router-link></b-dropdown-item>
                  <b-dropdown-item><router-link to="/location/venue"> {{ LOCATION.venue.name.short }} </router-link></b-dropdown-item>
              </b-dropdown>
          </div>

          <div class="header-menu-item">
             <b-button size="sm">
                <router-link to="/deadlines"> DEADLINE </router-link>
            </b-button>
          </div>

          <div class="header-menu-item">
            <b-button size="sm">
                  <router-link to="/pastEvents">{{ EVENTS.title }}</router-link>
            </b-button>
          </div>


        </div>
      </div>


    </nav>

    <nav class="header-navbar-mobile">
      <div class="row space-between" style="z-index:1000">

        <router-link to="/">
          <img class="logo" src="../../../assets/header_logo.png" @click="isActive = false">
        </router-link>

        <burger-button
          :active="isActive"
          :bar-height="5"
          :bar-width="45"
          @click="isActive = !isActive"
        />

      </div>
      <div class="row column-start-center menu-items" v-if="isActive">
        <div class="menu-item" @click="isActive = false">
          <router-link to="/about">ABOUT</router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/authors/call4papers">AUTHORS | CALL FOR PAPERS</router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/authors/guidelines">AUTHORS | GUIDELINES </router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/">KEYNOTES</router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/location/city">CITY | {{ LOCATION.city }} </router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/location/venue">VENUE | {{ LOCATION.venue.name.short }} </router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/deadlines" >DEADLINES </router-link>
        </div>
        <div class="menu-item" @click="isActive = false">
          <router-link to="/pastEvents"> PAST EVENTS </router-link>
        </div>
      </div>
    </nav>

  </header>
</template>


<style src="vue-burger-button/dist/vue-burger-button.css"></style>
<style scoped lang="less">
@import (reference) '../../../styles/main.less';
</style>



