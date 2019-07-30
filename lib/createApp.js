import Vue from 'vue';
import Mixspa from '@mixspa/core';

var createApp = function createApp(tag, getOptions) {
  Mixspa.define({
    tag: tag,
    render: function render(parentEl) {
      var appEl = document.createElement('div');
      parentEl.appendChild(appEl);
      parentEl.vm = new Vue(getOptions(Mixspa.getAttributes(parentEl))).$mount(appEl);
    },
    unmount: function unmount(parentEl) {
      parentEl.vm && parentEl.vm.$destroy();
    }
  });
};

export default createApp;