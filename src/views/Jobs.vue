<template>
  <h1>Web developer jobs</h1>
  <div v-for="job in jobs" :key="job.id" >
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
                {name: 'Web developer', id: 1, salary: 4000},
                {name: 'Web Designer', id: 2, salary: 3000},
                {name: 'Web securty', id: 3, salary: 40000}
            ]
        }
    }

}
</script>

<style>

</style>