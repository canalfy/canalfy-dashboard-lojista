import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, FilterArea, FilterBox, TabArea } from '../../../src/styles/gerenciamento/parceiros'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus, faExternalLinkAlt, faBan, faFilter, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function PartnersManagement() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

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
                        <span className="filter-trigger" onClick={handleToggle}>
                            Filtrar Pedidos
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                        </span>
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

                <FilterBox className={`app ${isActive ? "" : "active-box"}`}>
                    <div className="filter-wrap">
                        <div className="title">
                            <h4>Filtros</h4>
                            <FontAwesomeIcon icon={faTimes} onClick={handleToggle}></FontAwesomeIcon>
                        </div>

                        <form className="form">
                            <div className="input">
                                <label for="partner-name">Filtrar por Parceiro</label>
                                <input type="text" name="partner-name" id="partner-name" />
                            </div>

                            <div className="input">
                                <label for="partner-locale">Filtrar por Cidade</label>
                                <input type="text" name="partner-locale" id="partner-locale" />
                            </div>

                            <div className="input">
                                <label for="partner-date-create">Filtrar por Data (Cadastrados)</label>
                                <div className="date-picker">
                                    <input type="date" name="partner-date-create" id="partner-date-create" />
                                    <input type="date" name="partner-date-create" id="partner-date-create" />
                                </div>
                            </div>

                            <div className="input">
                                <label for="partner-date-confirmed">Filtrar por Data (Confirmados)</label>
                                <div className="date-picker">
                                    <input type="date" name="partner-date-confirmed" id="partner-date-confirmed" />
                                    <input type="date" name="partner-date-confirmed" id="partner-date-confirmed" />
                                </div>
                            </div>

                            <div className="input">
                                <p>Filtrar por Confirmados</p>
                                <div className="radio-options">
                                    <div>
                                        <input type="radio" id="partner-confirmed-all" name="partner-confirmed-all" value="Todos" />
                                        <label for="partner-confirmed-all">Todos</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="partner-confirmed" name="partner-confirmed" value="Confirmados" />
                                        <label for="partner-confirmed">Confirmados</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="partner-confirmed-wait" name="partner-confirmed-wait" value="Aguardando Confirmação" />
                                        <label for="partner-confirmed-wait">Aguardando Confirmação</label>
                                    </div>
                                </div>
                            </div>

                            <div className="input">
                                <p>Filtrar por Pedidos</p>
                                <div className="radio-options">
                                    <div>
                                        <input type="radio" id="partner-orders-all" name="partner-orders-all" value="Todos" />
                                        <label for="partner-orders-all">Todos</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="partner-orders-yes" name="partner-orders-yes" value="Com Pedidos" />
                                        <label for="partner-orders-yes">Com Pedidos</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="partner-orders-none" name="partner-orders-none" value="Sem Pedidos" />
                                        <label for="partner-orders-none">Sem Pedidos</label>
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
                                        <Link href="/gerenciamento/perfil">
                                            <a>
                                                <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                                <span className="tooltip">Ver pedido</span>
                                            </a>
                                        </Link>
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