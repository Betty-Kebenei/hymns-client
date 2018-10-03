<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="logo" />
      <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/hymn-form">ADD HYMN</router-link>
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

<style src="./styles/App.css">
</style>
