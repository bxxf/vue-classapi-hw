import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'test';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { name },
    });
    expect(wrapper.find('.greeting').text()).toMatch('Hello ' + name + '!');
  });
});
