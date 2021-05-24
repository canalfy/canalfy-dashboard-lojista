import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/parceiros'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus, faExternalLinkAlt, faBan } from "@fortawesome/free-solid-svg-icons";

function PartnersManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Parceiros</div>
                    <div className="title"><h2>Parceiros</h2></div>

                    <p>Confira e analise a performance dos seus parceiros, filtre conforme desejar, adicione novos parceiros e exporte para Excel quando quiser.</p>
                </TitleArea>

                <FilterArea>
                    <div className="orders">
                        <div className="input">
                            <label for="orders-tab">Ordenar por</label>
                            <select name="orders-tab" id="orders-tab">
                                <option value="padrao">Padrão</option>
                                <option value="Maior Receita">Maior Receita</option>
                                <option value="Menor Receita">Menor Receita</option>
                                <option value="Maior Comissão">Maior Comissão</option>
                                <option value="Menor Comissão">Menor Comissão</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="download">
                        <span className="export-btn">
                            Novo Parceiro
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </span>
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
                                <th>Nome do Parceiro</th>
                                <th>Oferta</th>
                                <th>Receita</th>
                                <th>Pedidos</th>
                                <th>Comissão</th>
                                <th>Status</th>
                                <th>Cadastro</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><strong>John Doe</strong></td>
                                <td>Oferta Padrão 10%</td>
                                <td>R$ 3.560,00</td>
                                <td>120</td>
                                <td>R$ 356,00</td>
                                <td><span className="success">Ativo</span></td>
                                <td><span className="success">Completo</span></td>
                                <td className="actions">
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                        <span className="tooltip">Ver pedido</span>
                                    </span>
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
                                        <span className="tooltip">Desativar</span>
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
  
export default PartnersManagement