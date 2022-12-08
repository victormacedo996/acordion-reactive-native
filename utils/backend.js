import axios from "axios";

base_url = "http://academico3.rj.senac.br:8080/api"

function getDescricaoUc(cpf){
    const raw_data = axios.get(`${base_url}/UnidadeCurricular/filterByUsuarioCpf/${cpf}`);
    
}