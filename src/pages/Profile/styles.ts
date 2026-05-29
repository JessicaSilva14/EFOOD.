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

export const LoadingMessage = styled.h3`
    text-align: center;
    padding: 20px;
    color: #333;
    font-weight: 700;
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

    export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    `

    export const ModalContent = styled.div`
    background-color: #E66767;
    color: #FFEED2;
    padding: 32px;
    max-width: 1024px;
    width: 90%;
    position: relative;
    `

    export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 16px;
    background: none;
    border: none;
    color: #FFEED2;
    font-size: 24px;
    cursor: pointer;
    `

    export const ModalFlex = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    img {
        width: 360px;
        height: 360px;
        object-fit: cover;
        border-radius: 4px;

        @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        }
    }

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 24px;
    }

    .porcao {
        font-weight: bold;
        margin-bottom: 16px;
    }

    .add-cart {
        background-color: #FFEED2;
        color: #E66767;
        border: none;
        padding: 8px 12px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }
    `