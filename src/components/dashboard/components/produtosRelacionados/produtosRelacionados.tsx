import "./produtosRelacionados.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import CardProduto from "../cardProduto/cardProduto";

interface Produto{
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

interface CategoriaDeProduto{
    nome: string,
    linkAPI?: string;
}

interface ProdutosRelacionadosProps {
    categorias: CategoriaDeProduto[];
}

function ProdutosRelacionados({categorias}:ProdutosRelacionadosProps){
    const [listaDeProdutoAtiva,setListaDeProdutoAtiva] = useState<Produto[]>([])
    const [categoriaSelecionada,setCategoriaSelecionada] = useState(0)
    const [listaDeProdutoCarregou,setlistaDeProdutoCarregou] = useState(false)

    const fetchProdutos = async (linkAPI:string) => {
        setlistaDeProdutoCarregou(true);
        try {
            const response = await axios.get(linkAPI)
            setListaDeProdutoAtiva(response.data.products || [])
        } catch(error){
            console.error("Erro ao buscar dados da API", error);
            setListaDeProdutoAtiva([])
        } finally {
            setlistaDeProdutoCarregou(false);
        }
    }

    useEffect(()=>{
        if (categorias.length > 0) {
            const primeiroLinkDeAPI = categorias.find(categoria => categoria.linkAPI !== undefined && categoria.linkAPI !== '');
            if (primeiroLinkDeAPI && primeiroLinkDeAPI.linkAPI){
                fetchProdutos(primeiroLinkDeAPI.linkAPI);
            }
        }
    },[categorias])

    return (
        <div className="produtos-relacionados">
            <div className="lista-de-produto-botao" onClick={()=>{
                const listaDeProdutos = document.querySelector(".lista-de-produtos");
                listaDeProdutos?.scrollBy({top:0,left:-350,behavior:"smooth"})
            }}>
                <p>&lt;</p>
            </div>            
            <div className="lista-de-produto-botao" onClick={()=>{
                const listaDeProdutos = document.querySelector(".lista-de-produtos");
                listaDeProdutos?.scrollBy({top:0,left:350,behavior:"smooth"})
            }}>
                <p>&gt;</p>
            </div>

            <ul className="produtos-relacionados-menu">
                {categorias.map((categoriaDeProduto,index) => (
                <li key={index} className={index === categoriaSelecionada ? "ativa aba" : "aba"} onClick={()=>{
                    setCategoriaSelecionada(index)
                    if (categoriaDeProduto.linkAPI){
                        fetchProdutos(categoriaDeProduto.linkAPI)
                    } else {
                        setListaDeProdutoAtiva([]);
                    }
                }}>{categoriaDeProduto.nome}</li>
            ))}
            </ul>
            <div className="lista-de-produtos">
                {listaDeProdutoCarregou ? (
                    <p style={{color:"black"}}>Carregando dados...</p>
                ) : listaDeProdutoAtiva.length > 0 ? (
                    listaDeProdutoAtiva.map((produto,index) => (
                        <CardProduto key = {index}
                            productName = {produto.productName}
                            descriptionShort= {produto.descriptionShort}
                            photoURL= {produto.photo}
                            price= {produto.price}
                        />
                    ))
                ):(
                    <p style={{color:"red"}}>Não há produtos disponíveis para esta categoria.</p>
                )}
            </div>
        </div>
    );
}

export default ProdutosRelacionados