import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* poppins-regular - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/poppins-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* poppins-italic - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/poppins-v15-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* poppins-800 - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/poppins-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* poppins-800italic - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-800italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

	// Alterar estilos conforme desejado
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        font-size: 10px;
        line-height: 10px;
        font-family: 'Poppins';
        color: rgba(255, 255, 255, 0.85);

        background: #0e1b25;

        overflow-x: hidden;
    }

    html, body, #__next {
        height: 100%;
    }

    .success {
        padding: 5px 15px;

        background: #01C253;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }

    .error {
        padding: 5px 15px;

        background: #C22115;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }

    .att {
        padding: 5px 15px;

        background: #C2A30C;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }

    .obs {
        padding: 5px 15px;

        background: #1C15C2;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }
`

export default GlobalStyle