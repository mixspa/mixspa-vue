import Mixspa from '@mixspa/core';
import { shallowMount } from '@vue/test-utils';
import AppLink from './AppLink.vue';

describe('AppLink.vue', () => {
  beforeEach(() => {
    Mixspa.emitLink = jest.fn();
  });

  it('should render app link with a link', () => {
    const wrapper = shallowMount(AppLink, {
      propsData: { base: '', to: '/to' }
    });
    expect(wrapper.findAll('a')).toHaveLength(1);
  });

  it('should emit link event when click app link', () => {
    const wrapper = shallowMount(AppLink, {
      propsData: { base: '', to: '/to' }
    });
    wrapper.trigger('click');
    expect(Mixspa.emitLink).toHaveBeenCalledWith('/to');
  });
})
