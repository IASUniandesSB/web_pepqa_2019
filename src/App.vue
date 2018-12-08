<script>

import vHeader from './components/shared/header/header'
import vFooter from './components/shared/footer/footer'

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


<style lang="scss">
  @import "~bootstrap/scss/bootstrap";  // import complete bootstrap.scss source from node_modules using ~ alias
</style>


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
