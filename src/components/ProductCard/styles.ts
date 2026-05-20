    import styled from 'styled-components'
    import { colors } from '../../styles/global'

    export const CardContainer = styled.div`
    background-color: ${colors.textPrimary};
    color: ${colors.bgFooter};
    padding: 8px;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 167px;
        object-fit: cover;
        display: block;
        margin-bottom: 8px;
    }
    `

    export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
    `

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
    flex-grow: 1; /* Garante que os botões fiquem alinhados embaixo */
    `

    export const AddButton = styled.button`
    background-color: ${colors.bgFooter};
    color: ${colors.textPrimary};
    border: none;
    width: 100%;
    padding: 4px 0;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
    `