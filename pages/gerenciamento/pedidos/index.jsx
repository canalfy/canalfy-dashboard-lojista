import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/pedidos'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </div>
                </FilterArea>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Código do Pedido</th>
                                <th>Parceiro Responsável</th>
                                <th>Data</th>
                                <th>Valor</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>1036302</th>
                                <td>John Doe</td>
                                <td>12/08/2021</td>
                                <td>R$ 356,00</td>
                            </tr>

                            <tr>
                                <th>1036302</th>
                                <td>Janne Doe</td>
                                <td>12/08/2021</td>
                                <td>R$ 356,00</td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default ConversionManagement