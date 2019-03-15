<template>
    <div>
        <h1>Customers</h1>
        
        <ul>
            <li v-for="(customer, index) in customers" :key="index">
                <div>
                    {{ customer.name }} {{ customer.lastName }} 
                    <router-link :to="`/customers/${customer.id}`">Latest Purchases</router-link>
                </div>
                <div><button @click="deleteCustomer(index)">Delete {{ customer.name }}</button></div>
            </li>
        </ul>

        <form @submit.prevent="addCustomer">
            <input type="text" v-model="customer.name" placeholder="name"/>
            <input type="text" v-model="customer.lastName" placeholder="last name"/>
            <input type="email" v-model="customer.email" placeholder="email"/>

            <button type="submit">Add customer</button>
        </form>

    </div>
</template>

<script>
export default {
  data() {
    return {
      customer: [
        {
          name: "",
          lastName: "",
          email: "",
          listaProizvoda: ["knjiga", "olovka", "sveska"]
        }
      ]
    };
  },
  methods: {
    deleteCustomer(index) {
      let customer = this.customers[index];
      this.customers.splice(index, 1);
      alert(`${customer.name} ${customer.lastName} has been removed.`);
    },
    addCustomer() {
      this.customers.push({ ...this.customer });
    }
  },
  props: ["customers"]
};
</script>

<style>
</style>
