import Vue from 'vue'
import App from './App.vue'
import PouchVue from 'pouch-vue';
import PouchDB from 'pouchdb-browser'
import pouchdbFind from 'pouchdb-find'
import pouchdbLiveFind from 'pouchdb-live-find'

Vue.config.productionTip = false

PouchDB.plugin(pouchdbFind)
PouchDB.plugin(pouchdbLiveFind)

Vue.use(PouchVue, {
  pouch: PouchDB, 
  defaultDB: 'people' //You can give it any name 
});

new Vue({
  render: h => h(App),
}).$mount('#app')
