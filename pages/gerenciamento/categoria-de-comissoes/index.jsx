import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/categoria-de-comissoes'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

function ComissionCategory() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Categorias de Comissão</div>
                    <div className="title"><h2>Categorias de Comissão</h2></div>

                    <p>Acompanhe abaixo as suas categorias de comissão, saiba a quantidade de parceiros em cada uma e acompanhe as receitas.</p>
                </TitleArea>

                <FilterArea>
                    <div className="orders">
                        <div className="input">
                            <label for="orders-tab">Ordenar por</label>
                            <select name="orders-tab" id="orders-tab">
                                <option value="padrao">Padrão</option>
                                <option value="Maior Receita">Maior Receita</option>
                                <option value="Menor Receita">Menor Receita</option>
                                <option value="Mais Parceiros">Mais Parceiros</option>
                                <option value="Menos Parceiros">Menos Parceiros</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="download">
                        <span className="export-btn">
                            Nova Categoria
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </span>
                    </div>
                </FilterArea>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Oferta</th>
                                <th>Tipo</th>
                                <th>Receita</th>
                                <th>% de Parceiros</th>
                                <th>Total de Parceiros</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Parceiro Standard</td>
                                <td>Percentual de Venda</td>
                                <td>R$ 3.560,00</td>
                                <td>100%</td>
                                <td>2500</td>
                                <td className="actions">
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <span className="tooltip">Editar</span>
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
  
export default ComissionCategory