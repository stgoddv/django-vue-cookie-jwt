<template>
  <div class="home">
    <h1 v-if="fetchingData">Loading...</h1>

    <div v-if="login">
      <img class="max-w-md mx-auto my-3" src="@/assets/welcome.svg" alt="" />
      <p class="text-2xl capitalize">Welcome {{ username }}!</p>
      <button
        class="text-lg mt-8 p-3 rounded-lg shadow-md mx-auto border cursor-pointer hover:shadow-lg"
        style="background-color: #667eea; color: white; transition: box-shadow 0.3s;"
        @click="logout"
        :disabled="fetchingData"
      >
        Logout
      </button>
    </div>

    <div v-else class="shadow-md max-w-xs mx-auto p-5 rounded-lg border">
      <img class="p-3" src="@/assets/login.svg" alt="" />
      <p class="text-lg mb-1">You're not logged in.</p>
      <p class="text-sm">Please register or login.</p>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/backend";

export default {
  name: "home",
  data() {
    return {
      fetchingData: true,
      login: false,
      username: ""
    };
  },
  methods: {
    async logout() {
      this.fetchingData = true;
      try {
        await api.post("api/token/delete/");
      } catch (error) {
        console.log(error);
      }
      this.username = "";
      this.fetchingData = false;
      this.login = false;
    }
  },
  async created() {
    try {
      let r = await api.get("auth/users/me/");
      this.username = r.data.username;
      this.fetchingData = false;
      this.login = true;
    } catch (error) {
      this.username = "";
      this.fetchingData = false;
      this.login = false;
    }
  }
};
</script>
