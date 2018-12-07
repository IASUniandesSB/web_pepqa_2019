<template>
  <div class="view index">
    <br>
    <h2> PEPQA LOCATION CITY</h2>
    <br>
  </div>
</template>

<script>
const locationJSON =  require('@/config/Event_Info/LOCATION.json');

export default {
  name: 'vwCity',
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
