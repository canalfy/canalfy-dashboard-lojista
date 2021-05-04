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
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    margin-bottom: 20px;

    .boxOne {
        width: 100%;
        height: 100%;
        padding: 20px;

        background: #2EC76E;
        border-radius: 5px;

        .title {
            display: block;
            margin-bottom: 20px;
            
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
            font-size: 2.8rem;
            line-height: 3.2rem;
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
            margin-bottom: 20px;
            
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
            font-size: 2.8rem;
            line-height: 3.2rem;
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
            margin-bottom: 20px;
            
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
            font-size: 2.8rem;
            line-height: 3.2rem;
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
            margin-bottom: 20px;
            
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
            font-size: 2.8rem;
            line-height: 3.2rem;
            font-weight: 700;
            text-transform: uppercase;
        }
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
`