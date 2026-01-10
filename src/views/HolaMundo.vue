<template>
  <h2>Hola Mundo</h2>
  <h1>Consultando los datos del estudiante</h1>
  <h3>{{ idEstudiante }}</h3>
  <button v-on:click="activarBoton()">Actualizar</button>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);
    
  },
  data() {
    return {
      idEstudiante:null,
    };
  },
  methods: { 
    activarBoton() {
      return this.idEstudiante=this.$route.params.id;
    }, 
  },
}
</script>

<style>

</style>