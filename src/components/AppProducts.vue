<template>
    <div>
        <h1>Products</h1>

        <form class="md-form mt-0">
            <input type="text" placeholder="Search" v-model="searchInput">
            <!-- <button @click.prevent="searchFilter(searchInput)">Search</button> -->
            <button @click.prevent="resetSearch()">Reset search</button>
        </form>

        <div v-if="searchInput">Searching for: {{ searchInput }}</div>
        <div v-if="searchFilter(searchInput)">Search result found: {{ searchFilter(searchInput).name }}, in stock: {{ searchFilter(searchInput).inStock }}</div>

        <table v-else>
            <tr>
                <th>Products</th>
                <th>In stock</th>
                <th>Decrease</th>
                <th>Increase</th>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
                <td>
                    {{ product.name }}
                </td>
                <td :stock = "product.inStock">
                    {{ product.inStock }}
                </td>
                <td>
                    <button v-if="product.inStock > 0" @click.prevent="decreaseProduct(index)">-</button>
                </td>
                <td>
                    <button @click.prevent="increaseProduct(index)">+</button>
                </td>
            </tr>
        </table> 

    </div>
</template>

<script>
export default {
    data () {
        return {
            // products: ["book", "notebook", "pen", "pencil", "sharpener"], 
            products: [
                {name: "book", inStock: 5},
                {name: "notebook", inStock: 3},
                {name: "pen", inStock: 0},
                {name: "pencil", inStock: 10},
                {name: "sharpenes", inStock: 7}
            ],
            searchInput: "",
            searchResult: ""
        }
    }, 
    methods: {
        searchFilter(searchInput) {
            let searchResult = this.products.filter(p => p.name == this.searchInput);
                return searchResult[0]
        }, 
        resetSearch() {
            this.searchInput = ""
        },
        increaseProduct(index) {
            let product = this.products[index];
            ++product.inStock;
        },
        decreaseProduct(index) {
            let product = this.products[index];
            --product.inStock;
        }
    },
    watch: {

    }
};
</script>

<style scoped>
    table,
    th,
    td {
    border: 1px solid black;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    }
</style>