<template lang="pug">
  .nav
    ul.nav__inner
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='general') }" @click="getNewsTopHeadlines('general')")
          | 総合
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='entertainment') }" @click="getNewsTopHeadlines('entertainment')")
          | エンタメ
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='business') }" @click="getNewsTopHeadlines('business')")
          | ビジネス
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='technology') }" @click="getNewsTopHeadlines('technology')")
          | テクノロジー
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='sports') }" @click="getNewsTopHeadlines('sports')")
          | スポーツ
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='health') }" @click="getNewsTopHeadlines('health')")
          | 健康
      li.nav__item
        a(href="#" :class="{ isActive: (category ==='science') }" @click="getNewsTopHeadlines('science')")
          | 科学
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Nav extends Vue {
  @Prop() public category!: string

  private getNewsTopHeadlines(category: string = 'general') {
    this.$emit('get-news-top-headlines', category)
  }
}
</script>

<style lang="stylus">
.nav
  background-color #404040
  .touch &
    overflow-x auto
    white-space nowrap
    -webkit-overflow-scrolling touch
  &__inner
    display flex
    .no-touch &
      justify-content space-between
      width 90%
      margin 0 auto
  &__item
    list-style-type none
    & > a
      display block
      padding 10px 15px
      text-align center
      text-decoration none
      color #fff
      font-size 16px
      position relative
      &.isActive
        &::after
          content ''
          display block
          border-bottom 2px solid #fff
          position absolute
          bottom 2px
          left 0
          right 0
          width 100%
      .touch &
        font-size 16px
</style>
