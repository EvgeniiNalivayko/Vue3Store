<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Online Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/"><v-btn text>Home</v-btn></router-link>
      <router-link to="/shop"><v-btn text>Shop</v-btn></router-link>
      <router-link to="/about"><v-btn text>About</v-btn></router-link>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center" cols="12">
        ©2023 My Online Shop
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

.v-toolbar-title, .v-footer {
  font-weight: bold;
}
</style>import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import routes from './router'

import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(pinia)

app.mount('#app')