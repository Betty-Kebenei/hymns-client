<template>
 <div>
    <form @submit.prevent="addHymn">
        <input type="text" placeholder="Title of the hymn..." v-model="name" >
        <textarea v-model="stanzas" placeholder="Add the stanzas of the hymn..."></textarea>
        <input type="submit" value="Add Hymn">
        <input type="button" value="Cancel" @click="cancel">
    </form>
 </div>
</template>

<script>

import axios from "axios";


export default {
  name: 'HymnForm',
  data(){
      return {
          name: '',
          stanzas: '',
          errors: []
      }
  },
  methods: {
    addHymn() {
        axios
        .post('http://localhost:3002/hymns/create', { 
            name: this.name, stanzas: this.stanzas })
        .then(() => {
            this.$router.push({name: 'hymns'})
        })
        .catch(error => { this.errors.push(error) })
    }
  },

  cancel() {
      this.$router.push({name: 'hymns'});
  }
}
</script>

<style scoped src="../static/HymnForm.css">
</style>
