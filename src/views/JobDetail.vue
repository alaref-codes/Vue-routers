<template>
  <h2>Job Detail</h2>
  <div v-if="job" >
    <h3>this job is {{ id }} </h3>
    <h3>this job title is {{ job.title }} </h3>
    <h3>this job is {{ job.detail }} </h3>
  </div>
</template>

<script>
export default {
    name: 'JobDetail',
    props: ['id'],
    data() {
      return {
        job: {},
      }
    },
    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id )
        .then(res => res.json())
        .then(data => this.job = data )
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>