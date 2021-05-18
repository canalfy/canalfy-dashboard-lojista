import Link from 'next/link'

import { TitleArea, FilterArea, TabArea } from '../../../src/styles/gerenciamento/categoria-de-comissoes'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function ComissionCategory() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Categorias de Comissão</div>
                    <div className="title"><h2>Categorias de Comissão</h2></div>
                </TitleArea>

                <FilterArea>
                    <div className="filters">
                        <div className="input">
                            <label for="filters-tab">Filtrar por</label>
                            <select name="filters-tab" id="filters-tab">
                                <option value="padrao">Padrão</option>
                                <option value="nome">Nome</option>
                                <option value="Tipo">Tipo</option>
                            </select>
                        </div>

                        <div className="input">
                            <label for="filters-status">Status</label>
                            <select name="filters-status" id="filters-status">
                                <option value="padrao">Padrão</option>
                                <option value="Percentual de Venda">Percentual de Venda</option>
                                <option value="Vale Brinde">Vale Brinde</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="download">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </div>
                </FilterArea>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Oferta</th>
                                <th>Tipo</th>
                                <th>Receita</th>
                                <th>Afiliados</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Parceiro Standard</td>
                                <td>Percentual de Venda</td>
                                <td>R$ 3.560,00</td>
                                <td>2</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default ComissionCategory