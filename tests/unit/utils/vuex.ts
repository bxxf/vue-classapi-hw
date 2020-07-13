import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import IValues from '@/interfaces/response.interface';

export const createVuexMock = () => {
  const mockState = { responses: [] as IValues[] };
  const mockActions: any = {
    saveResponse: (values: IValues) => mockState.responses.push(values),
  };

  const store = new Vuex.Store({
    modules: {
      responses: {
        getters: {
          data: () => mockState.responses,
        },
        namespaced: true,
        state: mockState,
        actions: mockActions,
      },
    },
  });

  return {
    state: mockState,
    actions: mockActions,
    store,
  };
};
