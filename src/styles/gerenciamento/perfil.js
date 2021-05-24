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

export const ProfileSection = styled.section`
    margin-bottom: 40px;

    .title {
        h3 {
            margin-bottom: 20px;

            font-size: 2.6rem;
            line-height: 3.4rem;
            color: rgba(255,255,255,.8);
        }
    }

    .content {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .card {
            .title {
                display: block;
                margin-bottom: 5px;

                font-size: 1.2rem;
                line-height: 1.6rem;
                font-weight: 800;
            }

            .description {
                display: block;

                font-size: 1.2rem;
                line-height: 1.6rem;
            }
        }
    }
`

export const Options = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;

    .edit-btn a {
        padding: 10px 30px;

        background: #1C15C2;
        border-radius: 5px;

        font-size: 1.4rem;
        font-weight: 800;
        color: #fff;
        text-decoration: none;

        svg {
            margin-right: 5px;
        }
    }

    .exclude-btn a {
        padding: 10px 30px;

        background: #C22115;
        border-radius: 5px;

        font-size: 1.4rem;
        font-weight: 800;
        color: #fff;
        text-decoration: none;

        svg {
            margin-right: 5px;
        }
    }
`