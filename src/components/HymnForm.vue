<template>
 <div>
    <form @submit.prevent="addHymn">
        <input type="text" placeholder="Title of the hymn..." v-model="name" >
        <textarea v-model="stanzas" placeholder="Add the stanzas of the hymn..."></textarea>
        <input type="submit" v-bind:value= "editting ? 'Edit Hymn' : 'Add Hymn'">
        <input type="button" value="Cancel" @click="back">
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
          errors: [],
          editting: false
      }
  },

  props: {
      hymn: Object
  },

  watch: {
      hymn() {
        this.name = this.hymn.name;
        this.stanzas = this.hymn.stanzas;
        this.editting = Object.keys(this.hymn).length > 0 ? true : false;
      }
  },

  methods: {
    addHymn() {
        axios
        .post('http://localhost:3002/hymns/create', { 
            name: this.name, stanzas: this.stanzas })
        .then((response) => {
            if(response.data) {
                this.$router.push({name: 'hymns'})
            } else if (response.errors) {
                console.log(response.errors)
            } else {
                console.log('hey')
            } 
        })
        .catch(error => { this.errors.push(error) })
    },

    back() {
      this.$router.push({name: 'hymns'});
    }
  }
}
</script>

<style scoped src="../styles/HymnForm.css">
</style>
