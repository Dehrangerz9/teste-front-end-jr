import CategoriaProdutos from "./components/categoriaProdutos/categoriaProdutos";
import ProdutosRelacionados from "./components/produtosRelacionados/produtosRelacionados";
import CardCombackground from "./components/cardComBackground/cardComBackground";
import defaultCardBackground from "../../assets/card-default-image.webp"
import './dashboard.scss';
import MarcasRelacionadas from "./components/marcasRelacionadas/marcasRelacionadas";
import logoVtex from "../../assets/vtex-logo.webp"
function Dashboard(){
    return (
        <div className="dashboard">
            <CategoriaProdutos/>
            <p className="linhas-laterais">Produtos Relacionados</p>
            <ProdutosRelacionados
                categorias={[
                    { 
                        nome: "CELULAR",
                        linkAPI: "https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json" },
                    {
                        nome: "ACESSÓRIOS",
                    },
                    {
                        nome: "TABLETS",
                    },
                    {
                        nome: "NOTEBOOKS",
                    },
                    {
                        nome: "TVS",
                    },
                    {
                        nome: "VER TODOS",
                    }
                ]}
            />
            <div className="linha-cartoes">
                <CardCombackground
                    cardTitle = "Parceiros"
                    cardSubtitle = "Lorem ipsum dolor sit amet, consectetur"
                    buttonText="CONFIRA"
                    cardImage={defaultCardBackground}
                />
                <CardCombackground
                    cardTitle = "Parceiros"
                    cardSubtitle = "Lorem ipsum dolor sit amet, consectetur"
                    buttonText="CONFIRA"
                    cardImage={defaultCardBackground}
                />                
            </div>
            <p className="linhas-laterais">Produtos Relacionados</p>
            <p className="subtitulo">Ver todos</p>
            <div className="linha-cartoes">
                <CardCombackground
                    cardTitle = "Produtos"
                    cardSubtitle = "Lorem ipsum dolor sit amet, consectetur"
                    buttonText="CONFIRA"
                    cardImage={defaultCardBackground}
                />
                <CardCombackground
                    cardTitle = "Produtos"
                    cardSubtitle = "Lorem ipsum dolor sit amet, consectetur"
                    buttonText="CONFIRA"
                    cardImage={defaultCardBackground}
                />                
            </div>
            <p>Navegue Por Marcas</p>
            <MarcasRelacionadas
                listaDeMarcas={[
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex },
                    { logoMarca: logoVtex }
                ]}
            />
        </div>
    )
}

export default Dashboard;