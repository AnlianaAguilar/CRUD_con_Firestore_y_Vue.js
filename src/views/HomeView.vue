<template>
  <v-container>
    <h1>Usuarios</h1>
    <v-row justify="center">
      <v-col v-for="user in Usuarios" :key="user.id">
        <v-card>
          <v-card-title>Usuario</v-card-title>
          <v-card-text>{{user.Nombre}}</v-card-text>
          <v-card-text>{{user.email}}</v-card-text>
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
