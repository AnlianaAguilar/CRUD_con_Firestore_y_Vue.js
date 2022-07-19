<template>
    <EditUser :id='id'></EditUser>
</template>

<script>
import EditUser from '@/components/EditUser.vue'
export default {
    name: 'editUserView',
    props: ['id'],
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        EditUser
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>