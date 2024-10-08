import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 150 },
      { id: 3, name: 'Product 3', price: 75 },
      { id: 4, name: 'Product 4', price: 200 },
    ],
  }),
  getters: {
    sortedProductsAscending: (state) => {
      return [...state.products].sort((a, b) => a.price - b.price)
    },
    sortedProductsDescending: (state) => {
      return [...state.products].sort((a, b) => b.price - a.price)
    },
  },
})