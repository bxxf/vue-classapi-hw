import { mount, createLocalVue } from '@vue/test-utils';
import Index from '@/pages/index.vue';
import IValues from '@/interfaces/response.interface';
import { countResponses } from '@/services/response.service';

import { response } from './utils/response';

import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createVuexMock } from './utils/vuex';

const localVue = createLocalVue();
type VMIndex = Vue & { save: (values: IValues) => void } & {
  saveResponse: (response: IValues) => void;
} & { data: IValues[] } & { email: string };

localVue.use(Vuex);

describe('index.vue', () => {
  let wrapper: any;
  let storeMock: any;
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
    storeMock = createVuexMock();
    wrapper = mount(Index, {
      store: storeMock.store,
      localVue,
      vuetify,
    });
  });

  it('response is saved', () => {
    (wrapper.vm as VMIndex).saveResponse = storeMock.actions.saveResponse;
    (wrapper.vm as VMIndex).save(response);

    expect(storeMock.state.responses.includes(response)).toBeTruthy();
  });

  it('counter works', () => {
    (wrapper.vm as VMIndex).saveResponse = storeMock.actions.saveResponse;
    (wrapper.vm as VMIndex).save(response);

    expect(
      countResponses(
        (wrapper.vm as VMIndex).email,
        (wrapper.vm as VMIndex).data,
      ),
    ).toBe(1);
  });
});
