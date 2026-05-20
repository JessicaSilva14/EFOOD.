    import styled from 'styled-components'
    import { colors } from '../../styles/global'

    export const ButtonContainer = styled.button`
    background-color: ${colors.textPrimary};
    color: ${colors.bgLight};
    border: none;
    padding: 4px 0;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    display: block;
    text-align: center;
    `

    type Props = {
    children: string
    onClick?: () => void
    }

    export const Button = ({ children, onClick }: Props) => {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    }