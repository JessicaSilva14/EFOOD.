    import { FooterContainer, SocialLinks, FooterText } from './styles'
    import logo from '../../assets/logo.svg'
    import instagram from '../../assets/instagram.svg'
    import facebook from '../../assets/facebook.svg'
    import twitter from '../../assets/twitter.svg'

    export const Footer = () => {
    return (
        <FooterContainer>
        <img src={logo} alt="efood" />

        <SocialLinks>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
            </a>
        </SocialLinks>

        <FooterText>
            A efood é uma plataforma para delimitação de estabelecimentos, a responsabilidade pela
            entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
        </FooterContainer>
    )
    }
