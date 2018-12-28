<template>

  <div class="view index">

    <div class="view-content">

     <!-- swiper -->
      <swiper :options="swiperOption">

        <swiper-slide v-for="slide in SLIDES" v-bind:key="slide.image.alt">
          <img :src="slide.image.src" :alt="slide.image.alt" class="slider-img">
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
            src: 'img/slider/img2.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 1'
          }

        },{
          image: {
            src: 'img/slider/img3.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 2'
          }
        },{
          image: {
            src: 'img/slider/img6.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 3'
          }
        },{
          image: {
            src: 'img/slider/img7.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 4'
          }
        },{
          image: {
            src: 'img/slider/img8.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 6'
          }
        },{
          image: {
            src: 'img/slider/img9.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 7'
          }
        },{
          image: {
            src: 'img/slider/img10.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 8'
          }
        }
        ,{
          image: {
            src: 'img/slider/img11.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 9'
          }
        }
        ,{
          image: {
            src: 'img/slider/img12.jpg',
            alt: 'PEPQA | POWER ELECTRONICS AND POWER QUALITY APPLICATIONS | SLIDER | IMAGE 10'
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

    img{
          width: 100%;
    object-fit: cover;
    object-position: center;
    height: 60vh;
    }


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
