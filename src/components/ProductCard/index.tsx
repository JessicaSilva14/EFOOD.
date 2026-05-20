    import { CardContainer, Title, Description, AddButton } from './styles'

    interface ProductProps {
    image: string
    title: string
    description: string
    }

    export const ProductCard = ({ image, title, description }: ProductProps) => {
    return (
        <CardContainer>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <AddButton>Adicionar ao carrinho</AddButton>
        </CardContainer>
    )
    }