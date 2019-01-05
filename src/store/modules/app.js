import Cookies from 'js-cookie'
import './mutationsName'
import {SET_LANGUAGE} from '@/store/modules/mutationsName'

const app = {
  state: {
    language: Cookies.get('language') || 'en'
  },
  mutations: {
    // 修改language属性，并保存到Cookie中
    [SET_LANGUAGE]: (state, lang) => {
      state.language = lang
      Cookies.set('language', lang)
    }
  },
  actions: {
    setLanguage ({commit}, lang) {
      commit(SET_LANGUAGE, lang)
    }
  }
}

export default app
