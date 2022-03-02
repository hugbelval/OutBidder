/* eslint-disable */ 
import { createApp, Vue } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";
/*
// Install the authentication plugin here
Vue

Vue.config.productionTip = false;

*/
const app = createApp(App)
app.use(store).use(router).mount('#app');
app.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });
