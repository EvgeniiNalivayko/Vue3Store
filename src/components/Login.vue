<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-card-actions class="justify-center">
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/userStore'

export default {
  name: 'Login',
  setup() {
    const userStore = useUserStore()
    const username = ref('')
    const password = ref('')
    const router = useRouter()

    const login = () => {
      userStore.login({ username: username.value, password: password.value })
    }

    watchEffect(() => {
      if (userStore.isAuthenticated) {
        router.push('/shop')
      }
    })

    return { username, password, login }
  },
}
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>