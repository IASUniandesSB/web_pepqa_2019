<script>

const socialLinksJSON = require('@/config/Contact_Info/SOCIAL_LINKS.json');
const deadlinesJSON = require('@/config/Deadlines_Info/DEADLINES.json');

const locationJSON = require('@/config/Event_Info/LOCATION.json');
const patronsJSON = require('@/config/Event_Info/PATRONS.json');
const sponsorsJSON = require('@/config/Event_Info/SPONSORS.json');
const technicalJSON = require('@/config/Event_Info/TECHNICAL.json');

export default {
  name: 'vFooter',
  methods:{
    getImageURL(imgFolder,imgFile){
      return '/img/logos/'+imgFolder+'/'+imgFile;
    }
  },
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

          <div class="layout-columns">

             <div class="column-contact-info">


<ul style="list-style-type: none;  padding-left: 0px;width: 270px;
    margin: 0 auto;">
    <br>
    <li><i class="fa fa-envelope-o" aria-hidden="true"></i> <strong>Email</strong> : <a>pepqa@uniandes.edu.co</a></li>
    <br>
    <li><i class="fa fa-facebook-square" aria-hidden="true"></i> <strong>Facebook</strong>: <a href="https://www.facebook.com/pepqa/?fref=ts">/Pepqa</a></li>
    <br>
    <li><i class="fa fa-twitter-square" aria-hidden="true"></i><strong>Twitter</strong>: <a href="https://twitter.com/PEPQA_co">PEPQA_Co</a></li>
    <br>
    <li><i class="fa fa-linkedin-square" aria-hidden="true"></i> <strong>LinkedIn:</strong> <a>Pepqa2019</a></li>

    </ul>
    <hr>
    <h4>Venue</h4>
        <div style="padding-right: 5px;padding-left: 5px;">
        Universidad Nacional de Colombia Sede Manizales <br>
        Uniandes IAS Student Branch, <br>
        Cra 1 Nº 18A- 12 Manizales, (Colombia)<br>
        </div>


             </div>

             <div class="column-partners-sponsors-etc">
                <div class="row layout-columns-extended">

                  <div class="footer-patrons layout-row">
                    <h2>Patrons</h2>
                    <div class="layout-columns">
                      <div class="footer-patrons-patron" v-for="item in PATRONS">
                        <a :href="item.link" target="_blank" class="logo">
                          <img :src="getImageURL('patrons',item.image)" :class="item.name" >
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="footer-sponsors layout-row">
                    <h2>Sponsors - Organizer</h2>
                    <div class="layout-columns">
                      <div class="footer-sponsors-item" v-for="item in SPONSORS">
                        <a :href="item.link" target="_blank"  class="logo">
                          <img :src="getImageURL('sponsors',item.image)">
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row layout-row footer-technical-cosponsors">
                    <h2>Technical Co-Sponsors</h2>
                    <div class="layout-columns">
                      <div class="footer-technical-cosponsors-item" v-for="item in TECHNICAL">
                        <a :href="item.link" target="_blank" class="logo">
                        <img :src="getImageURL('technical-co-sponsors',item.image)" >
                        </a>
                      </div>
                    </div>
                </div>
             </div>

          </div>

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
  .row{
    margin-right: 0px;
    margin-left: 0px;
  }
  .logo{
    font-size: 0px;
    img{
      height: 5vw;
      max-height: 100px;
      min-height: 50px;

      &.UnalManizales{
        box-sizing: border-box;
        padding: 10px;
      }
    }
  }
  .footer-patrons,.footer-sponsors,.footer-technical-cosponsors{
    h2{
      text-align: left;
    }
  }
  .footer-patrons-patron{
    &:last-child{
    }
  }


.row{width: 100%;}
.column-contact-info{
    width: 25vw;
    min-width: 15em;
    max-width: 30em;
  }
.column-partners-sponsors-etc{

      border-left: 1px solid rgba(52, 58, 64, 0.14);
    padding-left: 12px;


 -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
}


</style>


