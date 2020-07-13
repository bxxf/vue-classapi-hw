import { mount, createLocalVue } from '@vue/test-utils';
import Data from '@/pages/data.vue';

import { response } from './utils/response';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

import { createVuexMock } from './utils/vuex';
const localVue = createLocalVue();

localVue.use(Vuex);

describe('data.vue', () => {
  let wrapper: any;
  let vuetify: any;
  let storeMock: any;

  beforeEach(() => {
    vuetify = new Vuetify();
    storeMock = createVuexMock();
    wrapper = mount(Data, {
      store: storeMock.store,
      localVue,
      vuetify,
    });
  });

  it('table rows are generated', async () => {
    storeMock.actions.saveResponse(response);
    await wrapper.vm.$forceUpdate();

    expect(wrapper.findAll('tr').length - 1).toBe(
      storeMock.state.responses.length,
    );
  });
});
