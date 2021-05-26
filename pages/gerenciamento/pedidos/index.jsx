import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, FilterArea, FilterBox, TabArea } from '../../../src/styles/gerenciamento/pedidos'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faExternalLinkAlt, faFilter, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function ConversionManagement() {
    
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

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
                        <span className="filter-trigger" onClick={handleToggle}>
                            Filtrar Pedidos
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                        </span>
                        <span className="export-btn">
                            Exportar Excel
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </span>
                    </div>
                </FilterArea>

                <FilterBox className={`app ${isActive ? "" : "active-box"}`}>
                    <div className="filter-wrap">
                        <div className="title">
                            <h4>Filtros</h4>
                            <FontAwesomeIcon icon={faTimes} onClick={handleToggle}></FontAwesomeIcon>
                        </div>

                        <form className="form">
                            <div className="input">
                                <label for="buy-number">Filtrar por número do pedido</label>
                                <input type="number" name="buy-number" id="buy-number" />
                            </div>

                            <div className="input">
                                <label for="buy-status">Filtrar por status do pedido</label>
                                <select name="buy-status" id="buy-status">
                                    <option value="Selecione o status">Selecione o status</option>
                                    <option value="A Enviar">A Enviar</option>
                                    <option value="A Enviar Master">A Enviar Master</option>
                                    <option value="A Enviar Yapay">A Enviar Yapay</option>
                                    <option value="Aguardando Envio">Aguardando Envio</option>
                                    <option value="Aguardando Outra Compra">Aguardando Outra Compra</option>
                                    <option value="Aguardando Pagamento">Aguardando Pagamento</option>
                                    <option value="Aguardando Peso NF">Aguardando Peso NF</option>
                                    <option value="Aguardando Produto">Aguardando Produto</option>
                                    <option value="Aguardando Yapay">Aguardando Yapay</option>
                                    <option value="Cancelado">Cancelado</option>
                                    <option value="Cancelado Aut">Cancelado Aut</option>
                                    <option value="Cancelado Hubseg">Cancelado Hubseg</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Dentro SP">Dentro SP</option>
                                    <option value="Em Monitoramento">Em Monitoramento</option>
                                    <option value="Em Processamento Hubseg">Em Processamento Hubseg</option>
                                    <option value="Em Recuperação">Em Recuperação</option>
                                    <option value="Enviado">Enviado</option>
                                    <option value="Enviar Orçamento 1">Enviar Orçamento 1</option>
                                    <option value="Enviar Orçamento 2">Enviar Orçamento 2</option>
                                    <option value="Finalizado">Finalizado</option>
                                    <option value="Finalizado e Avaliado">Finalizado e Avaliado</option>
                                    <option value="Fora SP">Fora SP</option>
                                    <option value="ML Fora">ML Fora</option>
                                    <option value="ML Fullfilment">ML Fullfilment</option>
                                    <option value="ML SP">ML SP</option>
                                    <option value="Orçamento 1">Orçamento 1</option>
                                    <option value="Orçamento 2">Orçamento 2</option>
                                    <option value="Orçamento 3">Orçamento 3</option>
                                    <option value="Orçamento 4">Orçamento 4</option>
                                    <option value="Pagamento Confirmado">Pagamento Confirmado</option>
                                    <option value="Pedidos Exportar">Pedidos Exportar</option>
                                    <option value="Pendente">Pendente</option>
                                    <option value="Problemas na Entrega">Problemas na Entrega</option>
                                    <option value="Segeletro - Dentro SP">Segeletro - Dentro SP</option>
                                    <option value="Segeletro - Fora SP">Segeletro - Fora SP</option>
                                </select>
                            </div>

                            <div className="input">
                                <label for="buy-partner">Filtrar por Parceiro</label>
                                <input type="text" name="buy-partner" id="buy-partner" />
                            </div>

                            <div className="input">
                                <label for="buy-date">Filtrar por Data do Pedido</label>
                                <div className="date-picker">
                                    <input type="date" name="buy-date" id="buy-date" />
                                    <input type="date" name="buy-date" id="buy-date" />
                                </div>
                            </div>

                            <div className="input">
                                <label for="buy-date-pay">Filtrar por Data de Pagamento</label>
                                <div className="date-picker">
                                    <input type="date" name="buy-date-pay" id="buy-date-pay" />
                                    <input type="date" name="buy-date-pay" id="buy-date-pay" />
                                </div>
                            </div>

                            <div className="input">
                                <p>Filtrar por Pagamento</p>
                                <div className="radio-options">
                                    <div>
                                        <input type="radio" id="buy-all" name="buy-all" value="Todos" />
                                        <label for="buy-all">Todos</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="buy-confirmed" name="buy-confirmed" value="Confirmado" />
                                        <label for="buy-confirmed">Confirmado</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="buy-wait" name="buy-wait" value="Aguardando Confirmação" />
                                        <label for="buy-wait">Aguard. Confirmação</label>
                                    </div>
                                </div>
                            </div>

                            <div className="buttons">
                                <span className="close-btn" onClick={handleToggle}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Fechar</span>
                                <button type="submit" className="submit-btn"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Aplicar Filtros</button>
                            </div>
                        </form>
                    </div>
                </FilterBox>

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