<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="logo" />
      <nav>
        <router-link to="/">Hymns</router-link>
        <router-link to="/hymn-form">Add Hymn</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import Hymns from './components/Hymns.vue';
import HymnForm from './components/HymnForm.vue';

export default {
  name: 'app',
  components: {
    'hymns': Hymns,
    'hymn-form': HymnForm
  }
}
</script>

<style>
#app {
  width: 100%;
  left: -10%;
}

header {
  background-color: #fff;
  box-shadow: 1px 0 1px rgba(0,0,0,0.25);
  width: 100%;
  position: fixed;
  top: 0;
  max-height: 80px;
  margin-bottom: 5px;
}

header img {
  height: 80px;
  width: 150px;
  padding: 0 20px;
}

header img, nav {
  display: inline;
}

nav {
  padding: 30px 20px 20px 0;
  position: absolute;
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

body {
  padding-top: 20px;
  margin-top: 3.5%;
  background:  url("./assets/music.png") repeat-y 80% top fixed;
}
</style>
