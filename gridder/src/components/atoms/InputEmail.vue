<template>
  <input
    type="text"
    id="userEmail"
    class="input"
    :placeholder="placeholder"
    v-model="userName"
    @change="changeName"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      placeholder: String,
    },
    data() {
      return {
        userName: '',
      }
    },
    methods: {
      changeName() {
        this.$emit('type-user', this.userName)
      },
    },
  })
</script>
