    import styled from 'styled-components'

        export const ButtonContainer = styled.button`
    background-color: #E66767; /* Fundo vermelho do botão */
    color: #FFF8F2;            /* Texto claro dentro do botão */
    border: none;
    padding: 6px 12px;         /* Espaçamento interno para ele ganhar corpo */
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;     /* Para ele respeitar o tamanho do texto e não sumir */
    margin-top: 8px;           /* Afastar o botão do texto de cima */
    `

    type Props = {
    children: string
    onClick?: () => void
    }

    export const Button = ({ children, onClick }: Props) => {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    }