<template>
  <Button class="default-button input">{{ buttonName }}</Button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useLoginStore } from '@/stores/Login';
  import { mapActions } from 'pinia';

  export default defineComponent({
    props: {
      buttonName: String
    },
    methods: {
      ...mapActions(useLoginStore, ['setUser']),
      onClick(e: any) {
        e.preventDefault();
      }
    }
  })
</script>

<style scoped>
  button {
    background-color: rgb(47, 255, 137);
    height: 3rem;
  }
</style>
