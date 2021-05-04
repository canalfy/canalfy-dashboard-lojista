import Link from 'next/link'

import { BarArea } from './style'

function BottomBar() {
    return (
        <div>
            <BarArea>
                <span>&copy; 2021. Todos os direitos reservados.</span>
                <span>Uma tecnologia <Link href="/">Canalfy</Link></span>
            </BarArea>
        </div>
    )
}
  
export default BottomBar