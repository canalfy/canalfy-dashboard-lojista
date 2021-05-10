import { useState } from 'react'
import Sidebar from '../sidebar'
import TopBar from '../topbar'
import BottomBar from '../bottombar'

import { MainLayout, HeaderLayout, FullLayout, AsideArea, OpenAside, AsideMobile, ContentArea, FooterLayout } from './style'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Layout({ children, ...pageProps }) {

    const [show, setShow] = useState(false)

    function openMenu() {
        setShow(!show)
    }

    return (
        <div>
            <MainLayout>
                <HeaderLayout>
                    <TopBar />
                </HeaderLayout>

                <FullLayout>
                    <AsideArea>
                        <Sidebar />
                    </AsideArea>

                    <OpenAside onClick={openMenu}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </OpenAside>

                    <ContentArea>
                        {children}
                    </ContentArea>
                </FullLayout>

                {
                    show?
                        <AsideMobile>
                            <Sidebar />
                        </AsideMobile>:null
                }

                <FooterLayout>
                    <BottomBar />
                </FooterLayout>
            </MainLayout>
        </div>
    )
}
  
export default Layout