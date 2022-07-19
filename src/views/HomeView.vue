<template>
  <div>
    {{Usuarios}}
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
  export default {
    name: 'Home-view',

    components: {

    },
    computed:{
      ...mapState(['Usuarios'])
    },
    methods: {
      ...mapActions(['fetchUsers'])
    },
    created(){
      this.fetchUsers()
    }
  }
</script>
