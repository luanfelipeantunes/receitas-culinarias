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
        
        <div class="container-main">
            <div>
            <header>
                <h1>Receitas Culinárias</h1>
                <p>Encontre as melhores receitas para sua cozinha.</p>
            </header>
            <p><small class="small">Mostre-nos novos sabores.</small></p>
            <button type="button" class="btn btn-primary btn-lg new-recipe" onClick={() => navigate("/receitas/new")}>Nova Receita</button>
            <p><small class="small">Navegue por nossas receitas.</small></p>
            {receitas.map(receita => (
                <div className="card w-75 mb-3 receita-card">
                    <div className="card-body">
                        <h5 className="card-title">{receita.titulo}</h5>
                        <a href={`/receitas/show/${receita.id}`} className="btn btn-primary ver-mais">Conhecer essa receita</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ReceitasIndex;