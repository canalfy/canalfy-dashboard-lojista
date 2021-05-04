import styled from 'styled-components'

export const BarArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80px;

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
    
`