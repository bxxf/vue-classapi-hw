import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import IValues from '@/interfaces/response.interface';

export const createVuexMock = () => {
  const state = { responses: [] as IValues[] };
  const actions: any = {
    saveResponse: (values: IValues) => state.responses.push(values),
  };

  const store = new Vuex.Store({
    modules: {
      responses: {
        getters: {
          data: () => state.responses,
        },
        namespaced: true,
        state,
        actions,
      },
    },
  });

  return {
    state,
    actions,
    store,
  };
};
