import Link from 'next/link'

import { TitleArea, Content } from '../../../src/styles/configuracoes/geral'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function GeralConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Configurações Gerais</div>
                    <div className="title"><h2>Configurações Gerais</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div class="input">
                            <label for="domain-general">Seu domínio*</label>
                            <input type="text" placeholder="Insira seu domínio" name="domain-general" id="domain-general" />
                        </div>

                        <div class="input">
                            <label for="email-general">Seu e-mail*</label>
                            <input type="email" placeholder="Insira seu e-mail" name="email-general" id="email-general" />
                        </div>

                        <div class="input">
                            <label for="tel-general">Seu telefone*</label>
                            <input type="tel" placeholder="Insira seu telefone" name="tel-general" id="tel-general" />
                        </div>

                        <div class="input">
                            <label for="category-generals">Categoria do Negócio*</label>
                            <select name="category-general" id="category-general">
                                <option value=""></option>
                                <option value="Educação">Educação</option>
                                <option value="Pets e Animais">Pets e Animais</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="currency-generals">Moeda Local*</label>
                            <select name="currency-general" id="currency-general">
                                <option value=""></option>
                                <option value="USD">USD</option>
                                <option value="BRL">BRL</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="timezone-generals">Fuso Horário*</label>
                            <select name="timezone-general" id="timezone-general">
                                <option value=""></option>
                                <option value="(UTC-11:00) Midway Island">(UTC-11:00) Midway Island</option>
                                <option value="(UTC-11:00) Samoa">(UTC-11:00) Samoa</option>
                            </select>
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
  
export default GeralConfig