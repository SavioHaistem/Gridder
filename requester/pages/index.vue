<template>
  <div>
   <p v-if="$currentUser.name">logado</p>
    <div>
      <h1>Bem vindo(a) {{ $currentUser.name }}</h1>
    </div>
    <button @click="auth">logar como Savio</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { users } from '@/store';

export default defineComponent({
  computed: {
    $currentUser() {
      return users.$currentUser
    }
  },
  methods: {
    auth() {
      users.authenticate({ name: 'savio', password: '123' });
    }
  }
})
</script>

<style scoped>
</style>