import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BarArea, LogoArea, UserArea, MessageMenu, UserMenu } from './style'
import NavUser from '../navuser/index'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";

function TopBar() {
    const [show, setShow] = useState(false)

    function teste() {
        setShow(!show)
    }
    
    return (
        <div>
            <BarArea>
                <LogoArea>
                    <Link href="/">
                        <Image
                            alt="Logotipo"
                            src="/images/logo-cliente.png"
                            width={126}
                            height={30}
                        />
                    </Link>
                </LogoArea>

                <UserArea>
                    <MessageMenu>
                        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                    </MessageMenu>

                    <UserMenu>
                        <button onClick={teste}>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </button>

                        {
                            show?
                            <NavUser />:null 
                        }
                    </UserMenu>
                </UserArea>
            </BarArea>
        </div>
    )
}
  
export default TopBar