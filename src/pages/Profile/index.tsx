    import { useParams } from 'react-router-dom'
    import { HeaderBar, Banner, MenuSection, MenuGrid, LinkRestaurantes, TextCarrinho } from './styles'
    import { ProductCard } from '../../components/ProductCard'
    import { Footer } from '../../components/Footer'
    import logo from '../../assets/logo.svg'

    // 1. IMPORTAÇÃO DAS IMAGENS DE APRESENTAÇÃO (BANNERS)
    import bannerSushi from '../../assets/sushi.png'
    import bannerMassa from '../../assets/massa.png'

    // 2. IMPORTAÇÃO DAS IMAGENS DOS CARDÁPIOS (PRATOS EXPORTADOS DO FIGMA)
    // Ajuste os nomes abaixo caso seus arquivos na pasta assets tenham outros nomes:
    import fotoPizza from '../../assets/pizza-marguerita.png' 

    const cardapiosPorRestaurante: Record<number, { 
    nome: string, 
    categoria: string, 
    imagem: string, 
    pratos: Array<{ id: number, nome: string, descricao: string, imagem: string }> 
    }> = {
    1: {
        nome: 'Hioki Sushi',
        categoria: 'Japonesa',
        imagem: bannerSushi, // Foto de apresentação local
        pratos: [
        { id: 101, nome: 'Combo Sushi Premium', descricao: 'Combinado com 20 peças variadas de salmão, atum e peixe branco frescos.', imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80' },
        { id: 102, nome: 'Temaki Completo', descricao: 'Cone de alga crocante recheado com arroz de sushi, salmão batido e cebolinha.', imagem: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=500&q=80' },
        { id: 103, nome: 'Uramaki Filadélfia', descricao: 'Roll invertido com gergelim, salmão grelhado e cream cheese premium.', imagem: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    2: {
        nome: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        imagem: bannerMassa, // Foto de apresentação local
        pratos: [
        { id: 201, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', imagem: fotoPizza },
        { id: 202, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', imagem: fotoPizza },
        { id: 203, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', imagem: fotoPizza },
        { id: 204, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', imagem: fotoPizza },
        { id: 205, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', imagem: fotoPizza },
        { id: 206, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', imagem: fotoPizza }
        ]
    },
    3: {
        nome: 'Burger & Co.',
        categoria: 'Hamburguer',
        imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
        pratos: [
        { id: 301, nome: 'Classic Burger', descricao: 'Blend artesanal de 180g, queijo cheddar derretido, alface, tomate e maionese da casa.', imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
        { id: 302, nome: 'Bacon Cheese', descricao: 'O clássico hambúrguer da casa coberto por fatias crocantes de bacon caramelizado.', imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80' },
        { id: 303, nome: 'Batata Rústica', descricao: 'Porção de batatas fritas com casca, temperadas com páprica defumada e alecrim.', imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    4: {
        nome: 'Cantina do Bráz',
        categoria: 'Pizzaria',
        imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
        pratos: [
        { id: 401, nome: 'Pizza Marguerita', descricao: 'Molho de tomate artesanal, muçarela premium, tomates frescos fatiados e manjericão.', imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80' },
        { id: 402, nome: 'Pizza Calabresa', descricao: 'Calabresa defumada especial, rodelas de cebola fresca e azeitonas pretas sobre muçarela.', imagem: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80' },
        { id: 403, nome: 'Pizza Quatro Queijos', descricao: 'Combinação perfeita de muçarela, catupiry original, provolone e um toque de gorgonzola.', imagem: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    5: {
        nome: 'Green Salad & Co.',
        categoria: 'Saudável',
        imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
        pratos: [
        { id: 501, nome: 'Salada Tropical', descricao: 'Mix de folhas verdes, manga em cubos, tomates cereja, castanhas e molho de mostarda.', imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80' },
        { id: 502, nome: 'Bowl de Quinoa', descricao: 'Quinoa real acompanhada de abacate amaciado, grão-de-bico grelhado e legumes assados.', imagem: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80' },
        { id: 503, nome: 'Wrap Integral de Frango', descricao: 'Pão folha integral recheado com tiras de frango grelhado, ricota cremosa e cenoura ralada.', imagem: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    6: {
        nome: 'Porto do Bacalhau',
        categoria: 'Portuguesa',
        imagem: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
        pratos: [
        { id: 601, nome: 'Bacalhau à Lagareiro', descricao: 'Posta nobre de bacalhau assada no azeite com batatas ao murro, alho fritinho e cebola.', imagem: 'https://images.unsplash.com/photo-1534080391025-a7f0e6d244a7?auto=format&fit=crop&w=500&q=80' },
        { id: 602, nome: 'Bolinho de Bacalhau', descricao: 'Porção com 6 unidades de bolinhos crocantes por fora e cremosos por dentro.', imagem: 'https://images.unsplash.com/photo-1541014741259-df5290dbb82e?auto=format&fit=crop&w=500&q=80' },
        { id: 603, nome: 'Pastel de Nata', descricao: 'O autêntico pastel de Belém com massa folhada crocante e recheio cremoso salpicado com canela.', imagem: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80' }
        ]
    }
    }

    export const Profile = () => {
    const { id } = useParams<{ id: string }>()
    const idRestaurante = id ? parseInt(id) : 1
    const dadosPerfil = cardapiosPorRestaurante[idRestaurante] || cardapiosPorRestaurante[1]

    return (
        <>
        <HeaderBar>
            <div className="container">
            <LinkRestaurantes to="/">Restaurantes</LinkRestaurantes>
            <img src={logo} alt="efood" />
            <TextCarrinho>0 produto(s) no carrinho</TextCarrinho>
            </div>
        </HeaderBar>

        <Banner bgImage={dadosPerfil.imagem}>
            <div className="container">
            <p>{dadosPerfil.categoria}</p>
            <h2>{dadosPerfil.nome}</h2>
            </div>
        </Banner>

        <MenuSection className="container">
            <MenuGrid>
            {dadosPerfil.pratos.map((prato) => (
                <ProductCard
                key={prato.id}
                title={prato.nome}
                description={prato.descricao}
                image={prato.imagem} // Passando exatamente o nome 'imagem' correto e alinhado!
                />
            ))}
            </MenuGrid>
        </MenuSection>

        <Footer />
        </>
    )
    }