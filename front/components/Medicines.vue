<template>
  <div>
    <ul v-for="medicine in medicines" v-bind:key="medicine.Nome">
      <li> {{ medicine.Nome }} </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios';

  export default Vue.extend({
    data: {
      medicines: [],
      page: 1,
      limit: 10,
      totalItems: 0
    },
    methods: {
      setPages () {
        let pages = Math.ceil(this.totalItems / this.limit);
      },

      getMedicineList () {
        if (!process.env.API_URL) return;

        axios.get(`${process.env.API_URL}/medicine?limit=${this.limit || 10}&page=${this.page || 1}`)
          .then(response => {
            this.medicines = response.data.items;
          })
      }
    },
    mounted() {
      this.getMedicineList();
    }
  })
</script>

<style lang="scss">
  ul {
    margin: 0;
    padding: 0;
  }
</style>
