<template>
  <div class="landing-page">
    <SearchBar @search="handleSearch" />
    <div v-for="result in results" :key="result.type + result.first_name + result.house_number">
      <SearchResultCard :result="result" />
    </div>
  </div>
</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue'
import SearchResultCard from '../components/SearchResultCard.vue'
import mockData from '../mockData.json'

type SearchResult = {
  type: string
  first_name?: string
  last_name?: string
  house_number?: string
  postcode?: string
  // ... any other fields you expect
}

export default {
  name: 'LandingPage',
  components: {
    SearchBar,
    SearchResultCard
  },
  data() {
    return {
      results: [] as SearchResult[]
    }
  },
  methods: {
    handleSearch(query: string) {
      // Here, we're simulating a simple search by filtering the mock data.
      // A real API call would be made here in a real-world scenario.
      this.results = mockData.results.filter((r) => {
        return (
          r.type.includes(query) ||
          (r.first_name && (r.first_name + ' ' + r.last_name).includes(query))
          // You can add similar conditions for 'address' and 'organization' here.
        )
      })
    }
  }
}
</script>

<style scoped>
.landing-page {
  /* Add your styles here for the landing page. */
  display: flex;
}
</style>
