import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gestao/comissoes'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function ComissionManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Gestão de Comissões</div>
                    <div className="title"><h2>Gestão de Comissões</h2></div>
                </TitleArea>

                <FilterArea>
                    <div className="filters">
                        <div className="input">
                            <label for="filters-tab">Filtrar por</label>
                            <select name="filters-tab" id="filters-tab">
                                <option value="padrao">Padrão</option>
                                <option value="nome">Nome</option>
                                <option value="data">Data</option>
                            </select>
                        </div>

                        <div className="input">
                            <label for="filters-status">Status</label>
                            <select name="filters-status" id="filters-status">
                                <option value="padrao">Padrão</option>
                                <option value="pago">Pago</option>
                                <option value="a pagar">A pagar</option>
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
                                <th>Nome do Parceiro</th>
                                <th>Receita Gerada</th>
                                <th>Qtd. de Pedidos</th>
                                <th>Valor da Comissão</th>
                                <th>Data de Pagamento</th>
                                <th>Status</th>
                                <th>Comprovante</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>R$ 3.560,00</td>
                                <td>120</td>
                                <td>R$ 356,00</td>
                                <td>12/08/2021</td>
                                <td>A pagar</td>
                                <td>--</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default ComissionManagement