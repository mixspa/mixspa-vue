import Vue from 'vue'
import MixspaApp from '@mixspa/core/lib/app';

const createApp = (tag, getOptions) => {
  MixspaApp.define({
    tag: tag,
    render: (parentEl) => {
      let appEl = document.createElement('div');
      parentEl.appendChild(appEl);
      parentEl.vm = new Vue(getOptions(parentEl.getAttributes())).$mount(appEl);
    },
    unmount: (parentEl) => {
      parentEl.vm && parentEl.vm.$destroy();
    }
  });
};

export default createApp;
