<template>
  <h2>Job Detail</h2>
  <h3>this job is {{ id }} </h3>
</template>

<script>
export default {
    name: 'JobDetail',
    data() {
        return {
            id: this.$route.params.id,
        }
    }
}
</script>

<style>

</style>