<template>
    <div>
        <h1 v-if="hymn">{{ hymn.name }}</h1>
        <pre v-if="hymn">{{ hymn.stanzas}}</pre>
    </div>

</template>

<script>

export default {
  name: 'ViewHymn',
  props: ['hymn']
  
}

</script>

<style scoped>
h1 {
    font-size: 3rem;
    margin-top: 0;
}

pre {
    font-size: 1.5rem;
}
</style>
