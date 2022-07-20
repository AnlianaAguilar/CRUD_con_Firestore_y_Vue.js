<template>
    <v-app-bar
      app
      color="grey"
      dark
    >
      <div class="d-flex align-center">
        <h1>CRUD</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/newUser"
        text
      >
        <span class="mr-2">Nuevo Usuario</span>
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>