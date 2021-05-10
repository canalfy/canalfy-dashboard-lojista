import Link from 'next/link'

import { TitleArea, MenuArea, Content } from '../../../src/styles/configuracoes/faturamento'

import Layout from '../../../src/components/layout'

function MoneyConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Faturamento</div>
                    <div className="title"><h2>Faturamento</h2></div>
                </TitleArea>

                <MenuArea>
                    <li><Link href="/configuracoes/faturamento">Resumo</Link></li>
                    <li><Link href="/configuracoes/faturamento/infos">Configurações da Fatura</Link></li>
                    <li><Link href="/configuracoes/faturamento/planos">Plano</Link></li>
                    <li><Link href="/configuracoes/faturamento/metodos-de-pagamento">Método de Pagamento</Link></li>
                    <li><Link href="/configuracoes/faturamento/faturas">Faturas</Link></li>
                </MenuArea>

                <Content>
                    Resumo de Faturamento
                </Content>
            </Layout>
        </>
    )
}
  
export default MoneyConfig