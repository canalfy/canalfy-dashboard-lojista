import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/parceiros'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function PartnersManagement() {

    const [show, setShow] = useState(false)

    function showOptions() {
        setShow(!show)
    }

    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Parceiros</div>
                    <div className="title"><h2>Parceiros</h2></div>
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
                                <td><strong>John Doe</strong></td>
                                <td>Oferta Padrão 10%</td>
                                <td>R$ 3.560,00</td>
                                <td>120</td>
                                <td>R$ 356,00</td>
                                <td>Ativo</td>
                                <td className="actions">
                                    <FontAwesomeIcon icon={faEllipsisV} onClick={showOptions}></FontAwesomeIcon>

                                    {
                                        show?
                                            <div className="options">
                                                <li><Link href="/"><a>Ver Dados Cadastrais</a></Link></li>
                                                <li><Link href="/"><a>Editar</a></Link></li>
                                                <li><Link href="/"><a>Excluir</a></Link></li>
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
  
export default PartnersManagement