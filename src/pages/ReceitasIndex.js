import axios from "axios";
import { useEffect, useState } from "react";
import constants from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import './ReceitaStyle.css'


function ReceitasIndex() {
    const [receitas, setReceitas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(constants.baseUrl + "/receitas")
            .then((res) => {
                setReceitas(res.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/receitas/new")}>Nova Receita</button>
            {receitas.map(receita => (
                <div className="card w-75 mb-3 receita-card">
                    <div className="card-body">
                        <h5 className="card-title">{receita.titulo}</h5>
                        <a href={`/receitas/show/${receita.id}`} className="btn btn-primary">Ver mais</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReceitasIndex;