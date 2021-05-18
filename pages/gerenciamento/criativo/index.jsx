import { useState } from 'react'
import Link from 'next/link'

import { TitleArea, Content, TabArea } from '../../../src/styles/gerenciamento/criativo'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function CreativeManagement() {

    const [show, setShow] = useState(false)

    function showOptions() {
        setShow(!show)
    }

    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Criativos</div>
                    <div className="title"><h2>Criativos</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        <div className="input">
                            <label for="title-creative">Título da Campanha*</label>
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
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>21/12/2020</td>
                                <td>Post de Parceria</td>
                                <td>Arte para post no Instagram</td>
                                <td><Link href="/">Acessar arquivo</Link></td>
                                <td className="actions">
                                    <FontAwesomeIcon icon={faEllipsisV} onClick={showOptions}></FontAwesomeIcon>

                                    {
                                        show?
                                            <div className="options">
                                                <li><Link href="/"><a>Editar</a></Link></li>
                                                <li><Link href="/"><a>Excluir</a></Link></li>
                                            </div>:null
                                    }
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