import './cardProduto.scss'

interface CardProps{
    productName: string;
    descriptionShort: string;
    photoURL: string;
    price: number;
}

function CardProduto({productName,photoURL,price}:CardProps){
    return(
        <div className="card">
            <img src={photoURL} alt={productName}/>
            <p className="produto-nome">{productName}</p>
            {price?(<p className="produto-preco">R$ {price.toFixed(2)}</p>):''}
            <p className="frete">Frete grátis</p>
            <p className="botao-comprar">COMPRAR</p>
        </div>
    )
}

export default CardProduto
