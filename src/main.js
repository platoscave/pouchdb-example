import Vue from 'vue'
import App from './App.vue'
import PouchDB from 'pouchdb-browser'
import pouchdbFind from 'pouchdb-find'
import pouchdbLiveFind from 'pouchdb-live-find'

Vue.config.productionTip = false

PouchDB.plugin(require('pouchdb-find'));
PouchDB.plugin(require('pouchdb-live-find'));

PouchDB.plugin(pouchdbFind)
PouchDB.plugin(pouchdbLiveFind)

Vue.use(pouchVue, {
  pouch: PouchDB, 
  defaultDB: 'coscommonsio' //You can give it any name 
});

new Vue({
  render: h => h(App),
}).$mount('#app')
