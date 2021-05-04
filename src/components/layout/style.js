import styled from 'styled-components'

export const MainLayout = styled.main`
    width: 100%;
    min-height: 100vh;
`

export const HeaderLayout = styled.header`
    width: 100%;
    height: 80px;

    background: #152937;
`

export const FullLayout = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 30px;
    justify-content: flex-start;
    align-items: flex-start;
`

export const AsideArea = styled.aside`
    width: 100%;
    height: 100%;
    padding: 20px;

    background: #122330;
`

export const ContentArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

export const FooterLayout = styled.footer`
    width: 100%;
    height: 80px;

    background: #152937;
`