<template>
    <div>
        <section id="left-nav">
            <form>
                <input type="text" placeholder="Search by title..." v-model="findHymn" >
            </form>
            <ul >
                <transition-group name="bounce">
                    <li 
                        class="titleLink" 
                        v-for="data in (findHymn.length > 0 ? filteredHymns : hymns)" 
                        :key="data._id"  v-on:click="viewAHymn(data._id)" :id="data._id">
                        {{ data.name}}  
                        <font-awesome-icon icon="trash" class="icon" v-on:click="deleteHymn(data._id)" />
                        <font-awesome-icon icon="edit" class="icon" />
                    </li>
                </transition-group>
            </ul>
        </section>
        <section id="content">
            <app-viewHymn v-bind:hymn="hymn"></app-viewHymn>
        </section>
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
      findHymn: '',
      hymns: [],
      errors: [],
      hymn: null,
    }
  },
    mounted () {
        this.viewAllHymns();
    },

    computed: {
        filteredHymns() {
            let filter = new RegExp(this.findHymn, 'i')
            return this.hymns.filter(hymn => hymn.name.match(filter))
        }
    },

    methods: {
        viewAllHymns () {
            axios
            .get('http://localhost:3002/hymns')
            .then(response => { 
                this.hymns = response.data;
                (this.hymns.length > 0) && this.viewAHymn(response.data[0]._id);
                })
            .catch(error => { this.errors.push(error) })
        },

        viewAHymn (hymnId) {
          axios
            .get(`http://localhost:3002/hymns/${hymnId}`)
            .then(response => { 
                this.hymn = response.data;
                })
            .catch(error => { this.errors.push(error) })
        },

        deleteHymn (hymnId) {
            axios
            .delete(`http://localhost:3002/hymns/${hymnId}`)
            .then(()=> {
                this.viewAllHymns();
             })
            .catch(error => { this.errors.push(error) }) 
        }
    },

    activeHymn (evt, hymnId) {
        let i, x, titleLinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        titleLinks = document.getElementsByClassName("titleLink");
        for (i = 0; i < x.length; i++) {
            titleLinks[i].className = titleLinks[i].className.replace(" w3-red", ""); 
        }
        document.getElementById(hymnId).style.display = "block";
        evt.currentTarget.className += " w3-red";
    }
  }
  
</script>

<style scoped src="../static/Hymns.css">
</style>

