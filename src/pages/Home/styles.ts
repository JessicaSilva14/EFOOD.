        import styled from 'styled-components'
        import { colors } from "../../styles/global";
        import fundoHeader from '../../assets/fundo_header.png' // Imagem vetorial de fundo do figma

        export const HeroElement = styled.header`
    background-image: url(${fundoHeader});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 64px 0 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 36px;
        font-weight: 900;
        line-height: 42px;
        color: ${colors.textPrimary};
        max-width: 539px;
        margin-top: 138px;
        width: 100%;
    }
    `

        export const RestaurantsSection = styled.main`
        padding: 80px 0;
        `

        export const ListGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 80px;
        row-gap: 48px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            row-gap: 32px;
        }
        `