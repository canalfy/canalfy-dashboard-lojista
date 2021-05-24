import Link from 'next/link'

import { TitleArea, ProfileSection, Options } from '../../../src/styles/gerenciamento/perfil'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function ProfileManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Perfil</div>
                    <div className="title"><h2>Perfil</h2></div>
                </TitleArea>

                <ProfileSection>
                    <div className="title">
                        <h3>Dados Cadastrais</h3>
                    </div>

                    <div className="content">
                        <div className="card">
                            <span className="title">Nome completo</span>
                            <span className="description">John Doe</span>
                        </div>

                        <div className="card">
                            <span className="title">E-mail</span>
                            <span className="description">johndoe@canalfy.com</span>
                        </div>

                        <div className="card">
                            <span className="title">Celular</span>
                            <span className="description">(22) 92000-0381</span>
                        </div>

                        <div className="card">
                            <span className="title">Data de Nascimento</span>
                            <span className="description">12/08/1989</span>
                        </div>

                        <div className="card">
                            <span className="title">Estado</span>
                            <span className="description">RJ</span>
                        </div>

                        <div className="card">
                            <span className="title">Cidade</span>
                            <span className="description">Nova Friburgo</span>
                        </div>
                    </div>
                </ProfileSection>

                <ProfileSection>
                    <div className="title">
                        <h3>Dados de Faturamento</h3>
                    </div>

                    <div className="content">
                        <div className="card">
                            <span className="title">CPF</span>
                            <span className="description">000.000.000-00</span>
                        </div>

                        <div className="card">
                            <span className="title">Banco</span>
                            <span className="description">Banco C6</span>
                        </div>

                        <div className="card">
                            <span className="title">Tipo de Conta</span>
                            <span className="description">Conta Corrente</span>
                        </div>

                        <div className="card">
                            <span className="title">Agência</span>
                            <span className="description">0001</span>
                        </div>

                        <div className="card">
                            <span className="title">Conta</span>
                            <span className="description">0000-0</span>
                        </div>

                        <div className="card">
                            <span className="title">Oferta</span>
                            <span className="description">Oferta Padrão 10%</span>
                        </div>
                    </div>
                </ProfileSection>

                <Options>
                    <div className="edit-btn">
                        <Link href="/">
                            <a><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Editar</a>
                        </Link>
                    </div>

                    <div className="exclude-btn">
                        <Link href="/">
                            <a><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Excluir</a>
                        </Link>
                    </div>
                </Options>
            </Layout>
        </>
    )
}
  
export default ProfileManagement