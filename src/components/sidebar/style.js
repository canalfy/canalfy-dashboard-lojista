import styled from 'styled-components'

export const GroupArea = styled.div`
    width: 100%;
    margin: 40px 0;
`

export const TitleBar = styled.div`
    display: block;
    margin-bottom: 20px;
    
    color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 700;
    letter-spacing: .15rem;
    text-transform: uppercase;
`

export const Menu = styled.nav`
    li {
        width: 100%;
        height: 40px;
        margin: 5px 0;

        list-style: none;
        cursor: pointer;
        z-index: 0;

        a {
            display: block;
            font-size: 1.4rem;
            line-height: 4rem;
            letter-spacing: .05rem;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.8);
        }

        transition: transform .5s ease-in-out, color .25s ease-in-out;

        &:hover {
            color: rgba(255, 255, 255, 1);

            transform: translateX(10px);

            transition: transform .5s ease-in-out, color .25s ease-in-out;
        }
    }    
`

