import Vuex from 'vuex'
import news from '../api/news';

const state = () => ({})

const mutations = {}

const actions = {
  async get_news_top_headlines({ commit }: any, params: any){
    const result = await news.get_news_top_headlines(params)
    return result;
  },
  async get_news_everything({ commit }: any, params: any){
    const result = await news.get_news_everything(params)
    return result;
  },
  async get_news_sources({ commit }: any, params: any){
    const result = await news.get_news_sources(params)
    return result;
  }
}

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store