import Link from 'next/link';

import { GroupArea, TitleBar, Menu } from './style';

function Sidebar() {
    return (
        <div>
            <GroupArea>
                <TitleBar>Gerenciamento</TitleBar>
                <Menu>
                    <li><Link href="/gerenciamento/pedidos"><span>Pedidos</span></Link></li>
                    <li><Link href="/gerenciamento/parceiros"><span>Parceiros</span></Link></li>
                    <li><Link href="/gerenciamento/categoria-de-comissoes"><span>Categoria de Comissão</span></Link></li>
                    <li><Link href="/gerenciamento/criativo"><span>Criativos</span></Link></li>
                </Menu>
            </GroupArea>

            <GroupArea>
                <TitleBar>Gestão de Pagamento</TitleBar>
                <Menu>
                    <li><Link href="/gestao/comissoes"><span>Comissões</span></Link></li>
                    <li><Link href="/gestao/pagamentos"><span>Repasse</span></Link></li>
                </Menu>
            </GroupArea>

            <GroupArea>
                <TitleBar>Configurações</TitleBar>
                <Menu>
                    <li><Link href="/configuracoes/geral"><span>Geral</span></Link></li>
                    <li><Link href="/configuracoes/perfil"><span>Perfil</span></Link></li>
                    <li><Link href="/configuracoes/loja"><span>Loja</span></Link></li>
                    <li><Link href="/configuracoes/ofertas"><span>Ofertas</span></Link></li>
                    <li><Link href="/configuracoes/termos-e-politicas"><span>Termos e Políticas</span></Link></li>
                    <li><Link href="/configuracoes/usuarios"><span>Usuários</span></Link></li>
                    <li><Link href="/configuracoes/faturamento"><span>Faturamento</span></Link></li>
                </Menu>
            </GroupArea>

            <GroupArea>
                <Menu>
                    <li><Link href="/login"><span>Logout</span></Link></li>
                </Menu>
            </GroupArea>
        </div>
    )
}
  
export default Sidebar