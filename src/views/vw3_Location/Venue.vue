<template>
  <div class="view index">
    <br>
    <h2> PEPQA LOCATION VENUE</h2>
    <br>
  </div>
</template>

<script>
const locationJSON =  require('@/config/Event_Info/LOCATION.json');

export default {
  name: 'vwVenue',
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
</style>
