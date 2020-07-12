import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import responses from './modules/responses';

const store = new Vuex.Store({
  modules: {
    responses,
  },
});

export default store;
