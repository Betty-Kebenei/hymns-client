<template>
 <div>
    <form @submit.prevent="addHymn">
        <input type="text" placeholder="Title of the hymn..." v-model="title" >
        <textarea v-model="stanzas" placeholder="Add the stanzas of the hymn..."></textarea>
        <input type="submit" value="Add Hymn">
    </form>
 </div>
</template>

<script>
export default {
  name: 'HymnForm',
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
