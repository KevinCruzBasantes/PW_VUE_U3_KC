import axios from "axios";

const consumirAPI = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(respuesta => respuesta.data);
    console.log(res);
    return res;
}

export async function consumirAPIFacade(id) {
    return await consumirAPI(id);
}
function obtenerAlorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerAlorio(1, 600);
    }
    return vector;
}
const obtenerVectorPokemon = async (vectorNumerico) => {
    const data1 = await consumirAPI(vectorNumerico[0]);
    const data2 = await consumirAPI(vectorNumerico[1]);
    const data3 = await consumirAPI(vectorNumerico[2]);
    const data4 = await consumirAPI(vectorNumerico[3]);

    const obj1 = {
        id: data1.id,
        name: data1.name,
    }
    const obj2 = {
        id: data2.id,
        name: data2.name,
    }
    const obj3 = {
        id: data3.id,
        name: data3.name,
    }
    const obj4 = {
        id: data4.id,
        name: data4.name,
    }
    return [obj1, obj2, obj3, obj4];

}
export async function obtenerVectorPokemonFacade() {
    const vector = obtenerVectorNumerico();
    return await obtenerVectorPokemon(vector);

}
export function obtenerAlorioFacade(min, max) {
    return obtenerAlorio(min, max);
}