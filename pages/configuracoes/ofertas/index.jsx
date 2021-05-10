import Link from 'next/link'

import { TitleArea, Content, TabArea } from '../../../src/styles/configuracoes/ofertas'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function OffersConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Configurações de Ofertas</div>
                    <div className="title"><h2>Configurações de Ofertas</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div class="input">
                            <label for="name-offers">Nome da oferta*</label>
                            <input type="text" placeholder="" name="name-offers" id="name-offers" />
                        </div>

                        <div class="input">
                            <label for="type-offers">Forma de Atribuição*</label>
                            <select name="type-offers" id="type-offers">
                                <option value=""></option>
                                <option value="ID">ID</option>
                                <option value="Cupom">Cupom</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="percent-offers">Valor da comissão do parceiro (em %)*</label>
                            <input type="text" placeholder="" name="percent-offers" id="percent-offers" />
                        </div>

                        <div class="input">
                            <label for="cuppom-offers">Valor de desconto do cupom (em %)*</label>
                            <input type="text" placeholder="" name="cuppom-offers" id="cuppom-offers" />
                        </div>

                        <div class="input">
                            <label for="products-offerss">Quais produtos estão elegíveis a essa oferta?*</label>
                            <select name="products-offers" id="products-offers">
                                <option value=""></option>
                                <option value="Todos">Todos</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="partners-offerss">Quais parceiros estão elegíveis a essa oferta?*</label>
                            <select name="partners-offers" id="partners-offers">
                                <option value=""></option>
                                <option value="Todos">Todos</option>
                            </select>
                        </div>

                        <div class="input input-submit">
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </Content>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome da Oferta</th>
                                <th>Forma de Atribuição</th>
                                <th>Valor da Comissão</th>
                                <th>Desconto do Cupom</th>
                                <th>Produtos Elegíveis</th>
                                <th>Parceiros Elegíveis</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>Parceiro Standard</th>
                                <td>ID</td>
                                <td>10%</td>
                                <td></td>
                                <td>Todos</td>
                                <td>Todos</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>

                            <tr>
                                <th>Cupom Influencer</th>
                                <td>Cupom</td>
                                <td></td>
                                <td>15%</td>
                                <td>Todos</td>
                                <td>Todos</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default OffersConfig