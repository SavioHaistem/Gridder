<template>
  <Button class="default-button input" @click="onClick">{{ buttonName }}</Button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useLoginStore } from '@/stores/Login';
  import { mapState } from 'pinia';

  export default defineComponent({
    props: {
      buttonName: String
    },
    computed: {
      ...mapState(useLoginStore,['getUserName'])
    },
    methods: {
      onClick(e: any) {
        e.preventDefault();
        this.$emit('onLogin');
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
