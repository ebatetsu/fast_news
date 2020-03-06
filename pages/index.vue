<template lang="pug">
  .wrapper
    Header
    Nav(
      :category="category"
      @get-news-top-headlines="getNewsTopHeadlines"
    )
    .container
      NewsList(:newsArticles="newsArticles")
      v-btn(v-if="newsArticles.length !== totalResults" @click="getNewsTopHeadlines(category, page + 1)") もっと見る
    Footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
import NewsList from '../components/NewsList.vue'

@Component({
  components: {
    Header,
    Footer,
    Nav,
    NewsList
  }
})
export default class Index extends Vue {
  private category: string = 'general'
  private newsArticles: any = []
  private totalResults: any = 0
  private pageSize: number = 20
  private pages: number = 0
  private page: number = 1
  private q: any = null

  private created() {
    this.getNewsTopHeadlines()
  }

  private getNewsTopHeadlines(
    category: string = 'general',
    page: number = 1,
    q: any = null
  ) {
    this.$store
      .dispatch('get_news_top_headlines', {
        country: 'jp',
        category,
        q,
        pageSize: this.pageSize,
        page,
        apiKey: process.env.NEWS_API_KEY
      })
      .then((res) => {
        res.data.articles.map((key: any, index: number) => {
          const d = new Date(key.publishedAt)
          const year = d.getFullYear()
          const month = this.convertNum(d.getMonth() + 1)
          const day = this.convertNum(d.getDate())
          const hour = this.convertNum(d.getHours())
          const minutes = this.convertNum(d.getMinutes())
          res.data.articles[index].publishedAt =
            year + '/' + month + '/' + day + ' ' + hour + ':' + minutes
        })
        if (category === this.category) {
          this.newsArticles = this.newsArticles.concat(res.data.articles)
        } else {
          this.category = category
          this.newsArticles = res.data.articles
        }
        this.totalResults = res.data.totalResults
        this.pages = Math.ceil(this.totalResults / this.pageSize)
        this.page = page
      })
  }

  private convertNum = function(number: any) {
    let num: any = Number(number)
    if (num < 10) {
      num = '0' + String(num)
    }
    return num
  }
}
</script>

<style lang="stylus">
.container
  padding 10px

.v-btn
  width 100%
  background-color #29a7e1 !important
  color #fff !important
  font-weight bold
  margin-top 20px
</style>
