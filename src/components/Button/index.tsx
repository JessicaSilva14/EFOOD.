    import styled from 'styled-components'
    import { colors } from '../../styles/global'

    export const ButtonContainer = styled.button`
    background-color: ${colors.textPrimary};
    color: ${colors.bgLight};
    border: none;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    `

    type Props = {
    children: string
    onClick?: () => void
    }

    export const Button = ({ children, onClick }: Props) => {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    }