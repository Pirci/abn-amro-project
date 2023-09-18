<template>
    <div class="search-bar">
        <input v-model="searchQuery" placeholder="Search..." />
        <button @click="handleSearch">Search</button>
    </div>
</template>

<script  lang="ts">
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        handleSearch() {
            this.$emit('search', this.searchQuery);
        }
    }
}
</script>

<style scoped>
.search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
