<template lang="pug">
  header.header
    .header__logo
      img(src="~/assets/img/logo.svg")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="stylus">
.header
  background-color #2e2e2e
  padding 15px
  &__logo
    & > img
      width 200px
      .no-touch &
        width 250px
</style>
