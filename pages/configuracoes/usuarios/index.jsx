import Link from 'next/link'

import { TitleArea, Content, TabArea } from '../../../src/styles/configuracoes/usuarios'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function UsersConfig() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Configurações de Usuários</div>
                    <div className="title"><h2>Configurações de Usuários</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div className="input">
                            <label for="name-users">Nome do Usuário*</label>
                            <input type="text" placeholder="" name="name-users" id="name-users" />
                        </div>

                        <div className="input">
                            <label for="email-users">E-mail*</label>
                            <input type="email" placeholder="" name="email-users" id="email-users" />
                        </div>

                        <div className="input">
                            <label for="password-users">Senha*</label>
                            <input type="password" placeholder="" name="password-users" id="password-users" />
                        </div>

                        <div className="input">
                            <label for="doc-users">CPF*</label>
                            <input type="text" placeholder="" name="doc-users" id="doc-users" />
                        </div>

                        <div className="input">
                            <label for="nivel-users">Nível*</label>
                            <select name="nivel-users" id="nivel-users">
                                <option value=""></option>
                                <option value="Administrador">Administrador</option>
                                <option value="Editor">Editor</option>
                                <option value="Assinante">Assinante</option>
                            </select>
                        </div>

                        <div className="input input-submit">
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </Content>

                <TabArea>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Senha</th>
                                <th>CPF</th>
                                <th>Nível</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>Paulo Lima</th>
                                <td>paulo.lima@canalfy.com</td>
                                <td>********</td>
                                <td>000.000.000-00</td>
                                <td>Administrador</td>
                                <td>Ativo</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>

                            <tr>
                                <th>David Cassal</th>
                                <td>david.cassal@canalfy.com</td>
                                <td>********</td>
                                <td>000.000.000-00</td>
                                <td>Editor</td>
                                <td>Ativo</td>
                                <td><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default UsersConfig