import Vue from 'vue'
import Router from 'vue-router'

import vwIndex from './views/vw0_Index/Index'
import vwAbout from './views/vw1_About/About'
import vwCall4Papers from './views/vw2_Authors/Call4Papers'
import vwGuidelines from './views/vw2_Authors/Guidelines'
import vwCity from './views/vw3_Location/City'
import vwVenue from './views/vw3_Location/Venue'
import vwDeadlines from './views/vw4_Deadlines/Deadlines'
import vwPastEvents from './views/vw5_PastEvents/PastEvents'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: vwIndex
    },
    {
      path: '/about',
      name: 'about',
      component: vwAbout
    },
    {
      path: '/authors/call4papers',
      name: 'call4papers',
      component: vwCall4Papers
    },
    {
      path: '/authors/guidelines',
      name: 'guidelines',
      component: vwGuidelines
    },
    {
      path: '/deadlines',
      name: 'deadlines',
      component: vwDeadlines
    },
    {
      path: '/pastEvents',
      name: 'pastEvents',
      component: vwPastEvents
    },
    {
      path: '/location/city',
      name: 'city',
      component: vwCity
    },
    {
      path: '/location/venue',
      name: 'venue',
      component: vwVenue
    }
  ]
})
