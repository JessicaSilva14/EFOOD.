    import { useState, useEffect } from 'react'
    import { HeroElement, RestaurantsSection, ListGrid } from './styles'
    import { RestaurantCard } from '../../components/RestaurantCard'
    import { Footer } from '../../components/Footer'
    import logo from '../../assets/logo.svg'

    // Interface para sabermos o que vem da API do restaurante
    interface RestauranteAPI {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    }

    export const Home = () => {
    // Criamos um estado para guardar os restaurantes que vêm da API
    const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])

    // Buscamos os dados da API assim que a tela carrega
    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data) => setRestaurantes(data))
        .catch((err) => console.error('Erro ao carregar restaurantes da Home:', err))
    }, [])

    return (
        <>
        <HeroElement>
            <img src={logo} alt="efood" />
            <h1>
            Viva a gastronomia <br /> no conforto da sua casa
            </h1>
        </HeroElement>

        <RestaurantsSection className="container">
            <ListGrid>
            {/* Mapeamos os dados vindos direto da API */}
            {restaurantes.map((restaurante) => {
                // Criamos as tags dinamicamente baseadas no tipo do restaurante
                const tags = [restaurante.tipo]
                if (restaurante.destacado) {
                tags.unshift('Destaque da semana')
                }

                return (
                <RestaurantCard
                    key={restaurante.id}
                    id={restaurante.id} // Agora o ID vem certinho da API!
                    title={restaurante.titulo}
                    rating={restaurante.avaliacao.toString()}
                    description={restaurante.descricao}
                    image={restaurante.capa}
                    tags={tags}
                />
                )
            })}
            </ListGrid>
        </RestaurantsSection>

        <Footer />
        </>
    )
    }