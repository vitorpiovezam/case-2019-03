<template>
  <div v-bind:class="{  }" class="container --light-theme">
    <header>
      <span> Vitta Test </span>
      <span> Maded with 💞 by <a href="http://github.com/vitorpiovezam" target="_blank" rel="noreferrer">Vitor Piovezam</a> </span>
    </header>
    <h1>Atendimentos e prescriçōes</h1>
    <p class="summary">
      <strong>Olá Vitor :)</strong>
      <span v-if="totalMedicines > 0"><br> Já são {{ totalMedicines }} medicamentos e 789 interaçōes médicas régistradas na base 🎉 </span>
    </p>
    <main>
      <div>
        <h2>Medicamentos</h2>
      <p>
        <Medicines></Medicines>
      </p>
      </div>

      <div>
        <h2>Receitas</h2>
        <div>
          Soon
        </div>
      </div>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios';

  const theme = window.sessionStorage.getItem('darkTheme');
  const darkTheme: boolean =  Boolean(theme) || false;

  export default Vue.extend({
    data () {
      return {
        totalMedicines: 0,
        darkTheme: false
      }
    },
    mounted () {
      if (!process.env.API_URL) return;

      axios
        .get(`${process.env.API_URL}/medicine?limit=50&page=1`)
        .then(response => (this.totalMedicines = response.data.meta.totalItems))
      }
  })
</script>

<style lang="scss">
  body {
    margin: 0;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  header {
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    padding: 0 10px;
    border: 1px solid;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;

    &.--light-theme {
      background: whitesmoke;
      color: black;
    }

    &.--dark-theme {
      background: #292929;
      color: white;

      a {
        color: aquamarine;
      }
    }

    .summary {
      margin-top: 0;

      strong {
        font-size: 1.1em;
      }
    }
  }

  main {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50px;

    p {
      line-break: anywhere;
    }
  }
</style>
