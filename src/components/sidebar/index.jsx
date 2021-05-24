import Link from 'next/link';

import { GroupArea, TitleBar, Menu } from './style';

function Sidebar() {
    return (
        <div>
            <GroupArea>
                <TitleBar>Gerenciamento</TitleBar>
                <Menu>
                    <li><Link href="/"><a><span>Dashboard</span></a></Link></li>
                    <li><Link href="/gerenciamento/pedidos"><a><span>Pedidos</span></a></Link></li>
                    <li><Link href="/gerenciamento/parceiros"><a><span>Parceiros</span></a></Link></li>
                    <li><Link href="/gerenciamento/categoria-de-comissoes"><a><span>Categoria de Comissão</span></a></Link></li>
                    <li><Link href="/gerenciamento/criativo"><a><span>Criativos</span></a></Link></li>
                </Menu>
            </GroupArea>

            <GroupArea>
                <TitleBar>Gestão de Pagamento</TitleBar>
                <Menu>
                    <li><Link href="/gestao/comissoes"><a><span>Comissões</span></a></Link></li>
                </Menu>
            </GroupArea>

            <GroupArea>
                <TitleBar>Configurações</TitleBar>
                <Menu>
                    <li><Link href="/configuracoes/geral"><a><span>Geral</span></a></Link></li>
                    <li><Link href="/configuracoes/loja"><a><span>Loja</span></a></Link></li>
                    <li><Link href="/configuracoes/ofertas"><a><span>Ofertas</span></a></Link></li>
                    <li><Link href="/configuracoes/pagamentos"><a><span>Repasse</span></a></Link></li>
                    <li><Link href="/configuracoes/termos-e-politicas"><a><span>Termos e Políticas</span></a></Link></li>
                    <li><Link href="/configuracoes/usuarios"><a><span>Usuários</span></a></Link></li>
                </Menu>
            </GroupArea>

            <GroupArea>
                <Menu>
                    <li><Link href="/login"><a><span>Logout</span></a></Link></li>
                </Menu>
            </GroupArea>
        </div>
    )
}
  
export default Sidebar