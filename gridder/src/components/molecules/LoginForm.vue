<template>
  <form action="" class="form-body">
    <h1 class="title">{{ FormMsg }}</h1>
    <h3>{{ getUserName }}</h3>
    <InputEmail placeholder="Digite seu nome de usuário" @type-user="typedName"></InputEmail>
    <DefaulButton button-name="Login" @onLogin="userLogin"/>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import InputEmail from '../atoms/InputEmail.vue'
  import DefaulButton from '../atoms/DefaulButton.vue'
  import { mapState, mapActions } from 'pinia'
  import { useLoginStore } from '@/stores/Login'

  export default defineComponent({
    props: {
      FormMsg: String
    },
    data() {
      userName: String
    },
    components: { InputEmail, DefaulButton },
    computed: {
      ...mapState(useLoginStore,['getUserName']),
    },
    methods: {
      ...mapActions(useLoginStore,['setUser']),
      typedName(name: String) {
        this.setUser({ userName: name });
      },
      checkUserName(name: String) {
          for (let i = 0; i < name.length; i++) {
            if (isNaN(Number(name[i])) === false) {
              throw "O nome de usuário deve conter apenas letras"
            } else {
              continue;
            }
          }
      },
      userLogin() {
        try {
          this.checkUserName(this.getUserName);
          this.$router.push("/grid")
        } catch (error) {
          window.alert(error);
        }
      }
    }
  })
</script>