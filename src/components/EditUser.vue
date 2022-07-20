<template>
  <v-container>
    <h1 class="text-center">Editar usuario</h1>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.Nombre"
              :rules="nameRules"
              label="Nombre y Apellido"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn @click="EditUser">Editar</v-btn>
            <v-btn @click="deleteUser">Eliminar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { db } from "@/firebase/firebase.js";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
export default {
  name: "EditUser-component",
  props: ["id"],
  data: function () {
    return {
      valid: true,
      form: {
        Nombre: "",
        email: "",
      },

      nameRules: [(v) => !!v || "Debe ingresar su Nombre"],

      emailRules: [
        (v) => !!v || "Debe ingresar su Correo Electrónico.",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  // computed: {},
  methods: {
    async fetchUserById() {
      console.log(this.id);
      let response = await getDoc(doc(db, "Usuarios", this.id));
      console.log(response);
      this.form = response.data(); //se muestran las dato del usuario
    },

    async EditUser() {
      this.$refs.form.validate(); //validate cambia el estado de v-model="valid"
      if (!this.valid) return;

      try {
        let user = this.form;
        user.id = this.id;
        await updateDoc(doc(db, "Usuarios", user.id), user);
        this.$router.push("/");

      } catch (error) {
        console.log(error);
      }
    },

    deleteUser(){
        try {
            deleteDoc(doc(db, 'Usuarios', this.id))
            this.$router.push("/");
        } catch (error) {
            console.log(error)
        }
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.fetchUserById();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>