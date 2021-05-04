import Sidebar from '../sidebar'
import TopBar from '../topbar'
import BottomBar from '../bottombar'

import { MainLayout, HeaderLayout, FullLayout, AsideArea, ContentArea, FooterLayout } from './style'

function Layout({ children, ...pageProps }) {
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

                    <ContentArea>
                        {children}
                    </ContentArea>
                </FullLayout>

                <FooterLayout>
                    <BottomBar />
                </FooterLayout>
            </MainLayout>
        </div>
    )
}
  
export default Layout