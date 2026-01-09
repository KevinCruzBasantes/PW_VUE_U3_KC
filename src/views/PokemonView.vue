<template>
    <p>{{ mensaje }}</p>
    <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />

    <PokemonOpciones @seleccionado="evaluarGanador($event)"  :listaPokemon="pokemonArr"/>
    <button @click="destruir()">Destruir</button>
</template>

<script>
    import PokemonImagen from "../components/PokemonImagen.vue"
    import PokemonOpciones from "../components/PokemonOpciones.vue"
    import {obtenerVectorPokemonFacade, obtenerAlorioFacade} from "../clients/PokemonClient.js"
    export default {
    components:{
        PokemonImagen,
        PokemonOpciones,

    },
    data(){
        return{
            pokemonArr:[],
            pokemonGanador: null,
            mensaje:null,
            mostrar:true,
        }
    },
    /*  Crear el componente */
    
    beforeCreate(){
        console.log("Before Create Componente apenas se inicia la instancia del componente")
    },
    created(){
        console.log("Created ya se resolvieron data, computed, methos y watch se ejecuta el create")
    },
    /* Montar el componente es decir se renderiza o visualiza el componente */
    beforeMount(){
        console.log("Before Mount se ejecuta antes de renderizar el componente o elemento html")
    },
    mounted(){
        console.log("Mounted se ejecuta cuando el componente ya se rednerizo")
        console.log("Componente Montado")
        this.iniciarJuego();
    },
    /* Actualizar el componente */
    beforeUpdate(){
        console.log("Before Update se ejecuta cuando hay un cambio un data o un props y vue esta por renderizarlo")
    },
    updated(){
        console.log("Updated cuando ya se actualizo tras la re-renderizacion")
    },
    /* Desmontaje del componete */
    beforeUnmount(){
        console.log("Before Unmount se ejecuta antes de que el componente se destruya")
    },
    unmounted(){
        console.log("Unmounted cuando el componete ya fue removido del DOM y destruid")
    },
    methods:{
        async iniciarJuego(){
            this.pokemonArr = await obtenerVectorPokemonFacade();
            const aletorioId = obtenerAlorioFacade(0,3)
            this.pokemonGanador = this.pokemonArr[aletorioId].id;
        },
        evaluarGanador(idGanador){
            
            console.log("Valor recibido desde padre")
            console.log(idGanador)
            if(idGanador == this.pokemonGanador){
                console.log("Ganaste")
                this.mensaje="Ganaste"
            }else{
                console.log("Perdiste")
                this.mensaje="Perdiste"
            }
        },
        destruir(){
            this.mostrar = false;
        }

    }
}
</script>

<style scoped>
 p{
    font-size: 40px;
    text-align: center;
 }
</style>