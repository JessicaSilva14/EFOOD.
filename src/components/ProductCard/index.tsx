import { CardContainer, Title, Description, AddButton } from './styles'

interface ProductProps {
    image: string
    title: string
    description: string
    onButtonClick: () => void // O "fio" do clique está declarado aqui
    }

    // 1. O 'onButtonClick' foi adicionado bem aqui nos parênteses para o componente usar ele:
    export const ProductCard = ({ image, title, description, onButtonClick }: ProductProps) => {
    return (
        <CardContainer>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        
        {/* 2. Adicionamos o onClick={onButtonClick} aqui para o botão escutar o clique: */}
        <AddButton onClick={onButtonClick}>Adicionar ao carrinho</AddButton>
        </CardContainer>
    )
    }