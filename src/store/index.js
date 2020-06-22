import Vue from "vue";
import Vuex from "vuex";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
const http = Vue.http;

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    stations: [],
    markers: []
  },
  getters: {
    getGeopos: state => {
      return state.markers;
    }
  },
  /**
   * Update the status by updating the prop loadingStatus
   * This property checks the status of the pet http
   * @param {Object} state
   * @param {Object} loadingStatus
   */
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    /**
     * Update the status by updating the prop stations
     * @param {Object} state
     * @param {Object} stations
     */
    SET_STATIONS(state, stations) {
      const message = { ...stations };

      // Freeze message to prevent slow '_traverse' calls made by Vue
      Object.freeze(message);
      state.markers.push(message);
      if (state.markers.length > 10) {
        state.markers = state.markers.slice(-10);
      }
    }
  },
  actions: {
    fetchStations(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      http
        .get(
          "https://data.sbb.ch/api/records/1.0/search/?dataset=kontaktadressen&facet=service&rows=10&start=0"
        )
        .then(response => {
          context.commit("SET_STATIONS", response.data.records);
        });
    }
  },
  modules: {}
});
