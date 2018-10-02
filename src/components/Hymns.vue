<template>
    <div>
        <form>
            <input type="text" placeholder="Search by title..." v-model="findHymn" >
        </form>

        <section id="left-nav">
            <ul >
                <li 
                    class="titleLink" 
                    v-for="data in (findHymn.length > 0 ? filteredHymns : hymns)" 
                    :key="data._id"  v-on:click="viewAHymn(data._id)" :id="data._id">
                    {{ data.name}}  
                    <font-awesome-icon icon="trash" class="icon" v-on:click="deleteHymn(data._id)" />
                    <font-awesome-icon icon="edit" class="icon" />
                </li>
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

<style scoped>
input {
    width: 90%;
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

  margin-bottom: 2px;
  color: #3E5252;
}

#left-nav {
    width: 20%;
    float: left;
    min-height: 100vw;
    border-right: 1px solid #fff;
}

#content {
    width: 70%;
    float: right;
    min-height: 100vw;
}
.icon {
    float: right;
    margin: 5px;
}

</style>

