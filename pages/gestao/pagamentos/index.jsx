import Link from 'next/link'

import { TitleArea, Content } from '../../../src/styles/gestao/pagamentos'

import Layout from '../../../src/components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function PaymentManagement() {
    return (
        <>
            <Layout>
                <TitleArea>
                    <div className="breadcrumb"><Link href="/">Dashboard</Link> / Configuração de Repasse</div>
                    <div className="title"><h2>Configuração de Repasse</h2></div>
                </TitleArea>

                <Content>
                    <form>
                        {/* <div class="input">
                            <label for="config-status">Fechamento mensal</label>
                            <select name="config-status" id="config-status">
                                <option value="Pedido Aprovado">Pedido Aprovado</option>
                                <option value="Pedido Pendente">Pedido Pendente</option>
                            </select>
                        </div> */}

                        <div class="input">
                            <label for="config-payment">Pagamento</label>
                            <select name="config-payment" id="config-payment">
                                <option value="Mensal">Mensal</option>
                            </select>
                        </div>

                        <div class="input">
                            <label for="config-available">Disponível em xx dias após o pagamento</label>
                            <select name="config-available" id="config-available">
                                <option value="30">30</option>
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
  
export default PaymentManagement