import styled from 'styled-components'

export const BarArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 0 20px;
`

export const LogoArea = styled.div``

export const UserArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const MessageMenu = styled.div`
    margin-right: 10px;

    svg {
        width: auto !important;
    }

    .svg-inline--fa {
        height: 15px !important;
    }
`

export const UserMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-left: 10px;

    background: #01C253;
    border-radius: 5px;

    svg {
        width: auto !important;
    }

    .svg-inline--fa {
        height: 15px !important;
    }
`
