    import styled from 'styled-components'
    import { Link } from 'react-router-dom'
    import fundoHeader from '../../assets/fundo_header.png'

    export const HeaderBar = styled.header`
    background-image: url(${fundoHeader});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 64px 0;
    display: flex;
    align-items: center;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    `

    export const LinkRestaurantes = styled(Link)`
    color: #E66767; /* Cor oficial do efood direto aqui para evitar erros */
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    `

    export const TextCarrinho = styled.span`
    color: #E66767; /* Cor oficial do efood */
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    `

    export const Banner = styled.div<{ bgImage: string }>`
    width: 100%;
    height: 280px;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
    }

    .container {
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    p {
        font-size: 32px;
        font-weight: 100;
        color: #fff;
    }

    h2 {
        font-size: 32px;
        font-weight: 900;
        color: #fff;
    }
    `

    export const MenuSection = styled.main`
    padding: 56px 0 120px 0;
    `

    export const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    `