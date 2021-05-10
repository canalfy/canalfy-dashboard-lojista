import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/parceiros'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function PartnersManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Parceiros</div>
                    <div className="title"><h2>Parceiros</h2></div>
                </TitleArea>

                <FilterArea>
                    <div className="filters">
                        <div class="input">
                            <label for="filters-tab">Filtrar por</label>
                            <select name="filters-tab" id="filters-tab">
                                <option value="padrao">Padrão</option>
                                <option value="nome">Nome</option>
                                <option value="Oferta">Oferta</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="filters-status">Status</label>
                            <select name="filters-status" id="filters-status">
                                <option value="padrao">Padrão</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Pendente">Pendente</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="download">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
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
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>John Doe</th>
                                <td>Oferta Padrão 10%</td>
                                <td>R$ 3.560,00</td>
                                <td>120</td>
                                <td>R$ 356,00</td>
                                <td>Ativo</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>

                            <tr>
                                <th>Janne Doe</th>
                                <td>Oferta Padrão 10%</td>
                                <td>R$ 3.560,00</td>
                                <td>120</td>
                                <td>R$ 356,00</td>
                                <td>Ativo</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default PartnersManagement