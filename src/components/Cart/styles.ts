    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    `

    export const CartContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: #e66767; // Fundo da barra lateral é coral/vermelho igual ao print
    padding: 32px 8px;
    z-index: 101;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    `

    export const CartItem = styled.div`
    display: flex;
    background-color: #fff8f2; // Card do prato é bege/claro
    padding: 8px;
    margin-bottom: 16px;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        color: #e66767; // Texto do título em coral
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 8px;
        margin-top: 0;
    }

    p {
        color: #e66767; // Texto do preço em coral
        font-size: 14px;
        font-weight: 400;
        margin: 0;
    }

    button {
    position: absolute;
    bottom: 8px; /* Posiciona no canto inferior */
    right: 8px;  /* Posiciona no canto direito */
    width: 16px;   /* Largura exata do Figma */
    height: 16px;  /* Altura exata do Figma */
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;    /* Opacidade 1 conforme especificado */
    transition: transform 0.2s ease;

    img {
        width: 16px;        /* Força o SVG interno a ter 16px */
        height: 16px;       /* Força o SVG interno a ter 16px */
        object-fit: contain; /* Garante que a lixeira não fique distorcida ou esticada */
        display: block;
    }

    &:hover {
        transform: scale(1.05); /* Um feedback bem sutil ao passar o mouse */
    }
}
    `

    export const ItemList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
        margin-bottom: 0;
    }
    `

    export const EmptyMessage = styled.p`
    color: #fff8f2;
    text-align: center;
    margin: 0;
    `

    export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff8f2; // Texto "Valor total" em bege claro
    font-weight: 700;
    font-size: 14px;
    margin-top: 24px;
    margin-bottom: 16px;
    `

    export const CheckoutButton = styled.button`
    background-color: #fff8f2; // Botão de entrega em bege claro
    color: #e66767; // Texto do botão em coral
    border: none;
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    `