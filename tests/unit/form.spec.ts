import { mount, createLocalVue } from '@vue/test-utils';
import MainForm from '@/components/main-form.vue';
import Vuetify from 'vuetify';

import { response } from './utils/response';
import Response from '@/interfaces/response.interface';

const localVue = createLocalVue();

type VMForm = Vue & {
  validateCode: (code: string, responses: Response[]) => boolean;
} & {
  submit: () => void;
};

describe('main-form.vue', () => {
  let vuetify: any;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('code validation', () => {
    const wrapper = mount(MainForm, {
      localVue,
      vuetify,
    });

    expect(
      (wrapper.vm as VMForm).validateCode(response.code, [response]),
    ).toBeFalsy();
  });

  it('form is submitted when valid', () => {
    const wrapper = mount(MainForm, {
      localVue,
      vuetify,
    });

    wrapper.findAll('input[type="text"]').setValue(response.name);
    wrapper.find('input[type="email"]').setValue(response.email);
    wrapper.find('input[type="checkbox"]').setChecked(response.agreement);

    (wrapper.vm as VMForm).validateCode = () => true;
    (wrapper.vm as VMForm).submit();

    expect(wrapper.emitted('submitted')).toHaveLength(1);
  });
});
