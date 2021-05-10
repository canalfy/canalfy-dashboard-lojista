import Link from 'next/link'

import { TitleArea, Content } from '../../../src/styles/configuracoes/perfil'

import Layout from '../../../src/components/layout'

function ProfileConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Perfil</div>
                    <div className="title"><h2>Perfil</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div class="input">
                            <label for="domain-profile">Seu nome*</label>
                            <input type="text" placeholder="" name="domain-profile" id="domain-profile" />
                        </div>

                        <div class="input">
                            <label for="doc-profile">Seu CPF*</label>
                            <input type="text" placeholder="" name="doc-profile" id="doc-profile" />
                        </div>

                        <div class="input">
                            <label for="email-profile">Seu e-mail*</label>
                            <input type="email" placeholder="" name="email-profile" id="email-profile" />
                        </div>

                        <div class="input">
                            <label for="pass-profile">Alterar senha</label>
                            <input type="text" placeholder="" name="pass-profile" id="pass-profile" />
                        </div>

                        <div class="input">
                            <label for="passConfirm-profile">Confirmar senha</label>
                            <input type="text" placeholder="" name="passConfirm-profile" id="passConfirm-profile" />
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
  
export default ProfileConfig