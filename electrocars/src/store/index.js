import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainData: [],
    advantage: [
      'Прямые поставки автомобилей от производителя',
      'Уникальные цены от завода',
      'Ассортимент эксклюзивных моделей',
      'Заключение договора с клиентом',
      'Возможность страхования груза',
      'Гарантированная доставка до двери',
      'Оплата после получения товара',
      'Срок доставки от 20 дней',
    ],
    articles: []
  },
  getters: {
    getMainData(state) {
      return state.mainData;
    },
    getAdvantage(state) {
      return state.advantage;
    },
    getArticles(state) {
      return state.articles;
    }
  },
  mutations: {
    SET_MAIN_DATA(state, data) {
      state.mainData = data;
    },
    SET_ARTICLES_DATA(state, data) {
      state.articles = data;
    },
  },
  actions: {
    async fetchMain(ctx) {
      const res = await fetch('https://api.site-77.ru/');
      const data = await res.json();
      ctx.commit('SET_MAIN_DATA', data);
    },
    async fetchArticles(ctx) {
      const res = await fetch('https://api.site-77.ru/articles');
      const data = await res.json();
      ctx.commit('SET_ARTICLES_DATA', data);
    },
  },
  modules: {
  }
})
