<template lang="pug">
  footer.footer
    small.footer__copyright
      | &copy; 2020 ebatetsu
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="stylus">
.footer
  background-color #2e2e2e
  padding 15px
  text-align center
  &__copyright
    font-size 12px
    color #fff
</style>
