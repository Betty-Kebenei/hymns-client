<template>
    <div>
        <form @submit.prevent="searchHymn">
            <input type="text" placeholder="Search by title..." v-model="title" >
        </form>
        
        <ul >
            <li v-for="(data, index) in hymns" :key="index"  v-on:click="viewHymn(data._id)">
                {{ data.name}}
            </li>
        </ul>

        <app-viewHymn v-bind:hymn="hymn"></app-viewHymn>

    </div>
</template>

<script>

import axios from "axios";
import ViewHymn from "./ViewHymn.vue";

export default {
  name: 'Hymns',
  components: {
      'app-viewHymn': ViewHymn
  },
  data(){
    return {
      hymns: [],
      errors: [],
      hymnName: '',
      hymnStanzas: '',
      hymn: {}
    }
  },
    mounted () {
        axios
        .get('http://localhost:3002/hymns')
        .then(response => { this.hymns = response.data })
        .catch(error => { this.errors.push(error) })
    },
    methods: {
      viewHymn (hymnId) {
          axios
            .get(`http://localhost:3002/hymns/${hymnId}`)
            .then(response => { 
                this.hymn = response.data;
                this.$router.push({name: 'viewHymn'});
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

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

</style>

