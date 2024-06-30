import { PiStorefrontLight } from "react-icons/pi";
import { PiDevicesLight } from "react-icons/pi";
import { GiWineBottle } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { PiHandHeartLight } from "react-icons/pi";
import { TbTreadmill } from "react-icons/tb";
import { GiLargeDress } from "react-icons/gi";
import './categoriaProdutos.scss';



function CategoriaProdutos(){
    return(
        <div className="categoria-de-produtos-lista">
            <div className="categoria">
                <div className="icone">
                    <PiDevicesLight size={61} color="#F71963"/>
                </div>
                <p>Tecnologia</p>
            </div>
            <div className="categoria">
                <div className="icone">
                    <PiStorefrontLight size={61} color="black"/>
                </div>
                <p>Supermercado</p>
            </div>
            <div className="categoria">
                <div className="icone">
                    <GiWineBottle size={61} color="black"/>
                </div>
                <p>Bebidas</p>
            </div>
            <div className="categoria">
                <div className="icone">
                    <FaTools size={61} color="black"/>
                </div>
                <p>Ferramentas</p>
            </div>
            <div className="categoria">
                <div className="icone">
                    <PiHandHeartLight size={61} color="black"/>
                </div>
                <p>Saude</p>
            </div>
            <div className="categoria">
                <div className="icone">
                    <TbTreadmill size={61} color="black"/>
                </div>
                <p>Esporte e Fitness</p>
            </div>
            <div className="categoria">
                <div className="icone">
                    <GiLargeDress size={61} color="black"/>
                </div>
                <p>Moda</p>
            </div>
        </div>
    )
}

export default CategoriaProdutos