<template>
    <a href="javascript:void" @click.prevent="onClick"><slot /></a>
</template>

<script>
import Mixspa from '@mixspa/core';

export default {
  props: ['base', 'to'],
  methods: {
    onClick(event) {
      console.log('on click');
      Mixspa.emitLink(this.base + this.to);
    }
  }
}
</script>
