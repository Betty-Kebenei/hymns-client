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

<style scoped src="../styles/ViewHymn.css">
</style>
