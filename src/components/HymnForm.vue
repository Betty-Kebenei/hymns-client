<template>
 <div>
    <form @submit.prevent="addHymn">
        <input type="text" placeholder="Title of the hymn..." v-model="name" >
        <textarea v-model="stanzas" placeholder="Add the stanzas of the hymn..."></textarea>
        <input type="submit" value="Add Hymn">
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
  }
}
</script>

<style scoped>

input {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    font-size: 1.3em;
    border-radius: 3px;
}

textarea {
    width: 100%;
    padding: 15px;
    min-height: 500px;
    padding-bottom: 0;
    font-size: 1.3em;
    border-radius: 3px;
}

input[type="submit"] {
    width: 20%;
    float: right;
    margin-top: 20px;
    background-color: #E0EDF4;
    font-weight: bold;
    color: #000;
    border-radius: 3px;
}

</style>
