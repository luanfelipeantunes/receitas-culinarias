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
                <h1>{receita.titulo}</h1>
                <p>{receita.ingredientes}</p>
                <p>{receita.modo_preparo}</p>
                <p>{receita.tempo_preparo}</p>
                <p>{receita.rendimento}</p>
            </div>
            <div>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Exluir</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate(`/receitas/edit/${id}`)}>Editar</button>
            </div>
        </>
    )
}

export default ReceitaShow;