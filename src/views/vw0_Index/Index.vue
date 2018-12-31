<template>

  <div class="view index">

    <div class="view-content">

      <div class="index-info">
        <slider/>
      </div>

      <div class="index-info">
        <info/>
      </div>

      <div class="index-submission">
        <submission/>
      </div>

      <div class="index-topics">
        <topics/>
      </div>

      <div class="index-features">
       <features/>
      </div>

    </div>

  </div>


</template>

<script>

import slider from './../../components/ui/slider';
import topics from './../../components/ui/topics';
import info from './../../components/ui/info';
import features from './../../components/ui/features';
import submission from './../../components/ui/submission';


const locationJSON =  require('@/config/Event_Info/LOCATION.json');



export default {
  name: 'vwIndex',

  components:{
    slider,
    info,
    topics,
    features,
    submission
  },

  created(){

  },

  data(){
    return{
      LOCATION : locationJSON
    }
  }
}
</script>

<style scoped lang="less">
.index{
  color: white;

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
