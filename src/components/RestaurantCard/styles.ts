    import styled from 'styled-components'
    import { colors } from '../../styles/global'

    export const Card = styled.div`
    background-color: ${colors.bgCard};
    border: 1px solid ${colors.textPrimary};
    position: relative;
    `

    export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    
    img {
        width: 100%;
        height: 217px;
        object-fit: cover;
        display: block;
    }
    `

    export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
    `

    export const Tag = styled.span`
    background-color: ${colors.textPrimary};
    color: ${colors.bgLight};
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
    display: inline-block;
    `

    export const Content = styled.div`
    padding: 8px;
    `

    export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        font-weight: bold;
        
        img {
        width: 21px;
        height: 21px;
        }
    }
    `

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    `

    export const ButtonLink = styled.button`
    background-color: ${colors.textPrimary};
    color: ${colors.bgFooter};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
    `