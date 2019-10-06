import Vue from 'vue'
import Vuex from 'vuex'

import site from './modules/site'
import cms from './modules/cms'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    site,
    cms
  }
})
