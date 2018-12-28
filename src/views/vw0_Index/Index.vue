<template>

  <div class="view index">

    <div class="view-content">

     <!-- swiper -->
      <swiper :options="swiperOption">

        <swiper-slide v-for="slide in SLIDES" v-bind:key="slide.image.alt">
          <img :src="slide.image.src" :alt="slide.image.alt">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <br>

      <div class="index-info" style="height:100px;border:1px solid black;color:black">
        <h3>main info</h3>
      </div>
      <div class="index-submission" style="height:100px;border:1px solid black;color:black">
        <h3>paper submission</h3>
      </div>
      <div class="index-topics" style="height:100px;border:1px solid black;color:black">
        <h3>topics</h3>
      </div>
      <div class="index-features" style="height:100px;border:1px solid black;color:black">
        <h3>features and benefits</h3>
      </div>


  </div>

  </div>


</template>

<script>
const locationJSON =  require('@/config/Event_Info/LOCATION.json');

export default {
  name: 'vwIndex',
  created(){

  },
  data(){
    return{
      LOCATION : locationJSON,
      SLIDES: [
        {
          image: {
            src: 'https://via.placeholder.com/300.png/09f/fff',
            alt: ''
          }
        },
        {
          image: {
            src: 'https://via.placeholder.com/300.png/09f/f0b',
            alt: ''
          }
        },
        {
          image: {
            src: 'https://via.placeholder.com/300.png/09f/3ff',
            alt: ''
          }
        },
        {
          image: {
            src: 'https://via.placeholder.com/300.png/09f/002',
            alt: ''
          }
        }
      ],
      swiperOption: {
          slidesPerView: '1',
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
    }
  }
}
</script>

<style scoped lang="less">
.index{
  color: white;
}
  .swiper-slide {
    width: 80%;
    min-height: 200px;


    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    background-color: rgba(50,50,50,0.7)

  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }

  .view-content{
    background-color: white;
    padding: 0.25em;
    margin: 1em 0em;
    box-sizing: border-box;

    border-radius: 0.25em;

    width: 100%;
  }



</style>
