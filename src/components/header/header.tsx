import './header.scss';
import logo from '../../assets/vtex-logo.webp'
import { CiSearch } from "react-icons/ci";
import { RiInbox2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";

function Header(){
    return(
        <header>
            <div className="linha-superior">
                <ul>
                    <li>Compra <strong>100% segura</strong></li>
                    <li><strong>Frete grátis</strong> acima de R$ 200</li>
                    <li><strong>Parcele</strong> suas compras</li>
                </ul>
            </div>
            <div className="linha-principal">
                <div className="container-imagem">
                <img src={logo}/>
                </div>
                <div className="container-busca">
                    <form>
                        <input type="text" placeholder="O que você está buscando?" name="buscar-produto"/>
                        <button type="submit"><CiSearch size={30}/></button>
                    </form>
                </div>
                <div className="container-acoes">
                    <div><RiInbox2Line size={32}/></div>
                    <div><CiHeart size={32}/></div>
                    <div><PiUserCircleThin size={32}/></div>
                    <div><BsCart3 size={32}/></div>
                </div>
            </div>
            <div className="linha-inferior">
                <ul>
                    <li>TODAS CATEGORIAS</li>
                    <li>SUPERMERCADO</li>
                    <li>LIVROS</li>
                    <li>MODA</li>
                    <li>LANÇAMENTOS</li>
                    <li className='categoria-ativa'>OFERTAS DO DIA</li>
                    <li>ASSINATURA</li>
                </ul>
            </div>
        </header>
    )
}

export default Header