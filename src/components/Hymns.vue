<template>
    <div>
        <section id="left-nav">
            <button @click="openHymnForm">ADD HYMN</button>
            <form>
                <input type="text" placeholder="Search hymn by title..." v-model="findHymn" >
            </form>
            <ul >
                <transition-group name="bounce">
                    <li 
                        class="titleLink" 
                        v-for="data in (findHymn.length > 0 ? filteredHymns : hymns)" 
                        :key="data._id"  v-on:click="viewAHymn(data._id)" :id="data._id">
                        {{ data.name}}  
                        <font-awesome-icon icon="trash" class="icon" v-on:click="deleteHymn(data._id)" />
                        <font-awesome-icon icon="edit" class="icon" @click="updateHymn(data._id)" />
                    </li>
                </transition-group>
            </ul>
        </section>
        <section id="content">
            <div v-show="!hymnForm">
                <view-hymn v-bind:hymn="hymn" />
            </div>
            <div v-show="hymnForm">
                <hymn-form :hymn="hymn" />
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import ViewHymn from "./ViewHymn.vue";
import HymnForm from "./HymnForm.vue";

export default {
  name: 'Hymns',
  components: {
      'view-hymn': ViewHymn,
      'hymn-form': HymnForm
  },
  data(){
    return {
      findHymn: '',
      hymns: [],
      errors: [],
      hymn: null,
      hymnForm: false,
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
        openHymnForm() {
            this.hymnForm = true;
            this.hymn= {};
        },

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
        },

        updateHymn (hymnId) {
            this.viewAHymn(hymnId);
            this.hymnForm = true;
        }
    },
}
</script>

<style scoped src="../styles/Hymns.css">
</style>

