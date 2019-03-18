<template>
    <div>
        <h1>Products</h1>

        <form class="md-form mt-0">
            <input type="text" placeholder="Search" v-model="searchInput">
            <!-- <button @click.prevent="searchFilter(searchInput)">Search</button> -->
            <button @click.prevent="resetSearch()">Reset search</button>
        </form>

        <div v-if="searchInput">Searching for: {{ searchInput }}</div>
        <div v-if="searchFilter(searchInput)">Search result found: {{ searchFilter(searchInput) }}</div>

        <ul v-else v-for="(product, index) in products" :key="index">
            <li>
                {{ product }}
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data () {
        return {
            products: ["book", "notebook", "pen", "pencil", "sharpener"], 
            searchInput: "",
            searchResult: ""
        }
    }, 
    methods: {
        searchFilter(searchInput) {
            let searchResult = this.products.filter(p => p == this.searchInput);
            return searchResult[0]
        }, 
        resetSearch() {
            this.searchInput = ""
        }
    }
};
</script>

<style>
</style>
