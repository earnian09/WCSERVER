<template>
  <!-- Name: Laxamana Earn Christian
       Section: WD-201 -->
  <div id="app">
    <img src="./assets/myPhoto.jpg" id="myPhoto">
    <h1 id="name">{{ name }}</h1>
    <h2>Web Developer</h2>
    <hr>
    <div id="body">
      <profile></profile>
      <skills></skills>
      <education></education>
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile'
import Skills from './components/Skills'
import Education from './components/education'


export default {
  components: { 
    Profile, 
    Education, 
    Skills 
  },
  name: 'app',
  data () {
    return {
      name: 'Earn Christian Laxamana'
    }
  }
}
</script>

<style>
* {
  background-color: aliceblue;
}

hr {
  width: 915px;
}
#name {
  background-color: #19242e;
  color: aliceblue;
}
#myPhoto {
  background-color: #42b983;
  padding-top: 15px;
  width: 450px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 4px 2px rgba(0,0,0,0.12), 
              0 8px 4px rgba(0,0,0,0.12), 
              0 12px 8px rgba(0,0,0,0.12),
              0 18px 16px rgba(0,0,0,0.12);
}
#body {
  background-color: #19242e;
}
#app {
  margin: auto;
  width: 1100px;
  background-color: #19242e;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1%;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 4px 2px rgba(0,0,0,0.12), 
              0 8px 4px rgba(0,0,0,0.12), 
              0 12px 8px rgba(0,0,0,0.12),
              0 18px 16px rgba(0,0,0,0.12);
}


#name {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 50px;
  background-color: #19242e;
  color: white;
  font-weight: normal;
}

h2 {
  font-family: 'Arial';
  font-size: 25px;
  background-color: #19242e;
  color: #42b983 ;
  font-weight: 700;
  margin-top: -15px;
}


</style>
