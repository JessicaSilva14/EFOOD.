    import styled from 'styled-components'
    import { colors } from '../../styles/global'

    interface ButtonProps {
    variant: 'primary' | 'secondary'
    children: string
    onClick?: () => void
    }

    const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props) => props.variant === 'primary' ? colors.textNeutral : colors.bgFooter};
    color: ${(props) => props.variant === 'primary' ? colors.bgFooter : colors.textNeutral};
    border: none;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    width: ${(props) => props.variant === 'secondary' ? '100%' : 'auto'};
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
    `

    export const Button = ({ variant, children, onClick }: ButtonProps) => (
    <StyledButton variant={variant} onClick={onClick}>
        {children}
    </StyledButton>
    )