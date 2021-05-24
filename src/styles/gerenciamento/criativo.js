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

export const Content = styled.div`
    form {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: flex-end;

        .input {
            label {
                display: block;

                font-size: 1.2rem;
                line-height: 2rem;
                font-weight: 700;
                color: rgba(255,255,255,.6);
            }

            input[type="text"], input[type="email"], input[type="url"] {
                width: 100%;
                height: 40px;
                padding: 10px 20px;
                margin-top: 5px;

                background: transparent;
                border-radius: 5px;
                border: 1px solid rgba(255,255,255,.4);

                font-size: 1.2rem;
                font-weight: 700;
                color: rgba(255,255,255,.6);
            }

            select {
                width: 100%;
                height: 40px;
                padding: 10px 20px;
                margin-top: 5px;

                background: transparent;
                border-radius: 5px;
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

            button {
                width: 100%;
                height: 40px;

                background: #01C253;
                border-radius: 5px;
                border: none;

                appearance: none;
                cursor: pointer;

                font-size: 1.4rem;
                font-weight: 700;
                color: rgba(255,255,255,.8);
            }
        }
    }

    @media screen and (max-width: 768px) {
        form {
            grid-template-columns: repeat(1, 1fr);
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

    table tr td a {
        position: relative;

        color: rgba(255,255,255,.8);
        font-weight: 700;
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
                left: -50%;

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

        td:nth-of-type(1):before { content: "Data"; }
        td:nth-of-type(2):before { content: "Título"; }
        td:nth-of-type(3):before { content: "Descrição"; }
        td:nth-of-type(4):before { content: "Link do Arquivo"; }
        td:nth-of-type(5):before { content: "Status"; }
        td:nth-of-type(6):before { content: "Ações"; }
    }
`