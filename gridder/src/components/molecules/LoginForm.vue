<template>
  <form action="" class="form-body">
    <h1 class="title">{{ FormMsg }}</h1>
    <h3>{{ getUserName }}</h3>
    <InputEmail placeholder="Digite seu nome de usuário"></InputEmail>
    <DefaulButton button-name="Login"/>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import InputEmail from '../atoms/InputEmail.vue'
  import DefaulButton from '../atoms/DefaulButton.vue'
  import { mapState } from 'pinia'
  import { useLoginStore } from '@/stores/Login'

  export default defineComponent({
    props: {
      FormMsg: String
    },
    components: { InputEmail, DefaulButton },
    computed: {
      ...mapState(useLoginStore,['getUserName']),
    },
  })
</script>