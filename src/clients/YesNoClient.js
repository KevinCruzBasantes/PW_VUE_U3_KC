import axios from 'axios';

//funcion para consumir la API de yesno.wtf
//async porque es una llamada a una API externa y evita
//que el hilo principal se bloquee mientras espera la respuesta
const consumirAPI = async () => {
    const res = await axios.get("https://yesno.wtf/api").then(respuesta => respuesta.data);
    console.log(res);
    return res;
}

export async function consumirAPIFacade() {
    return await consumirAPI();
}
//axios espera una respuesta pero debe ser asyncrono y todos los 
//