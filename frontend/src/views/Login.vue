<template>
  <div class="login mx-5 mt-10">
    <div class="flex bg-white shadow-md border rounded max-w-3xl mx-auto">
      <div class="w-0 md:w-1/2 invisible md:visible md:px-3">
        <img class="p-3 mt-10" src="@/assets/login.svg" alt="" />
      </div>
      <div class="w-full md:w-1/2 sm:px-3">
        <p class="my-5 text-2xl">Welcome back!</p>
        <div class="flex flex-col mb-5 pb-8 px-8">
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              v-model="username"
              :disabled="fetchingData"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              v-model="password"
              :disabled="fetchingData"
            />
            <p v-if="error" class="text-sm italic mt-3" style="color: #f56565;">
              * Invalid username / password. Please try again.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="button"
              style="background-color: #667eea;"
              :disabled="fetchingData"
              @click="login"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
              :disabled="fetchingData"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchingData: false,
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    async login() {
      this.fetchingData = true;
      try {
        await this.$store.dispatch("auth/login", {
          username: this.username,
          password: this.password
        });
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        this.error = true;
      }
      this.fetchingData = false;
    }
  }
};
</script>
