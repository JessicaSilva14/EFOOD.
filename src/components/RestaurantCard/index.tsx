    import { Link } from 'react-router-dom'
    import { Card, ImageContainer, Infos, Tag, Content, CardHeader, Description, ButtonLink } from './styles'
    import estrela from '../../assets/estrela.svg'

    interface Props {
    id: number
    title: string
    rating: string
    description: string
    image: string
    tags: string[]
    }

    export const RestaurantCard = ({ id, title, rating, description, image, tags }: Props) => {
    return (
        <Card>
        <ImageContainer>
            <img src={image} alt={title} />
            <Infos>
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
            </Infos>
        </ImageContainer>
        <Content>
            <CardHeader>
            <h3>{title}</h3>
            <div>
                <span>{rating}</span>
                <img src={estrela} alt="Estrela" />
            </div>
            </CardHeader>
            <Description>{description}</Description>
            <Link to={`/perfil/${id}`}>
            <ButtonLink>Saiba mais</ButtonLink>
            </Link>
        </Content>
        </Card>
    )
    }