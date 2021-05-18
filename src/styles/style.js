import styled from 'styled-components'

export const TitleArea = styled.div`
    margin: 40px 0;

    h2 {
        font-size: 4.2rem;
        line-height: 6rem;
        color: rgba(255,255,255,.8);
    }

    span {
        display: block;

        font-size: 1.4rem;
        line-height: 2rem;
        letter-spacing: .05rem;
        color: rgba(255,255,255,.8);
    }
`

export const OverviewArea = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 20px;

    .boxOne {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #2EC76E;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 10px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.2rem;
            line-height: 1.8rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .value {
            display: block;
            
            color: rgba(255, 255, 255, 1);
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .boxTwo {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #01C253;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 10px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.2rem;
            line-height: 1.8rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .value {
            display: block;
            
            color: rgba(255, 255, 255, 1);
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .boxThree {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #03A346;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 10px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.2rem;
            line-height: 1.8rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .value {
            display: block;
            
            color: rgba(255, 255, 255, 1);
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .boxFour {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #086930;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 10px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.2rem;
            line-height: 1.8rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .value {
            display: block;
            
            color: rgba(255, 255, 255, 1);
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .boxFive {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #086930;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 10px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.2rem;
            line-height: 1.8rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .value {
            display: block;
            
            color: rgba(255, 255, 255, 1);
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .boxSix {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #086930;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 10px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.2rem;
            line-height: 1.8rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .value {
            display: block;
            
            color: rgba(255, 255, 255, 1);
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        height: auto;

        .title {
            font-size: 1rem !important;
            line-height: 1.2rem !important;
        }

        .value {
            font-size: 2rem !important;
            line-height: 2.6rem !important;
        }
    }

    @media screen and (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`

export const DoubleBox = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    .boxOne, .boxTwo {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #152937;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 5px;
            
            color: rgba(255, 255, 255, 1);
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: 700;
            letter-spacing: .15rem;
            text-transform: uppercase;
        }

        .description {
            display: block;
            margin-bottom: 40px;
            
            color: rgba(255, 255, 255, .8);
            font-size: 1.2rem;
            line-height: 1.8rem;
            letter-spacing: .15rem;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const LoginBox = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    background: #0e1b25;

    .login-form {
        width: 385px;
        max-width: 385px;
        padding: 40px;
        margin: 40px 0;

        background: #152937;
        box-shadow: 0 0 20px rgba(0,0,0,.15);
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,.05);

        h1 {
            margin-bottom: 20px;

            font-size: 2.4rem;
            font-weight: 700;
            line-height: 3.2rem;
            text-align: center;
        }

        label {
            display: block;

            font-size: 1.2rem;
            font-weight: 700;
            line-height: 2rem;
            letter-spacing: .025rem;
            text-transform: uppercase;
            color: rgba(255,255,255,.6);
        }

        input {
            width: 100%;
            height: 40px;
            padding: 20px;
            margin: 5px 0 10px;

            background: rgba(14, 27, 37, .25);
            border: 1px solid rgba(14, 27, 37, .5);
            border-radius: 5px;

            font-size: 1.2rem;
            letter-spacing: .025rem;
            color: rgba(255,255,255,.6);
        }

        button {
            width: 100%;
            height: 60px;
            margin-top: 10px;

            cursor: pointer;
            appearance: none;
            -o-appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;

            background: #01C253;
            border: none;
            border-radius: 5px;

            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: .025rem;
            color: #fff;
        }

        span {
            display: block;
            margin-top: 10px;
            
            text-align: right;

            a {
                font-size: 1.2rem;
                line-height: 2rem;
                letter-spacing: .025rem;
                text-decoration: none;
                color: #fff;
            }
        }
    }

    .login-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;

        span {
            font-size: 1.2rem;
            line-height: 1.8rem;
            letter-spacing: .05rem;

            a {
                position: relative;

                font-weight: 700;
                color: #01C253;
                text-decoration: none;

                &:before {
                    position: absolute;
                    left: 0;
                    bottom: -2px;

                    content: '';

                    width: 0;
                    height: 2px;

                    background: #01C253;

                    transition: width .5s ease-in-out;
                }

                &:hover:before {
                    width: 100%;

                    transition: width .5s ease-in-out;
                }
            }
        }
    }
`