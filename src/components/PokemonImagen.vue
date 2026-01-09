<template>
  <div class="pokemon-container">
    <img :src="srcImagen" alt="No se puede renderizar" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.pokemonId}.png`;
    },
  },
  /* Desmontaje del componete */
    beforeUnmount(){
        console.log("Before Unmount se ejecuta antes de que el componente se destruya")
    },
    unmounted(){
        console.log("Unmounted cuando el componete ya fue removido del DOM y destruid")
    },
};
</script>

<style scoped>
img {
  position: relative;
  height: 200px;
  left: 44%;
}
.pokemon-container {
  height: 200px;
}
</style>