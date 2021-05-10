import Link from 'next/link'

import { TitleArea, MenuArea, Content } from '../../../../src/styles/configuracoes/faturas'

import Layout from '../../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function InvoiceConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / <Link href="/configuracoes/faturamento">Faturamento</Link> / Faturas</div>
                    <div className="title"><h2>Faturas</h2></div>
                </TitleArea>

                <MenuArea>
                    <li><Link href="/configuracoes/faturamento">Resumo</Link></li>
                    <li><Link href="/configuracoes/faturamento/infos">Configurações da Fatura</Link></li>
                    <li><Link href="/configuracoes/faturamento/planos">Plano</Link></li>
                    <li><Link href="/configuracoes/faturamento/metodos-de-pagamento">Método de Pagamento</Link></li>
                    <li><Link href="/configuracoes/faturamento/faturas">Faturas</Link></li>
                </MenuArea>

                <Content>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Valor</th>
                                <th>Vencimento</th>
                                <th>Status</th>
                                <th>Fatura</th>
                                <th>Nota Fiscal</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>00002</th>
                                <td>R$ 1.500,00</td>
                                <td>12/08/2021</td>
                                <td>Aberta</td>
                                <td><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></td>
                                <td><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></td>
                            </tr>

                            <tr>
                                <th>00001</th>
                                <td>R$ 1.500,00</td>
                                <td>12/07/2021</td>
                                <td>Paga</td>
                                <td><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></td>
                                <td><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </Content>
            </Layout>
        </>
    )
}
  
export default InvoiceConfig