import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	// Alterar estilos conforme desejado
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 10px;
        line-height: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgba(255, 255, 255, 0.85);

        background: #0e1b25;

        overflow-x: hidden;
    }

    html, body, #__next {
        height: 100%;
    }
`

export default GlobalStyle