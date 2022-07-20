<template>
  <v-container justify="center">
    <h1 class="align-center">Usuarios</h1>
    <v-row justify="center">
      <v-col v-for="user in Usuarios" :key="user.id" cols="12" md="6">
        <v-card >
          <!-- <v-card-title>Usuario</v-card-title> -->
          <v-card-text>{{user.Nombre}}</v-card-text>
          <v-card-text>{{user.email}}</v-card-text>
          <v-btn block @click="$router.push(`/newUser/${user.id}`)">Editar</v-btn> <!--se crea ruta dinamica-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home-view",

  components: {},
  computed: {
    ...mapState(["Usuarios"]),
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>
