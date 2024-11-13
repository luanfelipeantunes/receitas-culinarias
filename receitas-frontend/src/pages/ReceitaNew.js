import axios from "axios";
import { useState } from "react"
import constants from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

function ReceitaNew(){
    const [receita, setReceita] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setReceita({...receita, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        axios.post(constants.baseUrl + '/receitas', receita)
            .then(() => {
                navigate("/");
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    return(
        <>
            <div>
                <div>
                    <label>Titulo: </label>
                    <input name="titulo" type="text" placeholder="Digite o título da receita" onChange={handleChange}/>
                </div>
                <div>
                    <label>ingredientes: </label>
                    <input name="ingredientes" type="text" placeholder="Digite os ingredientes" onChange={handleChange}/>
                </div>
                <div>
                    <label>Modo de preparo: </label>
                    <input name="modo_preparo" type="text" placeholder="Descreva o modo de preparo" onChange={handleChange}/>
                </div>
                <div>
                    <label>Tempo de preparo: </label>
                    <input name="tempo_preparo" type="text" placeholder="Informe o tempo de preparo em MINUTOS" onChange={handleChange}/>
                </div>
                <div>
                    <label>Rendimento </label>
                    <input name="rendimento" type="text" placeholder="Rendimento (unidades)" onChange={handleChange}/>
                </div>

                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
                <button type="button" class="btn btn-secondary" onClick={() => navigate('/receitas')}>Cancelar</button>
            </div>
        </>
    )
}

export default ReceitaNew;