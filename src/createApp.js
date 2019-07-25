import Vue from 'vue'
import Mixspa from '@mixspa/core';

const createApp = (tag, getOptions) => {
  Mixspa.define({
    tag: tag,
    render: (parentEl) => {
      let appEl = document.createElement('div');
      parentEl.appendChild(appEl);
      parentEl.vm = new Vue(getOptions(Mixspa.getAttributes(parentEl))).$mount(appEl);
    },
    unmount: (parentEl) => {
      parentEl.vm && parentEl.vm.$destroy();
    }
  });
};

export default createApp;
