<template>
  <h1>Web developer jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs" >
      <router-link :to="{ name: 'JobDetail'  , params: {id :job.id }  }" >
        <h2>{{job.title}}</h2>
      </router-link>   
  </div>
</template>

<script>
export default {
    name: 'Jobs',
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs")
        .then(res => res.json())
        .then(data => this.jobs = data )
        .catch(err => console.log(err.message))
    }

}
</script>

<style>
.jobs h2 {
    background-color: antiquewhite;
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    border-radius: 10px;
    color: black;
}

.jobs h2:hover {
    background-color:bisque;
}

.jobs a {
    text-decoration: none;
}

</style>