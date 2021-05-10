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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 40px 0;

    .plan {
        width: 300px;
        max-width: 300px;
        margin: 0 10px;

        border: 1px solid rgba(255,255,255,.1);
        border-radius: 5px;

        text-align: center;

        &:first-child {
            margin-left: 0;
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;

            background: #152937;

            h3 {
                font-size: 2.6rem;
                line-height: 3.2rem;
                letter-spacing: .05rem;
            }
        }

        .list {
            width: 100%;
            padding: 40px 20px;

            li {
                width: 100%;
                padding: 20px 0;

                border-bottom: 1px dashed rgba(255,255,255,.2);
                list-style: none;

                font-size: 1.4rem;
                line-height: 2rem;
                color: rgba(255,255,255,.8);
            }
        }

        .price {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;

            span {
                font-size: 2.2rem;
                line-height: 3rem;
                font-weight: 700;

                small {
                    font-size: 1.4rem;
                    font-weight: 400;
                }
            }
        }

        .btn {
            width: 100%;
            height: 60px;

            button {
                width: 100%;
                height: 60px;

                background: #01C253;
                border: none;
                border-radius: 5px;

                cursor: pointer;
                appearance: none;
                -o-appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;

                font-size: 1.6rem;
                font-weight: 700;
                color: rgba(255,255,255,1);
            }
        }

        &.active button {
            opacity: .15;
            cursor: not-allowed;
        }
    }
`