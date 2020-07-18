import MixspaLink from '@mixspa/core/lib/link';

export default {
  props: {
    to: {
      type: String,
      required: true
    },
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      MixspaLink.emitLink(e.target.getAttribute('href'));
    }
  },
  render(h) {
    return h('a', { attrs: { href: this.to }, on: { click: this.onClick } }, this.$slots.default);
  }
}
