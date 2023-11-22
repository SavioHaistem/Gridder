<template>
  <Button class="default-button input">{{ buttonName }}</Button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
    props: {
      buttonName: String
    }
  })
</script>

<style scoped>
  button {
    background-color: rgb(47, 255, 137);
    height: 3rem;
  }
</style>
