import styled from 'styled-components'

export const BarArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 0 20px;

    @media screen and (max-width: 520px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
`

export const LogoArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        cursor: pointer;
    }

    @media screen and (max-width: 520px) {
        margin-bottom: 20px;
    }
`

export const UserArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const MessageMenu = styled.div`
    margin-right: 10px;

    cursor: pointer;

    svg {
        width: auto !important;
    }

    .svg-inline--fa {
        height: 15px !important;
    }
`

export const UserMenu = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-left: 10px;

    background: #01C253;
    border-radius: 5px;

    button {
        width: 40px;
        height: 40px;
        padding: 0;
        margin: 0;

        background: transparent;
        border: none;

        appearance: none;
        -o-appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        cursor: pointer;

        color: #fff;
    }

    svg {
        width: auto !important;
    }

    .svg-inline--fa {
        height: 15px !important;
    }

    .submenu {
        position: absolute;
        top: 60px;
        right: 0;
        
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        max-width: 200px;
        width: 200px;
        height: auto;
        padding: 20px;

        background: #152937;
        border-radius: 0 0 5px 5px;

        li {
            margin: 10px 0;

            list-style: none;
            
            font-size: 1.2rem;
            line-height: 2rem;

            a {
                color: rgba(255,255,255,.8);
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width: 520px) {
        .submenu {
            left: 0;
        }
    }
`
