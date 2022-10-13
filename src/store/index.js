import { createStore } from "vuex";
import menuItems from '@/store/modules/menuItems';
import helpFormInputs from '@/store/modules/helpFormInputs';
import ctaCards from '@/store/modules/ctaCard';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menuItems,
    helpFormInputs,
    ctaCards
  },
});
