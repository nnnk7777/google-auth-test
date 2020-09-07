import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import firebase from "firebase"


Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyDfS6YVNI-eSjQH5jnOfg4-LeK-AGWdC08",
    authDomain: "auth-test-e9523.firebaseapp.com",
    databaseURL: "https://auth-test-e9523.firebaseio.com",
    projectId: "auth-test-e9523",
    storageBucket: "auth-test-e9523.appspot.com",
    messagingSenderId: "740616358723",
    appId: "1:740616358723:web:214a26546468e33a097df6",
    measurementId: "G-HWRBDD4JJ4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
