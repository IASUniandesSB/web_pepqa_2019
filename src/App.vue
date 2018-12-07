<script>

import vHeader from './components/shared/header'
import vFooter from './components/shared/footer'

export default {
  name: 'vApp',
  components: {
    vHeader,
    vFooter
  }
}
</script>

<template>
  <div id="app">

      <v-header/>

      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>

      <v-footer/>

  </div>
</template>
<style lang="less">

@import './styles/main.less';
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
