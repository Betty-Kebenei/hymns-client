<template>
    <div>
        <p>Below is a list of your hymns.</p>
        <ul>
            <li v-for="(data, index) in hymns" :key="index">{{ data.hymn }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Hymns',
  data(){
    return {
      hymns: [
        {"hymn": "At the cross"},
        {"hymn": "Count your blessings"}
      ],
    }
  }
}
</script>

<style scoped>
    
</style>

