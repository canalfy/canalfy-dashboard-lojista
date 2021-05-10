import Link from 'next/link'

import { TitleArea, MenuArea, Content } from '../../../../src/styles/configuracoes/planos'

import Layout from '../../../../src/components/layout'

function PlansConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / <Link href="/configuracoes/faturamento">Faturamento</Link> / Planos</div>
                    <div className="title"><h2>Planos</h2></div>
                </TitleArea>

                <MenuArea>
                    <li><Link href="/configuracoes/faturamento">Resumo</Link></li>
                    <li><Link href="/configuracoes/faturamento/infos">Configurações da Fatura</Link></li>
                    <li><Link href="/configuracoes/faturamento/planos">Plano</Link></li>
                    <li><Link href="/configuracoes/faturamento/metodos-de-pagamento">Método de Pagamento</Link></li>
                    <li><Link href="/configuracoes/faturamento/faturas">Faturas</Link></li>
                </MenuArea>

                <Content>
                    <section className="plan active">
                        <div className="title">
                            <h3>Basic</h3>
                        </div>

                        <div className="list">
                            <li>130 Conversões Trackeadas</li>
                            <li>5.000 Afiliados</li>
                            <li>Visitas ilimitadas</li>
                            <li>Suporte por e-mail</li>
                        </div>

                        <div className="price">
                            <span>R$ 1.500,00<small>/mês</small></span>
                        </div>

                        <div class="btn">
                            <button><span>Plano Atual</span></button>
                        </div>
                    </section>

                    <section className="plan">
                        <div className="title">
                            <h3>Professional</h3>
                        </div>

                        <div className="list">
                            <li>Conversões ilimitadas</li>
                            <li>Afiliados ilimitados</li>
                            <li>Visitas ilimitadas</li>
                            <li>Suporte por e-mail e chat</li>
                        </div>

                        <div className="price">
                            <span>R$ 2.500,00<small>/mês</small></span>
                        </div>

                        <div class="btn">
                            <button><span>Upgrade</span></button>
                        </div>
                    </section>
                </Content>
            </Layout>
        </>
    )
}
  
export default PlansConfig