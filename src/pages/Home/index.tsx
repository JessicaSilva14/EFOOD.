    import { HeroElement, RestaurantsSection, ListGrid } from './styles'
    import { RestaurantCard } from '../../components/RestaurantCard'
    import { Footer } from '../../components/Footer'
    import logo from '../../assets/logo.svg'

    import fotoSushi from '../../assets/sushi.png'
    import fotoMassa from '../../assets/massa.png'

    export const Home = () => {
    const restaurantes = [
        {
        id: 1,
        title: 'Hioki Sushi',
        rating: '4.9',
        category: 'Japonesa',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        image: fotoSushi,
        tags: ['Destaque da semana', 'Japonesa']
        },
        {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        rating: '4.6',
        category: 'Italiana',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: fotoMassa,
        tags: ['Italiana']
        },
        {
        id: 3,
        title: 'Burger & Co.',
        rating: '4.7',
        category: 'Hamburguer',
        description: 'Hambúrgueres artesanais grelhados no fogo forte, queijo derretido e pão brioche selado na manteiga. Acompanha nossas batatas rústicas especiais.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
        tags: ['Hamburguer']
        },
        {
        id: 4,
        title: 'Cantina do Bráz',
        rating: '4.6',
        category: 'Pizzaria',
        description: 'Pizzas de longa fermentação assadas em forno de alta temperatura. Bordas altas, muçarela premium e ingredientes tradicionais da melhor qualidade.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80',
        tags: ['Pizzaria']
        },
        {
        id: 5,
        title: 'Green Salad & Co.',
        rating: '4.5',
        category: 'Saudável',
        description: 'Pratos leves, coloridos e cheios de sabor. Saladas completas, wraps e bowls nutritivos preparados com ingredientes 100% orgânicos de produtores locais.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        tags: ['Saudável']
        },
        {
        id: 6,
        title: 'Porto do Bacalhau',
        rating: '4.9',
        category: 'Portuguesa',
        description: 'O melhor da culinária autêntica portuguesa. Bacalhau nobre preparado em lascas com azeite extra virgem, batatas ao murro, azeitonas e pimentões.',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80',
        tags: ['Destaque da semana', 'Portuguesa']
        }
    ]

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
            {restaurantes.map((restaurante) => (
                <RestaurantCard
                key={restaurante.id}
                id={restaurante.id} // <-- ISSO AQUI QUE SIGNIFICA "PASSA A PROPRIEDADE ID"
                title={restaurante.title}
                rating={restaurante.rating}
                description={restaurante.description}
                image={restaurante.image}
                tags={restaurante.tags}
                />
            ))}
            </ListGrid>
        </RestaurantsSection>

        <Footer />
        </>
    )
    }