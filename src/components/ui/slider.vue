<template>
<div class="pepqa-swiper">
  <!-- swiper -->
  <swiper :options="swiperOption">

    <swiper-slide v-for="slide in SLIDES" v-bind:key="slide.image.id">
      <img :data-src="slide.image.src" :src="slide.thumbs.src"  :alt="slide.image.alt" class="slider-img swiper-lazy">
      <div class="swiper-lazy-preloader"></div>
      <h1 class="swiper-watermark" v-if="slide.image.id > 1">PEPQA 2019</h1>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
export default {


  name: 'slider',

  created(){
    const slides_number = 12;
    for (let k = 0; k < slides_number ; k++) {
      const SLIDE = {

        image: {
          id: k,
          src: 'img/slider/hd/hd_img_' + k + '.jpg',
          alt: "PEPQA | POWER ELECTRONICS " + k
        },

        thumbs: {
          id: k,
          src: 'img/slider/thumbs/hd_img_'+k+'.jpg',
          alt: ''
        }

      }
      this.SLIDES.push(SLIDE);
    }
  },

  methods:{

  },

  data(){
    return{
      SLIDES: [],
      swiperOption: {
          slidesPerView: '1',
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // Disable preloading of all images
          preloadImages: false,
          // Enable lazy loading
          lazy: true
      }
    }
  }
}
</script>


<style lang="less" scoped>
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


  .swiper-watermark{
    position: absolute;
    top: 0.5em;
    left: -6.25em;
    color: rgba(0,0,0,0.25);
    font-size: 13em;
    font-weight: 900;
    font-family: INHERIT;
  }

</style>
