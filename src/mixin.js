import MixspaLink from '@mixspa/core/lib/link';

export default {
  created: function() {
    this._mixspaLinkListener = MixspaLink.onLink(url => {
      this.$router && this.$router.push(url);
    });
  },

  destroyed: function() {
    MixspaLink.offLink(this._mixspaLinkListener);
  }
}
