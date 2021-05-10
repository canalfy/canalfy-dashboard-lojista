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
        font-size: 4.2rem;
        line-height: 6rem;
        color: rgba(255,255,255,.8);
    }
`

export const FilterArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;

    .filters {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .input:first-child {
            margin-right: 10px;
        }

        .input:last-child {
            margin-left: 10px;
        }

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
        svg {
            width: auto !important;

            cursor: pointer;
        }

        .svg-inline--fa {
            height: 15px !important;
        }
    }

    @media screen and (max-width: 768px) {
        display: block;

        .filters {
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

    table tbody tr {
        &:hover {
            background: rgba(255, 255, 255, 0.05);

            cursor: pointer;
        }
    }

    table tr th, table tr td {
        font-size: 1.2rem;
        text-align: left;
    }

    .actions {
        position: relative;

        .options {
            position: absolute;
            top: 20px;
            left: 0;
            padding: 20px;

            background: #152937;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,.15);

            z-index: 20;

            li {
                list-style: none;
            }

            a {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        overflow-x: scroll;
        min-width: 100vh;

        table {
            min-width: 100%;
        }

        table tr th, table tr th {
            min-width: 150px;
        }
    }
`