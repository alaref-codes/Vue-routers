<template>
  <h1>Web developer jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs" >
      <router-link :to="{ name: 'JobDetail'  , params: {id :job.id }  }" >
        <h2>{{job.name}}</h2>
      </router-link>   
  </div>
</template>

<script>
export default {
    name: 'Jobs',
    data() {
        return {
            jobs: [
                {name: 'Developer', id: 1, salary: 4000},
                {name: 'Designer', id: 2, salary: 3000},
                {name: 'Security', id: 3, salary: 40000}
            ]
        }
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