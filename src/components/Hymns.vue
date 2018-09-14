<template>
    <div>
        <form @submit.prevent="searchHymn">
            <input type="text" placeholder="Search by title..." v-model="title" >
        </form>
        
        <ul>
            <li v-for="(data, index) in hymns" :key="index">{{ data.name }}</li>
        </ul>

    </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Hymns',
  data(){
    return {
      hymns: [],
      errors: []
    }
  },
    mounted () {
      axios
      .get('http://localhost:3002/hymns')
      .then(response => { this.hymns = response.data })
      .catch(error => { this.errors.push(error) })
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

