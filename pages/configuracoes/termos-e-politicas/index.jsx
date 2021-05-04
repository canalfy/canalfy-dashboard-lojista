import Link from 'next/link'

import { TitleArea, Content } from '../../../src/styles/configuracoes/termos'

import Layout from '../../../src/components/layout'

function TermsConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Termos e Políticas de Privacidade</div>
                    <div className="title"><h2>Termos e Políticas de Privacidade</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div class="input">
                            <label for="terms-config">Termos e Condições*</label>
                            <textarea placeholder="" name="terms-config" id="terms-config" />
                        </div>

                        <div class="input">
                            <label for="policy-config">Políticas de Privacidade*</label>
                            <textarea placeholder="" name="policy-config" id="policy-config" />
                        </div>

                        <div class="input input-submit">
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </Content>
            </Layout>
        </>
    )
}
  
export default TermsConfig