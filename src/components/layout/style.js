import styled from 'styled-components'

export const MainLayout = styled.main`
    width: 100%;
    min-height: 100vh;
`

export const HeaderLayout = styled.header`
    width: 100%;
    height: 80px;

    background: #152937;

    @media screen and (max-width: 520px) {
        height: auto;
    }
`

export const FullLayout = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 30px;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const AsideArea = styled.aside`
    width: 100%;
    height: 100%;
    padding: 20px;

    background: #122330;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ContentArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

export const OpenAside = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        position: fixed;
        top: 95px;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;

        background: #01C253;
        border-radius: 0 5px 5px 0;
        box-shadow: 0 0 10px rgba(0,0,0,.15);

        font-size: 2rem;

        z-index: 20;
    }
`

export const AsideMobile = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    min-height: 100%;
    padding: 20px;

    background: #122330;

    text-align: right;

    z-index: 15;
`

export const FooterLayout = styled.footer`
    width: 100%;
    height: 80px;

    background: #152937;
`