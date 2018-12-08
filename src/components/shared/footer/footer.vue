<script>

const socialLinksJSON = require('@/config/Contact_Info/SOCIAL_LINKS.json');
const deadlinesJSON = require('@/config/Deadlines_Info/DEADLINES.json');

const locationJSON = require('@/config/Event_Info/LOCATION.json');
const patronsJSON = require('@/config/Event_Info/PATRONS.json');
const sponsorsJSON = require('@/config/Event_Info/SPONSORS.json');
const technicalJSON = require('@/config/Event_Info/TECHNICAL.json');

export default {
  name: 'vFooter',
  data(){
    return{
      SOCIAL: socialLinksJSON,
      LOCATION: locationJSON,
      DEADLINES :deadlinesJSON,
      PATRONS: patronsJSON,
      SPONSORS: sponsorsJSON,
      TECHNICAL: technicalJSON,
    }
  }
}
</script>


<template>
  <div class="wrapper">
    <footer>

      <div class="row footer-info">

          <div class="footer-title">
            Contact Us!
          </div>



          <div class="footer-patrons">
            <div class="footer-patrons-patron" v-for="item in PATRONS">
              <a :href="item.link" target="_blank">
                <img src="../../../assets/logos/patrons/patron_uniandes_logo.jpg">
              </a>
            </div>
          </div>

          <br>

          <div class="footer-sponsors">
            <div class="footer-sponsors-item" v-for="item in SPONSORS">
              <a :href="item.link" target="_blank">

                {{item.name}}
               </a>
            </div>
          </div>

           <br>

          <div class="footer-technical-cosponsors">
            <div class="footer-technical-cosponsors-item" v-for="item in TECHNICAL">
              <a :href="item.link" target="_blank">
              {{item.name}}
              </a>
            </div>
          </div>

          <div class="footer-technical-cosponsors"></div>




          <div class="footer-contact-form"></div>
          <div class="footer-social-icons">
            <ul class="SOCIAL-Links">
              <li v-for="socialLink in SOCIAL">
                <a :href="socialLink.link" target="_blank" :class="socialLink.name">
                  <i :class="socialLink.class"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-info"></div>


      </div>

      <div class="row footer-copyright">
        © Copyright {{ new Date() | moment("YYYY") }} Universidad de los Andes – All rights reserved. Design & Development By Jorge Luis Mayorga Taborda
      </div>

    </footer>
  </div>
</template>

<style scoped lang="less">
@import (reference) '../../../styles/main.less';

  footer{
    display: block;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 1em 1.25em;
    margin: 1em 0em;
    border-radius: 0.25em;
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
      border-radius: 100%;

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
</style>


