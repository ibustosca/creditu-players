<template>
  <div>
    <section class="buscar">
      <input
        class="buscar--input"
        v-model="searchPlayers"
        type="text"
        placeholder=" Buscar jugadores"
        v-on:keyup.enter="buscarPlayers"
      />
      <button class="buscar--button" v-on:click="buscarPlayers">Buscar</button>
      <p class="validation">{{ validation }}</p>
    </section>
    <section>
      <div class="div--tabla">
        <table v-for="result in results" v-bind:key="result.id">
          <tr>
            <th class="tabla--tr-th" colspan="2">{{ result.nickname }}</th>
          </tr>
          <tr>
            <td colspan="2">
              <img :src="'https://' + result.avatar" alt="Player image" />
            </td>
          </tr>
          <tr>
            <th>Id</th>
            <td class="table--tr-td">: {{ result.id }}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>: {{ result.status }}</td>
          </tr>
          <tr>
            <th>Balance</th>
            <td>: {{ result.balance }}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    results: [],
    searchPlayers: "",
    validation: "",
  }),
  mounted() {
    //Simula los jugadores destacados de la semana
    this.callAxios("xip");
  },
  methods: {
    async callAxios(str) {
      try {
        if (this.searchPlayers.length > 0) {
          str = this.searchPlayers;
        }
        const urlCreditu =
          "https://creditu-api.herokuapp.com/player/search/" + str;
        let response = await axios.get(urlCreditu);
        this.results = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    buscarPlayers() {
      if (this.searchPlayers.length > 0) {
        this.validation = "";
        this.callAxios();
      } else {
        this.validation = "El cuadro de búsqueda no puede ser vacío";
      }
    },
  },
};
</script>

<style>
.buscar {
  margin-top: 25px;
  padding-bottom: 20px;
}

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  background-color: #65c9ff;
}

.buscar--input {
  align-items: center;
  height: 40px;
  width: 190px;
  border-radius: 15px 0px 0px 15px;
  border: none;
  font-family: "Patua One", cursive;
  font-size: 1.8rem;
  color: #4a148c;
  padding-left: 20px;
}

.buscar--button {
  align-items: center;
  height: 40px;
  width: 83px;
  border-radius: 0px 15px 15px 0px;
  border: none;
  background-color: #4a148c;
  color: white;
  font-family: "Patua One", cursive;
  font-size: 1.8rem;
}

.validation {
  text-align: center;
  color: #8828ff;
}

img {
  padding: 30px 0px 20px 0px;
}

.div--tabla {
  width: 100%;
  height: 100%;
}

table {
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 20px;
  background-color: #4a148c;
  border-radius: 15px;
  box-shadow: 3px 3px 8px black;
  transition: 0.3s;
}

table:hover {
  transform: scale(1.05);
}

th {
  text-align: left;
  font-size: 1.8rem;
  color: #ffffff;
  padding-left: 13px;
  line-height: 2.2rem;
  background-color: #4a148c;
}

td {
  font-size: 1.8rem;
  color: #ffffff;
  padding-left: 3px;
  line-height: 2.2rem;
  background-color: #4a148c;
}

.tabla--tr-th {
  text-align: center;
  font-size: 3rem;
}

.table--tr-td {
  font-weight: bold;
}
</style>