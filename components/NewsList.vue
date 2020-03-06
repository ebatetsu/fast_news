<template lang="pug">
  .c-news-list
    .news(v-if="newsArticles.length")
      ul.news__items
        li.news__item(v-for="(key, index) in newsArticles" :key="index")
          v-card.mx-auto(max-width='400' :href="key.url" target="_blank")
            v-img.white--text.align-end(height='200px' :src="key.urlToImage" :alt="key.title" v-if="key.urlToImage")
              v-card-title.news__title {{key.title}}
            v-card-text.text--primary
              div.news__date {{key.publishedAt}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Pager extends Vue {
  @Prop() public newsArticles!: number
}
</script>

<style lang="stylus">
.c-news-list
  .news
    &__items
      display flex
      justify-content space-between
      flex-wrap wrap
      margin-top -20px
    &__item
      margin-top 20px
      list-style-type none
      width 49%
      .touch &
        width 100%
        .v-image
          height 120px !important
      & > a
        max-width 100% !important
    &__img
      max-width 300px
    &__title
      width 100%
      color #fff
      font-weight bold
      font-size 16px
      line-height 1.4
    &__date
      //
    .v-image__image
      &::after
        content ''
        display block
        position absolute
        width 100%
        height 100%
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0, 0, 0, .5)
    .v-responsive__content
      flex 100%
      display flex
      align-items flex-end
    .touch &
      .v-responsive__content
        align-items start
</style>
