    import { createGlobalStyle } from 'styled-components'

    // Aqui estão TODAS as cores que o seu projeto precisa para não dar erro
    export const colors = {
    textPrimary: '#E66767',
    textNeutral: '#E66767', // Adicionado para o Button encontrar
    bgPrimary: '#FFF8F2',   // Adicionado para o fundo encontrar
    bgLight: '#FFF8F2',
    bgCard: '#E66767',
    bgFooter: '#3B3B3B',
    white: '#FFFFFF'
    }

    export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${colors.bgLight};
        color: ${colors.textPrimary};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: 1024px) {
        max-width: 80%;
        }
    }
    ` 