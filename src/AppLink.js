import Mixspa from '@mixspa/core';

export default {
  props: ['base', 'to'],
  methods: {
    onClick(event) {
      event.preventDefault();
      Mixspa.emitLink(this.base + this.to);
    }
  },
  render(createElement) {
    let attrs = { href: 'javascript:void' };
    let on = { click: this.onClick };
    return createElement('a', { attrs, on }, this.$slots.default);
  }
}
