<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
  
  <button @click="redirect" >Redirect</button>
  <button @click="back" >Back</button>
  <button @click="forward" >Forward</button>

  <router-view/>

</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);     
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: #2c3e50;

}

button {
  padding: 8px;
  border: 0;
  margin: 8px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
}


</style>
