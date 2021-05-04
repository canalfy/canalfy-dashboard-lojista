import Link from 'next/link'

import { TitleArea, Content } from '../../../src/styles/configuracoes/loja'

import Layout from '../../../src/components/layout'

function ShopConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Configurações da Loja</div>
                    <div className="title"><h2>Configurações da Loja</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div class="input">
                            <label for="title-branding">Título da Loja*</label>
                            <input type="text" placeholder="" name="title-branding" id="title-branding" />
                        </div>

                        <div class="input">
                            <label for="whatsapp-branding">WhatsApp da Loja*</label>
                            <input type="tel" placeholder="Insira seu telefone" name="whatsapp-branding" id="whatsapp-branding" />
                        </div>

                        <div class="input">
                            <label for="logo-branding">Marca (Logo)*</label>
                            <input type="file" accept="image/png, image/jpeg" name="logo-branding" id="logo-branding" />
                            <span>Logo will be proportionally resized to 250 x 100. Max File Size 2MB.</span>
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
  
export default ShopConfig