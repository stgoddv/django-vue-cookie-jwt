<template>
  <div class="home">
    <div v-if="username">
      <img class="max-w-md mx-auto my-3" src="@/assets/welcome.svg" alt="" />
      <p class="text-2xl capitalize">Welcome {{ username }}!</p>
      <button
        class="text-lg mt-8 p-3 rounded-lg shadow-md mx-auto border cursor-pointer hover:shadow-lg"
        style="background-color: #667eea; color: white; transition: box-shadow 0.3s;"
        @click="logout"
      >
        Logout
      </button>
    </div>

    <div
      v-if="!username"
      class="shadow-md max-w-xs mx-auto p-5 rounded-lg border"
    >
      <img class="p-3" src="@/assets/login.svg" alt="" />
      <p class="text-lg mb-1">You're not logged in.</p>
      <p class="text-sm">Please register or login.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").catch(error => console.log(error));
    }
  },
  computed: {
    activeUser() {
      return this.$store.state.auth.activeUser;
    },
    username() {
      return this.activeUser ? this.activeUser.username : "";
    }
  }
};
</script>
