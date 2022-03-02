<!-- eslint-disable -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
    <h1>Im alive</h1>
  </div>
<!--
    <div class="w-25 container">
        <div class="bg-warning p-5 rounded m-auto" id="box-form">
        <form>
            <h1>Inscription</h1>
            <div class="form-group">
                <label for="formGroupExampleInput">Profile name</label>
                <input v-model="name" type="text" class="form-control" id="name" placeholder="Example input">
            </div>
            <div class="form-group mt-4">
                <label for="formGroupExampleInput">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Example input">
            </div>
            <div class="form-group mt-4">
                <label for="formGroupExampleInput2">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Another input">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Sign in</button>
        </form>
        </div>
    </div>
    <router-link to="/connection">Connect</router-link>
    -->
</template>
<script>/* eslint-disable */ 
export default {
    name: "VueAuthentif",
    data(){
        return {
            name:'',
            email: ''
        }
    },
    watch: {
        name: function(){
            this.onChange();
        }
    },
    methods : {
        // Ajax
        onChange(){
            console.log("allo")
            //Validation avec la bd pour le nom
        },
        login() {
            this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
            this.$auth.logout({
            returnTo: window.location.origin
            });
        }
    },
}
</script>
<style lang="scss">
#box-form{
    box-shadow: 0 0 15px black;
}
</style>
