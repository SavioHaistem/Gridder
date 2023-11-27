<template>
  <input type="text" id="userEmail" class="input" :placeholder="placeholder">
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {
        
      }
    },
    props: {
      placeholder: String
    },
    data() {
      return {
        userName: String,
      }
    }
  })
</script>