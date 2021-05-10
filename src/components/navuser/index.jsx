import Link from 'next/link'

function NavUser() {
    return (
        <div>
            <nav className="submenu">
                <li><span><Link href="/configuracoes/perfil">Visualizar Perfil</Link></span></li>
                <li><span><Link href="/configuracoes/perfil/editar">Editar Perfil</Link></span></li>
                <li><span><Link href="/login">Logout</Link></span></li>
            </nav>
        </div>
    )
}
  
export default NavUser