<script>
/**
 *
 *
 *
 */

const ieeeLinksJSON = require('@/config/IEEE_LINKS.json');
const socialLinksJSON = require('@/config/Contact_Info/SOCIAL_LINKS.json');
const locationJSON = require('@/config/Event_Info/LOCATION.json');
const deadlinesJSON = require('@/config/Deadlines_Info/DEADLINES.json');

export default {
  name: 'vHeader',
  created() {

  },
  data(){
    return{

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
        <div class="header-title">IEEE Workshop on Power Electronics and Power Quality Applications</div>
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

      <div class="row">
        <div class="header-deadline">
          {{ DEADLINES.conference.from.day }} {{ DEADLINES.conference.from.month }} to
          {{ DEADLINES.conference.to.day }} {{ DEADLINES.conference.to.month }},
          {{ DEADLINES.conference.to.year }} //
          {{ LOCATION.city }} , {{ LOCATION.country }}
        </div>
      </div>

    </nav>

    <div class="header-mobile">

    </div>

  </header>
</template>



<style scoped lang="less">
@import (reference) '../../../styles/main.less';
header{
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0em;
  margin: 0px;
}
.header-links{
  display: block;
  width: 100%;
  background-color: rgba(0,0,0,0);
  box-sizing: border-box;
  padding: 0em 0em;
  .layout-rows-between();
}
.header-navbar{
    display: block;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 1em 1.25em;
    border-radius: 0.25em;
  .layout-rows-between();
}


.IEEE-Links{
  li{
    border-right: thick solid #fbfbfb;
    border-right-width: 1px;
    cursor: pointer;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 12px;

    &:hover{
        opacity: 0.6;
    }

    a{
      display: block;
      color: #fbfbfb;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      font-size: 12px;
      text-align: center;
      text-decoration: none;
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 0px;
      padding-bottom: 0px;
    }

    &:first-child{
      a{
        padding-left: 0px;
      }
    }
    &:last-child{
      border-right-width: 0px;
    }

  }
}

.SOCIAL-Links{
  font-size: 30px;
  padding: 15px;
  li{
    a{
      display: inline-block;
      vertical-align: middle;

      height: 1em;
      width: 1em;

      margin: 0em 0.33em;
      border-radius: 0.15em;

      &:hover{
        opacity: 0.6;
      }
      &.Facebook{
        background-color: #3b5998;
        i{ font-size: 12px; position: relative; left: 1px; top:-1px}
      }
      &.Twitter{
        background-color: #00aced;
        i{ font-size: 10px;}
      }
      &.LinkedIn{
        background-color: #0077B5;
        i{ font-size: 10px;}
      }
      &.Email{
        background-color: @color-green-normal;
        i{ font-size: 12px;}
      }
      i{
        color: white;
      }
    }
  }
}


.row{
  padding-left: 0px;
  padding-right: 0px;
  .layout-rows-left();
}

.header-logo{
  img{
    max-width: 150pt;
    width: 100%;
  }
}

.header-title,.header-deadline{
  font-weight: 700;
  text-align: left;
  color: black;
  font-size: 0.9em;

}
.header-title{
padding: 0em 1em;
}
.header-deadline{
 padding: 0em 0.25em;
}
.header-title{
    max-width: 22em;
}

.header-menu{

   -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;

   .layout-rows-right();

  a,.title{
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    &:hover{
      opacity: 0.5;;
    }
  }

}

.header-menu-item{
  cursor: pointer;
  &.author,&.location{
     a,.title{
      color: black;
      margin: 0 auto;
      border-right-width: 0px;
     }
  }
}




</style>



