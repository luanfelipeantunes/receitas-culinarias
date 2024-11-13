import axios from "axios";
import { useEffect, useState } from "react"
import constants from "../Utils/Constants";
import { useNavigate, useParams } from "react-router-dom";

function ReceitaShow() {
    const id = useParams().id;
    const [receita, setReceita] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(constants.baseUrl + '/receitas/' + id)
            .then(res => {
                setReceita(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [id])

    const handleDelete = () => {
        axios.delete(constants.baseUrl + '/receitas/' + id)
            .then(() => {
                navigate("/receitas");
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <>
            <div>
            <header>
                <h1>Receitas Culinárias</h1>
                <p>Encontre as melhores receitas para sua cozinha.</p>
            </header>
            <p><small class="small">Navegue por sua receita escolhida</small></p>
            <div class="container container-show">
            <h1>{receita.titulo}</h1>
            <p><small>Ingredientes</small></p>
                <p>{receita.ingredientes}</p>
            <p><small>Modo de preparo</small></p>
                <p>{receita.modo_preparo}</p>
            <p><small>Tempo para ser preparado</small></p>
                <p>{receita.tempo_preparo}min</p>
            <p><small>Rendimento</small></p>
                <p>{receita.rendimento} unidades</p>
                <div>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Exluir</button>
                <button type="button" className="btn btn-edit" onClick={() => navigate(`/receitas/edit/${id}`)}>Editar</button>
                <button type="button" class="btn btn-cancell" onClick={() => navigate('/receitas')}>Cancelar</button>
            </div>
            </div>
           
            </div>
               
        </>
    )
}

export default ReceitaShow;