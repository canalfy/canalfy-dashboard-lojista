import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/pedidos'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ConversionManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Pedidos</div>
                    <div className="title"><h2>Pedidos</h2></div>

                    <p>Acompanhe os pedidos de todos os seus parceiros. Utilize os filtros para encontrar os pedidos desejados e exporte em Excel sempre que quiser.</p>
                </TitleArea>

                <FilterArea>
                    <div className="orders">
                        <div className="input">
                            <label for="order-tab">Ordenar por</label>
                            <select name="order-tab" id="order-tab">
                                <option value="padrao">Padrão</option>
                                <option value="Menor Valor">Menor Valor</option>
                                <option value="Maior Valor">Maior Valor</option>
                                <option value="Mais Recentes">Mais Recentes</option>
                                <option value="Mais Antigos">Mais Antigos</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="download">
                        <span className="export-btn">
                            Exportar Excel
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </span>
                    </div>
                </FilterArea>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Código do Pedido</th>
                                <th>Data</th>
                                <th>Parceiro Responsável</th>
                                <th>Cliente</th>
                                <th>Forma de Pagamento</th>
                                <th>Data de Pagamento</th>
                                <th>Cupom</th>
                                <th>Status</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1036302</td>
                                <td>12/08/2021</td>
                                <td>John Doe</td>
                                <td>John Doe Jr.</td>
                                <td>Mercado Pago</td>
                                <td>12/08/2021</td>
                                <td>Não</td>
                                <td>Aguardando envio</td>
                                <td>R$ 356,00</td>
                                <td className="actions">
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                        <span className="tooltip">Ver pedido</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default ConversionManagement