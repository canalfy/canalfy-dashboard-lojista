import Image from 'next/image'

import { BarArea, LogoArea, UserArea, MessageMenu, UserMenu } from './style'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";


function TopBar() {
    return (
        <div>
            <BarArea>
                <LogoArea>
                    <Image
                        alt="Logotipo"
                        src="/images/logo-cliente.png"
                        width={126}
                        height={30}
                    />
                </LogoArea>

                <UserArea>
                    <MessageMenu>
                        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                    </MessageMenu>

                    <UserMenu>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </UserMenu>
                </UserArea>
            </BarArea>
        </div>
    )
}
  
export default TopBar