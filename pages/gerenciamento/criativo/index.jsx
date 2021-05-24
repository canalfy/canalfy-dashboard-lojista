import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, Content, TabArea } from '../../../src/styles/gerenciamento/criativo'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faEdit, faTrash, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function CreativeManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Criativos</div>
                    <div className="title"><h2>Criativos</h2></div>

                    <p>Acompanhe suas campanhas de marketing ou crie novas. Você também pode desativar, editar ou excluir criativos existentes.</p>
                </TitleArea>

                <Content>
                    <form>
                        <div className="input">
                            <label for="title-creative">Criativo*</label>
                            <input type="text" placeholder="" name="title-creative" id="title-creative" />
                        </div>

                        <div className="input">
                            <label for="description-creative">Descrição*</label>
                            <input type="text" placeholder="" name="description-creative" id="description-creative" />
                        </div>

                        <div className="input">
                            <label for="link-creative">Link do Arquivo*</label>
                            <input type="url" placeholder="" name="link-creative" id="link-creative" />
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
                                <th>Data</th>
                                <th>Título</th>
                                <th>Descrição</th>
                                <th>Link do Arquivo</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>21/12/2020</td>
                                <td>Post de Parceria</td>
                                <td>Arte para post no Instagram</td>
                                <td>
                                    <Link href="/">
                                        <a>Acessar arquivo <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                        </a>
                                    </Link>
                                </td>
                                <td><span className="success">Ativo</span></td>
                                <td className="actions">
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
                                        <span className="tooltip">Desativar</span>
                                    </span>
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <span className="tooltip">Editar</span>
                                    </span>
                                    <span className="ico-action">
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        <span className="tooltip">Excluir</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </TabArea>
            </Layout>
        </>
    )
}
  
export default CreativeManagement