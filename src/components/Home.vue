<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold">Welcome to Our Shop</h1>
        <p class="subtitle-1">This is the best place to find awesome products!</p>
        <router-link to="/shop"><v-btn class="mt-5" color="primary" large>Go to Shop</v-btn></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
h1 {
  color: #1976D2;
}
p {
  margin-top: 20px;
  color: #424242;
}
</style>