<template>
    <div class="opciones-container">
        <ul>
            <li v-on:click="pasarPadre(pokemon.id)" 
            v-for="pokemon in listaPokemon" 
            :key="pokemon.id">{{ pokemon.name }}</li>

        </ul>
        <p></p>

    </div>
</template>

<script>
export default {
    props:{
        listaPokemon:{
            type: Array,
            required: true,
        }
    },
    methods:{
        pasarPadre(id){
        console.log(id)
        this.$emit("seleccionado", id);
        }
    }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
    }
    li{
        background-color: white;
        border-radius: 5px ;
        border: solid 1px black;
        cursor: pointer;
        margin-top: 5px;
        width: 200px;
        font-size: 30px;
        text-align: center;
    }
    .opciones-container{
        display: flex;
        justify-content: center;
        
    }
</style>