import Image from 'next/image'
import Link from 'next/link'

import { LoginBox } from '../src/styles/style'

function ResetPass() {
    return (
        <>
            <LoginBox>
                <header className="logo-client">
                    <Image
                        alt="Logotipo"
                        src="/images/logo-cliente.png"
                        width={126}
                        height={30}
                    />
                </header>

                <div className="login-form">
                    <h1>Resetar senha</h1>

                    <form>
                        <label for="email-login">Email cadastrado</label>
                        <input type="email" id="email-login" name="email-login" />

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <footer className="login-footer">
                    <span>&copy; 2021. Todos os direitos reservados.</span>
                    <span>Uma tecnologia <Link href="/">Canalfy</Link></span>
                </footer>
            </LoginBox>
        </>
    )
}
  
export default ResetPass