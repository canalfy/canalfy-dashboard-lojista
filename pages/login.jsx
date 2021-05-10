import Image from 'next/image'
import Link from 'next/link'

import { LoginBox } from '../src/styles/style'

function Login() {
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
                    <h1>Login</h1>

                    <form>
                        <label for="email-login">Email</label>
                        <input type="email" id="email-login" name="email-login" />

                        <label for="password-login">Senha</label>
                        <input type="password" id="password-login" name="password-login" />

                        <button type="submit">Entrar</button>
                    </form>

                    <span><Link href="/esqueci-minha-senha">Esqueci minha senha</Link></span>
                </div>

                <footer className="login-footer">
                    <span>&copy; 2021. Todos os direitos reservados.</span>
                    <span>Uma tecnologia <Link href="/">Canalfy</Link></span>
                </footer>
            </LoginBox>
        </>
    )
}
  
export default Login