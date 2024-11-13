import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import constants from "../Utils/Constants";

function ReceitaEdit() {
    const id = useParams().id;
    const [receita, setReceita] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(constants.baseUrl + '/receitas/' + id)
        .then((res) => {
            setReceita(res.data);
        })
        .catch((error) => {
            console.error(error);            
        })
    }, [id])

    const handleChange = (e) => {
        setReceita({ ...receita, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.put(constants.baseUrl + '/receitas/' + id, receita)
            .then(() => {
                navigate("/receitas/show/" + id);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <div>
            <header>
                <h1>Receitas Culinárias</h1>
                <p>Encontre as melhores receitas para sua cozinha.</p>
            </header>
            <p><small class="small">Edite sua receita escolhida</small></p>
            <div class="container">
            <div class="block">
                    <label>Titulo: </label>
                    <input name="titulo" type="text" placeholder="Digite o título da receita" onChange={handleChange} value={receita.titulo}/>
                </div>
                <div class="block">
                    <label>ingredientes: </label>
                    <input name="ingredientes" type="text" placeholder="Digite os ingredientes" onChange={handleChange} value={receita.ingredientes}/>
                </div>
                <div class="block">
                    <label>Modo de preparo: </label>
                    <input name="modo_preparo" type="text" placeholder="Descreva o modo de preparo" onChange={handleChange} value={receita.modo_preparo}/>
                </div>
                <div class="block">
                    <label>Tempo de preparo: </label>
                    <input name="tempo_preparo" type="text" placeholder="Informe o tempo de preparo em MINUTOS" onChange={handleChange} value={receita.tempo_preparo}/>
                </div>
                <div class="block">
                    <label>Rendimento </label>
                    <input name="rendimento" type="text" placeholder="Rendimento (unidades)" onChange={handleChange} value={receita.rendimento}/>
                </div>

                <button type="button" className="btn btn-salvar" onClick={handleSubmit}>Salvar</button>
                <button type="button" class="btn btn-cancell" onClick={() => navigate('/receitas')}>Cancelar</button>

            </div>
                
            </div>
        </>
    )
}

export default ReceitaEdit;