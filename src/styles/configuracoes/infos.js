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

export const MenuArea = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;

    li {
        margin: 20px;

        list-style: none;

        &:first-child {
            margin-left: 0;
        }

        a {
            position: relative;

            font-size: 1.4rem;
            line-height: 2rem;
            color: rgba(255,255,255,.8);
            text-decoration: none;
            letter-spacing: .025rem;

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

            input[type="text"], input[type="email"], input[type="tel"], input[type="password"] {
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
`