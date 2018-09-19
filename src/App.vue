<template>
  <div id="app">
    <nav>
      <router-link to="/">Hymns</router-link>
      <router-link to="/add-hymn">Add Hymn</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Hymns from './components/Hymns.vue';
import HymnForm from './components/HymnForm.vue';

export default {
  name: 'app',
  components: {
    Hymns,
    HymnForm
  }
}
</script>

<style>
 
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
  width: 80%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
