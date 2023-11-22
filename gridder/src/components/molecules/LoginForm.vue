<template>
  <form action="" class="form-body">
    <h1 class="title">{{ FormMsg }}</h1>
    <InputPassword />
    <DefaulButton button-name="Login"/>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import InputPassword from '../atoms/InputPassword.vue'
  import InputEmail from '../atoms/InputEmail.vue'
  import DefaulButton from '../atoms/DefaulButton.vue'

  export default defineComponent({
    setup() {
      return {}
    },
    props: {
      FormMsg: String
    },
    components: { InputPassword, InputEmail, DefaulButton },
  })
</script>