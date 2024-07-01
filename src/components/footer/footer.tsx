import './footer.scss'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import logoAlelo from "../../assets/logo-alelo.webp";
import logoAmex from "../../assets/logo-amex.webp";
import logoDiner from "../../assets/logo-diner.webp";
import logoElo from "../../assets/logo-elo.webp";
import logoIfood from "../../assets/logo-ifood.webp";
import logoMastercard from "../../assets/logo-mastercard.webp";
import logoPix from "../../assets/logo-pix.webp";
import logoSodexo from "../../assets/logo-sodexo.webp";
import logoTicket from "../../assets/logo-ticket.webp";
import logoVisa from "../../assets/logo-visa.webp";
import logoEcoverse from "../../assets/logo-ecoverse.webp"
import logoVtex from "../../assets/logo-vtex-branco.webp";


function Footer(){
    return(
        <footer>
            <div className="linha-principal">
                <div className='footer-menu'>
                    <p className='titulo'>Sobre nós</p>
                    <p className='titulo'>INFORMAÇÕES UTÉIS</p>
                    <p className='titulo'>FORMAS DE PAGAMENTO</p>
                    <div className='coluna-1'>
                        <ul>
                            <li>CONHEÇA</li>
                            <li>COMO COMPRAR</li>
                            <li>INDICAÇÃO E DESCONTO</li>
                        </ul>
                        <div className='redes-sociais'>
                            <FaInstagram color='white' size={22}/>
                            <FaFacebookF color='white' size={22}/>
                            <FaYoutube color='white' size={22}/>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>FALE CONOSCO</li>
                            <li>DÚVIDAS</li>
                            <li>PRAZOS DE ENTREGA</li>
                            <li>FORMAS DE PAGAMENTO</li>
                            <li>POLÍTICAS DE PRIVACIDADE</li>
                            <li>TROCAS E DEVOLUÇÕES</li>
                        </ul>
                    </div>
                    <div className='formas-de-pagamento'>
                        <img src={logoVisa} />
                        <img src={logoElo} />
                        <img src={logoAlelo} />
                        <img src={logoDiner} />
                        <img src={logoIfood} />
                        <img src={logoMastercard} />
                        <img src={logoPix} />
                        <img src={logoAmex} />
                        <img src={logoTicket} />
                        <img src={logoSodexo} />
                    </div>
                </div>
                <div className='footer-formulario'>
                    <h2>CADASTRE-SE E RECEBA <strong>NOVIDADES E PROMOÇÕES</strong></h2>
                    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <form>
                        <input type='text' placeholder='SEU E-MAIL'></input>
                        <button formAction='submit'>OK</button>
                    </form>
                </div>
            </div>
            <div className="linha-inferior">
                <p>COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS.  
                <br/>É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.</p>
                <div className="logos-copyright">
                <img src={logoEcoverse}/>
                <img src={logoVtex}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer