<template>
    <div>
        <h1>Customers</h1>
        <ul>
            <li v-for="(customer, index) in customers" :key="index">
                <div>{{ customer.name }} {{ customer.lastName }}</div>
                <div><button @click="deleteCustomer(index)">Delete {{ customer.name }}</button></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          name: "Pera",
          lastName: "Peric",
          email: "peric@email.com",
          id: 1,
          listaProizvoda: []
        },
        {
          name: "jova",
          lastName: "jovic",
          email: "jovic@email.com",
          id: 2,
          listaProizvoda: []
        },
        {
          name: "sima",
          lastName: "simic",
          email: "simic@email.com",
          id: 3,
          listaProizvoda: []
        },
        {
          name: "zoran",
          lastName: "zoric",
          email: "zoric@email.com",
          id: 3,
          listaProizvoda: []
        }
      ]
    };
  },
  methods: {
    deleteCustomer(index) {
      let customer = this.customers[index];
      this.customers.splice(index, 1);
      alert(`${customer.name} ${customer.lastName} has been removed.`);
    }
  }
};
</script>

<style>
</style>
