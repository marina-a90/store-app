<template>
    <div>
        <!-- <h1>{{ customerArray[0].name }}'s Purchases</h1>
        
        <div>Name: {{ customerArray[0].name }} {{ customerArray[0].lastName }}</div>
        <div>Email: {{ customerArray[0].email }}</div>

        <table v-if="customerArray[0].orders.length">
            <tr>
                <th>Orders</th>
            </tr>
            <tr v-for="(order, index) in customerArray[0].orders" :key="index">
                <td>{{ order }}</td>
            </tr>
        </table> 
        <div v-else>{{ customerArray[0].name }} doesn't have any orders.</div> -->



        <h1>{{ getCustomer.name }}'s Purchases</h1>
        
        <div>Name: {{ getCustomer.name }} {{ getCustomer.lastName }}</div>
        <div>Email: {{ getCustomer.email }}</div>

        <table v-if="getCustomer.orders.length">
            <tr>
                <th>Orders</th>
            </tr>
            <tr v-for="(order, index) in getCustomer.orders" :key="index">
                <td>{{ order }}</td>
            </tr>
        </table> 
        <div v-else>{{ getCustomer.name }} doesn't have any orders.</div>
        
        <router-link to="/customers">List of customers</router-link>
    </div>
</template>

<script>
export default {
    props: ["customers"],
    data() {
        return {
            customerArray: this.customers.filter(cust => cust.id == this.$route.params.id),
        }
    }, 
    computed: {
        getCustomer () {
            let customerArray = this.customers.filter(c => c.id == this.$route.params.id);
            let customer = this.customerArray[0];
            return customer;
        }
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
