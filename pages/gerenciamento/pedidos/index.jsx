import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/pedidos'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function ConversionManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Pedidos</div>
                    <div className="title"><h2>Pedidos</h2></div>
                </TitleArea>

                <FilterArea>
                    <div className="filters">
                        <div className="input">
                            <label for="filters-tab">Filtrar por</label>
                            <select name="filters-tab" id="filters-tab">
                                <option value="padrao">Padrão</option>
                                <option value="nome">Nome</option>
                                <option value="Oferta">Oferta</option>
                            </select>
                        </div>

                        <div className="input">
                            <label for="filters-status">Status</label>
                            <select name="filters-status" id="filters-status">
                                <option value="padrao">Padrão</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Pendente">Pendente</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="download">
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </div>
                </FilterArea>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Código do Pedido</th>
                                <th>Data</th>
                                <th>Parceiro Responsável</th>
                                <th>Local da Venda</th>
                                <th>Pagamento</th>
                                <th>Status</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>1036302</th>
                                <td>12/08/2021</td>
                                <td>John Doe</td>
                                <td>Loja Virtual</td>
                                <td>Mercado Pago</td>
                                <td>Aguardando envio</td>
                                <td>R$ 356,00</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>

                            <tr>
                                <th>1036302</th>
                                <td>12/08/2021</td>
                                <td>Janne Doe</td>
                                <td>Loja Virtual</td>
                                <td>Mercado Pago</td>
                                <td>Aguardando envio</td>
                                <td>R$ 356,00</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default ConversionManagement