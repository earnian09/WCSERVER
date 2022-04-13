<template>
  <div class="gallery">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Gallery'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}

</style>