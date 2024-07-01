import Popup from '../popup/popup';
import { useState } from 'react';
import './cardProduto.scss';

interface CardProps {
    productName: string;
    descriptionShort: string;
    photoURL: string;
    price: number;
}

function CardProduto({ productName, descriptionShort, photoURL, price }: CardProps) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [quantidadeCompra, setQuantidadeCompra] = useState(1);

    const handleDecrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (quantidadeCompra > 1) {
            setQuantidadeCompra(quantidadeCompra - 1);
        }
    };

    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setQuantidadeCompra(quantidadeCompra + 1);
    };

    const handlePurchase = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Compra realizada');
        window.location.reload();
    };

    return (
        <div className="card">
            <img src={photoURL} alt={productName} />
            <p className="produto-nome">{productName}</p>
            {price ? (<p className="produto-preco">R$ {price.toFixed(2)}</p>) : ''}
            <p className="frete">Frete grátis</p>
            <p className="botao-comprar" onClick={() => setButtonPopup(true)}>COMPRAR</p>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='produto-imagem'>
                    <img src={photoURL} alt={productName} />
                </div>
                <div className='produto-informacoes'>
                    <p className="produto-nome">{productName}</p>
                    {price ? (<p className="produto-preco">R$ {price.toFixed(2)}</p>) : ''}
                    <p className="produto-descricao">{descriptionShort}</p>
                    <p className='produto-mais-detalhes'>Veja mais detalhes do produto &gt; </p>
                    <form className='produto-comprar' onSubmit={handlePurchase}>
                        <div className='quantidade-de-compra'>
                            <button onClick={handleDecrement}>-</button>
                            <input value={quantidadeCompra} readOnly />
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button type='submit'>COMPRAR</button>
                    </form>
                </div>
            </Popup>
        </div>
    );
}

export default CardProduto;
