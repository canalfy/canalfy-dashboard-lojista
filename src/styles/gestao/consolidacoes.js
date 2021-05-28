import styled from 'styled-components'

export const TitleArea = styled.div`
    margin: 40px 0;

    .breadcrumb {
        font-size: 1.2rem;
        line-height: 2rem;
        color: rgba(255,255,255,.4);

        a {
            position: relative;

            color: rgba(255,255,255,.8);
            text-decoration: none;

            &:before {
                position: absolute;
                bottom: -2px;
                left: 0;

                content: '';

                width: 0;
                height: 2px;

                background: rgba(255,255,255,.8);

                transition: width .5s ease-in-out;
            }

            &:hover:before {
                width: 100%;

                transition: width .5s ease-in-out;
            }
        }
    }

    h2 {
        margin-bottom: 20px;

        font-size: 4.2rem;
        line-height: 6rem;
        color: rgba(255,255,255,.8);
    }

    p {
        font-size: 1.4rem;
        line-height: 2rem;
    }
`

export const FilterArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;

    .orders {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .input label {
            display: block;

            font-size: 1.2rem;
            line-height: 2rem;
            font-weight: 700;
            color: rgba(255,255,255,.6);
        }

        .input select {
            padding: 10px 20px;
            margin-top: 5px;

            background: transparent;
            border: 1px solid rgba(255,255,255,.4);

            font-size: 1.2rem;
            font-weight: 700;
            color: rgba(255,255,255,.6);

            option {
                background: #0e1b25;

                font-size: 1.2rem;
                font-weight: 700;
                color: rgba(255,255,255,.6);
            }
        }
    }

    .download {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;

        .export-btn {
            padding: 10px 20px;

            background: #01C253;
            border-radius: 5px;
            border: 1px solid #01C253;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 800;
            letter-spacing: .05rem;

            cursor: pointer;

            svg {
                width: auto !important;
                margin-left: 5px;
            }

            .svg-inline--fa {
                height: 15px !important;
            }
        }

        .filter-trigger {
            padding: 10px 20px;

            background: #0e1b25;
            border-radius: 5px;
            border: 1px solid #01C253;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 800;
            letter-spacing: .05rem;

            cursor: pointer;

            svg {
                width: auto !important;
                margin-left: 5px;
            }

            .svg-inline--fa {
                height: 15px !important;
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: block;

        .orders {
            margin-bottom: 20px;
        }
    }
`

export const FilterBox = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    background: rgba(14,24,37,.95);

    z-index: 50;

    display: none;

    &.active-box {
        display: flex;
    }

    .filter-wrap {
        position: relative;

        width: 580px;
        max-width: 580px;
        height: auto;
        padding: 40px 20px;

        background: #0e1b25;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0,0,0,.25);

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;

            h4 {
                font-size: 2.4rem;
                line-height: 2rem;
                letter-spacing: .05rem;
            }

            svg {
                cursor: pointer;
            }
        }

        .form {
            .input {
                display: grid;
                grid-template-columns: 1fr 2fr;
                align-items: center;
                justify-content: flex-start;
                gap: 20px;
                margin-bottom: 20px;

                label, p {
                    font-size: 1.2rem;
                    line-height: 2rem;
                    font-weight: 400;
                    color: rgba(255,255,255,.6);
                }

                input, select {
                    padding: 10px 20px;
                    margin-top: 5px;

                    background: transparent;
                    border: 1px solid rgba(255,255,255,.4);

                    font-family: 'Poppins';
                    font-size: 1rem;
                    font-weight: 400;
                    color: rgba(255,255,255,.6);
                }

                option {
                    background: #0e1b25;

                    font-family: 'Poppins';
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: rgba(255,255,255,.6);
                }

                .date-picker {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                }

                .radio-options {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 20px;

                    div {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 5px;

                        input {
                            width: 15px;
                            height: 15px;
                        }
                    }
                }
            }

            .buttons {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 20px;
                margin-top: 40px;

                button, span {
                    padding: 10px 25px;

                    background: inherit;
                    border: none;
                    border-radius: 5px;

                    appearance: none;
                    cursor: pointer;

                    font-size: 1.2rem;
                    font-weight: 700;
                    letter-spacing: .05rem;
                    font-family: 'Poppins';
                    color: #fff;

                    svg {
                        margin-right: 5px;
                    }
                }

                .close-btn {
                    background: #C22115;
                }

                .submit-btn {
                    background: #01C253;
                }
            }
        }
    }
`

export const TabArea = styled.div`
    margin: 40px 0;

    table {
        width: 100%;
    }

    table tr {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
        justify-content: center;
        align-items: center;
        height: 40px;
    }

    table tr th, table tr td {
        font-size: 1.2rem;
        line-height: 1.6rem;
        text-align: left;
    }

    .actions {
        display: flex;
        gap: 10px;

        .ico-action {
            position: relative;

            cursor: pointer;

            svg {
                width: auto !important;
                height: 13px;
            }

            .tooltip {
                position: absolute;
                top: -25px;
                left: 0;

                padding: 5px 15px;

                content: '';

                background: #fff;
                border-radius: 15px;

                color: #212121;

                display: none;
            }

            &:hover .tooltip {
                display: block;
            }
        }
    }

    @media screen and (max-width: 768px) {
        table tr {
            display: block;
            height: auto;
            padding: 20px 0;
        }

        table, thead, tbody, th, td, tr { 
            display: block; 
        }

        thead tr { 
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        td {
            border: none;
            position: relative;
            padding-left: 50%;
            height: 40px;
            line-height: 4rem;
        }

        td:before { 
            position: absolute;
            top: 0;
            left: 6px;
            width: 45%; 
            padding-right: 10px; 
            white-space: nowrap;
            font-weight: bold;
        }

        td:nth-of-type(1):before { content: "Nome do Parceiro"; }
        td:nth-of-type(2):before { content: "Código do Pedido"; }
        td:nth-of-type(3):before { content: "Data"; }
        td:nth-of-type(4):before { content: "Valor do Pedido"; }
        td:nth-of-type(5):before { content: "Valor da Comissão"; }
        td:nth-of-type(6):before { content: "Status do Pedido"; }
        td:nth-of-type(7):before { content: "Status da Comissão"; }
        td:nth-of-type(8):before { content: "Comprovante"; }
        td:nth-of-type(9):before { content: "Ações"; }
    }
`