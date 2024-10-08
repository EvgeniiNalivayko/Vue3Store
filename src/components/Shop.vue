<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold">Shop</h1>
        <p class="subtitle-1">Here you can find our amazing products.</p>
        <v-btn class="mt-5" color="primary" large @click="sortOrder = 'asc'">Sort by Price: Low to High</v-btn>
        <v-btn class="mt-5 ml-2" color="primary" large @click="sortOrder = 'desc'">Sort by Price: High to Low</v-btn>
        <router-link to="/"><v-btn class="mt-5 ml-2" color="primary" large>Back to Home</v-btn></router-link>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="product in sortedProducts" :key="product.id" cols="12" md="4" class="product-card">
        <v-card>
          <v-img :src="`https://via.placeholder.com/300?text=${product.name}`" alt="product.name"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>\${{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary">Buy Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useProductStore } from '../store/productStore'
import { computed, ref } from 'vue'

export default {
  name: 'Shop',
  setup() {
    const store = useProductStore()
    const sortOrder = ref('asc')

    const sortedProducts = computed(() => {
      return sortOrder.value === 'asc'
        ? store.sortedProductsAscending
        : store.sortedProductsDescending
    })

    return { sortOrder, sortedProducts }
  },
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
.product-card {
  margin-top: 20px;
}
</style>