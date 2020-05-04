import Vue from 'vue';
import { IArticlePayload, IArticle } from '@/interfaces/api/Article';

/**
 * stateのインターフェース
 */
export interface IState {
  articles: IArticle[];
}
 
export const state = (): IState => ({
  articles: [],
});

export const getters = {
  getArticle: (state: IState) => (id: string): IArticle | undefined => {
    return state.articles.find((article) => article._id === id);
  },
};

export const mutations = {
  saveArticles(state: IState, articles: IArticle[]) {
    state.articles = articles;
  },
};

export const actions = {
  async fetchArticles(this: Vue, { commit }: any) {
    const Articles = await this.$axios.$get('/endpoint');
    commit('saveArticles', Articles);
  },
 
  async postArticle(this: Vue, _: any, payload: IArticlePayload) {
    await this.$axios.$post('/endpoint', payload);
  },
};
