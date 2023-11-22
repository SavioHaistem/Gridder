<script lang="ts">
  import { defineComponent } from 'vue'
  import LoginForm from '@/components/molecules/LoginForm.vue'
  export default defineComponent({
    setup() {
      return {}
    },
    components: { LoginForm },
  })
  /*
  Reajustar tamanho do grid para multiplos dispositivos
  */
</script>

<template>
  <main class="home">
    <LoginForm -form-msg="Bem vindo ao Gridder!" class="LoginForm"/>
  </main>
</template>

<style>
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0;
    margin: none;
    border: 0px;
  }
  body {
    background-color: black;
  }
  .title {
    color: rgb(208, 208, 208);
    text-align: center;
  }
  main.home {
    height: 80vh;
  }
  .LoginForm {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 22rem;
    height: 100%;
  }
  .LoginForm > .input {
    padding: 0px 2rem;
    height: 3rem;
    border-radius: 0.5rem;
    outline: none;
  }
  .LoginForm > button.default-button {
    border-radius: 0.5rem;
  }
</style>