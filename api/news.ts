import axios from 'axios';

export default {
  // https://newsapi.org/docs/endpoints/top-headlines
  get_news_top_headlines(params: any) {
    return axios.get('//newsapi.org/v2/top-headlines', { params })
  },
  // https://newsapi.org/docs/endpoints/everything
  get_news_everything(params: any) {
    return axios.get('//newsapi.org/v2/everything', { params })
  },
  // https://newsapi.org/docs/endpoints/sources
  get_news_sources(params: any) {
    return axios.get('//newsapi.org/v2/sources', { params })
  }
}