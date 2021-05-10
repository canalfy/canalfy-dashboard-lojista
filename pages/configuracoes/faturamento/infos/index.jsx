import Link from 'next/link'

import { TitleArea, MenuArea, Content } from '../../../../src/styles/configuracoes/infos'

import Layout from '../../../../src/components/layout'

function InfosConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / <Link href="/configuracoes/faturamento">Faturamento</Link> / Configurações da Fatura</div>
                    <div className="title"><h2>Configurações da Fatura</h2></div>
                </TitleArea>

                <MenuArea>
                    <li><Link href="/configuracoes/faturamento">Resumo</Link></li>
                    <li><Link href="/configuracoes/faturamento/infos">Configurações da Fatura</Link></li>
                    <li><Link href="/configuracoes/faturamento/planos">Plano</Link></li>
                    <li><Link href="/configuracoes/faturamento/metodos-de-pagamento">Método de Pagamento</Link></li>
                    <li><Link href="/configuracoes/faturamento/faturas">Faturas</Link></li>
                </MenuArea>

                <Content>
                    <form>
                        <div className="input">
                            <label for="name-shopConfig">Nome da Loja*</label>
                            <input type="text" placeholder="" name="name-shopConfig" id="name-shopConfig" />
                        </div>

                        <div className="input">
                            <label for="doc-shopConfig">CNPJ*</label>
                            <input type="text" placeholder="" name="doc-shopConfig" id="doc-shopConfig" />
                        </div>

                        <div className="input">
                            <label for="ceo-shopConfig">Nome do Responsável*</label>
                            <input type="text" placeholder="" name="ceo-shopConfig" id="ceo-shopConfig" />
                        </div>

                        <div className="input input-submit">
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </Content>
            </Layout>
        </>
    )
}
  
export default InfosConfig