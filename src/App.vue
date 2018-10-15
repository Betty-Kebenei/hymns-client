<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="logo" />
      <nav>
        <router-link to="/">HOME</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import Hymns from './components/Hymns.vue';

export default {
  name: 'app',
  components: {
    'hymns': Hymns,
  }
}
</script>

<style src="./styles/App.css">
</style>
