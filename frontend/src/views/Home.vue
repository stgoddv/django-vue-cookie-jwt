<template>
  <div class="home">
    <h1>Testing Auth</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  components: {},
  async created() {
    const options = {
      baseURL: "http://127.0.0.1:8000",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
        "Access-Control-Allow-Credentials": true
      },
      xsrfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFTOKEN",
      withCredentials: true,
      timeout: 5000
    };

    const instance = axios.create(options);

    // console.log("register new user");
    // let payload = {
    //   email: "joao@gmail.com",
    //   username: "joao",
    //   password: "adminadmin"
    // };
    // let r = await instance.post("auth/users/", payload);
    // console.log(r);

    // console.log("asking for data unauthorized");
    // try {
    //   let r = await instance.get("test/");
    //   console.log(r);
    // } catch (error) {
    //   if (error.response.status === 401) {
    //     console.log("Unauthorized");
    //   }
    // }

    // console.log("Login in");
    // let payload = {
    //   // username: "admin",
    //   // password: "adminadmin",
    //   username: "joao",
    //   password: "adminadmin"
    // };
    // let r = await instance.post("api/token/", payload);
    // console.log(r);

    // console.log("asking for data unauthorized");
    // try {
    //   r = await instance.get("test/");
    //   console.log(r);
    // } catch (error) {
    //   console.log(error.response);
    // }

    // console.log("Login out");
    // try {
    //   let r = await instance.post("api/token/delete/");
    //   console.log(r);
    // } catch (error) {
    //   console.log(error.response);
    // }

    // Request refresh
    // console.log("requesting refresh");
    // try {
    //   r = await instance.post("api/token/refresh/");
    //   console.log(r);
    // } catch (error) {
    //   console.log(error.response);
    // }

    // console.log("Login out");
    // try {
    //   let r = await instance.post("api/token/delete/");
    //   console.log(r);
    // } catch (error) {
    //   console.log(error.response);
    // }

    // // Request refresh
    // console.log("requesting refresh");
    // try {
    //   r = await instance.post("api/token/refresh/");
    //   console.log(r);
    // } catch (error) {
    //   console.log(error.response);
    // }
  }
};
</script>
