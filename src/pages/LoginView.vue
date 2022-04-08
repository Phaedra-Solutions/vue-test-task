
<template>
  <div class="q-pa-md admin-login-wrapper">
    <q-form @submit="onSubmit" class="q-gutter-md admin-login-form">
      <q-input
        filled
        v-model="email"
        label="Your Email *"
        type="email"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Please enter your email']"
      />

      <q-input
        filled
        v-model="password"
        label="Your Password *"
        type="password"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Please enter your password']"
      />
      <div class="action-wrapper">
        <q-btn type="submit" color="primary">Login</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import APIService from '../services/apiService'

export default {
  name: 'LoginView',

  data() {
    return {
      email: null,
      password: null
    }
  },

  mounted() {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.$store.dispatch('user/LOGIN', user)
      this.$router.push('/')
    }
  },

  methods: {
    async onSubmit() {
      try {
        const user = await APIService.login(this.email, this.password)
        if (user) {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Login Successful'
          })

          this.$store.dispatch('user/LOGIN', user)
          this.$router.push('/')
        } else {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Login Failed'
          })
        }
      } catch (error) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Login Failed'
        })
      }
    }
  }

}
</script>

<style scoped lang="scss">
.admin-login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .admin-login-form {
    max-width: 100%;
    max-width: 100%;
    width: 360px;
    text-align: center;
    .action-wrapper button {
      width: 99%;
    }
  }
}
</style>
