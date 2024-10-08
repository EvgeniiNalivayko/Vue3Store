<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold">About Us</h1>
        <p class="subtitle-1">
          We are a leading e-commerce platform providing the best products and
          services to our valued customers. Our mission is to make shopping
          easy and convenient for everyone.
        </p>
        <router-link to="/"><v-btn class="mt-5" color="primary" large>Back to Home</v-btn></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
h1 {
  color: #1976D2;
}
p {
  margin-top: 20px;
  color: #424242;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>