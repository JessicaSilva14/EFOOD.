    import styled from 'styled-components'
    import { colors } from '../../styles/global'

    export const FooterContainer = styled.footer`
    background-color: ${colors.bgFooter};
    padding: 40px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    `

    export const SocialLinks = styled.div`
    display: flex;
    gap: 8px;
    margin: 32px 0 80px 0;

    a {
        transition: opacity 0.2s ease;
        display: inline-block;
        width: 24px;
        height: 24px;

        &:hover {
        opacity: 0.75;
        }

        img {
        width: 100%;
        height: 100%;
        }
    }
    `

    export const FooterText = styled.p`
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    max-width: 480px;
    color: ${colors.textPrimary};
    `