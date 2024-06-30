import "./marcasRelacionadas.scss"
interface Marca{
    logoMarca: string
}

interface MarcasRelacionadasProps{
    listaDeMarcas: Marca[]
}

function MarcasRelacionadas({listaDeMarcas}:MarcasRelacionadasProps){
    return (
        <div className="lista-de-marcas-wrapper">
            <div className="lista-de-marcas-botoes">
                <p 
                onClick={()=>{
                    const listaDeMarcas = document.querySelector(".lista-de-marcas");
                    listaDeMarcas?.scrollBy({top:0,left:250,behavior:"smooth"})
                }}>&gt;</p>
                <p onClick={()=>{
                    const listaDeMarcas = document.querySelector(".lista-de-marcas");
                    listaDeMarcas?.scrollBy({top:0,left:-250,behavior:"smooth"})
                }}>&lt;</p>
            </div>
        <div className="lista-de-marcas">
            {listaDeMarcas.length > 0 ? (
                listaDeMarcas.map((marca,index) => (
                    marca !== null ? <div key={index} className="marca"><img src={marca.logoMarca}/></div> : ''
                ))
            ) : (
                <p>Não há marcas disponíveis</p>
            )}
        </div>
        </div>
    );
}

export default MarcasRelacionadas