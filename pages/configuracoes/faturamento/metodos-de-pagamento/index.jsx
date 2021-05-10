import Link from 'next/link'

import { TitleArea, MenuArea, Content } from '../../../../src/styles/configuracoes/metodos-de-pagamento'

import Layout from '../../../../src/components/layout'

function PaymentConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / <Link href="/configuracoes/faturamento">Faturamento</Link> / Métodos de Pagamento</div>
                    <div className="title"><h2>Métodos de Pagamento</h2></div>
                </TitleArea>

                <MenuArea>
                    <li><Link href="/configuracoes/faturamento">Resumo</Link></li>
                    <li><Link href="/configuracoes/faturamento/infos">Configurações da Fatura</Link></li>
                    <li><Link href="/configuracoes/faturamento/planos">Plano</Link></li>
                    <li><Link href="/configuracoes/faturamento/metodos-de-pagamento">Método de Pagamento</Link></li>
                    <li><Link href="/configuracoes/faturamento/faturas">Faturas</Link></li>
                </MenuArea>

                <Content>
                    O que teremos aqui?
                </Content>
            </Layout>
        </>
    )
}
  
export default PaymentConfig