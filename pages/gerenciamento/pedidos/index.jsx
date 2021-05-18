import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/pedidos'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function ConversionManagement() {
    
    const [show, setShow] = useState(false)

    function showOptions() {
        setShow(!show)
    }

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
                                    <FontAwesomeIcon icon={faEllipsisV} onClick={showOptions}></FontAwesomeIcon>

                                    {
                                        show?
                                            <div className="options">
                                                <li><Link href="/"><a>Ver pedido</a></Link></li>
                                            </div>:null
                                    }
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