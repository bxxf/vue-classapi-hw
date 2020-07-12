import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import counter from './modules/counter';

const store = new Vuex.Store({
  modules: {
    counter,
  },
});

export default store;
