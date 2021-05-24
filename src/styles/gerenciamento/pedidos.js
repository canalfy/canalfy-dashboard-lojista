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
        .export-btn {
            padding: 10px 20px;

            background: #01C253;
            border-radius: 5px;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 800;

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

export const TabArea = styled.div`
    margin: 40px 0;

    table {
        width: 100%;
    }

    table tr {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
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
            line-height: 3rem;
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

        td:nth-of-type(1):before { content: "Código"; }
        td:nth-of-type(2):before { content: "Data"; }
        td:nth-of-type(3):before { content: "Parceiro Responsável"; }
        td:nth-of-type(4):before { content: "Cliente"; }
        td:nth-of-type(5):before { content: "Forma de Pagamento"; }
        td:nth-of-type(6):before { content: "Data de Pagamento"; }
        td:nth-of-type(7):before { content: "Cupom"; }
        td:nth-of-type(8):before { content: "Status"; }
        td:nth-of-type(9):before { content: "Valor"; }
        td:nth-of-type(10):before { content: "Ações"; }
    }
`