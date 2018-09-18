<template>
    <div>
        <p>Title</p>
        <h1 v-if="hymn">{{ hymn.name }}</h1>
        <p v-if="hymn"> {{ hymn.stanzas}}</p>
    </div>

</template>

<script>

export default {
  name: 'ViewHymn',
  props: ['hymn']
  
}
  
</script>