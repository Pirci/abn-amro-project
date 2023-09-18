<template>
  <div class="result-card">
    <h3>{{ result.type }}</h3>
    <p v-if="result.type === 'people'">{{ result.first_name }} {{ result.last_name }}</p>
    <p v-if="result.type === 'address'">{{ result.house_number }}, {{ result.postcode }}</p>
    <p v-if="result.type === 'organization'">{{ result.name }}</p>
    <!-- Add more conditions based on other result types if needed -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchResultCard',
  props: {
    result: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.result-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px 0;
}
</style>
