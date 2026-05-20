    import { createGlobalStyle } from 'styled-components'

    export const colors = {
    textPrimary: '#E66767',   // Vermelho/Rosa característico do efood
    bgLight: '#FFF8F2',       // Fundo geral bege bem claro
    bgCard: '#FFFFFF',        // Fundo branco dos cards
    bgFooter: '#FFEBD6',      // Bege mais escuro usado nos fundos e botões secundários
    white: '#FFFFFF'
    }

    export const GlobalStyle = createGlobalStyle`
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
        width: 95%;
        }
    }
    `