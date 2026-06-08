import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' // Importações do Redux
import type { RootState } from '../../store' // Importação do tipo da sua Store
import { add, open } from '../../store/cartSlice' // Importação das Actions do seu Slice
import { Cart } from '../../components/Cart/index' // Importação do componente de Carrinho

import { HeaderBar, Banner, MenuSection, MenuGrid, LinkRestaurantes, TextCarrinho } from './styles'
import { ProductCard } from '../../components/ProductCard'
import { Footer } from '../../components/Footer'
import logo from '../../assets/logo.svg'

import * as S from './styles'

// Interface para o Prato da API
interface PratoAPI {
id: number
foto: string
preco: number
nome: string
descricao: string
porcao: string
}

// Interface para o Restaurante Completo da API
interface RestauranteAPI {
id: number
titulo: string
destacado: boolean
tipo: string
avaliacao: number
descricao: string
capa: string
cardapio: PratoAPI[]
}

export const Profile = () => {
const { id } = useParams<{ id: string }>()
const idRestaurante = id ? parseInt(id) : 1

const dispatch = useDispatch()
// Seleciona os itens que estão armazenados no estado global do Redux
const itemsCarrinho = useSelector((state: RootState) => state.cart.items)

// Estado para guardar os dados do restaurante atual vindos da API
const [restaurante, setRestaurante] = useState<RestauranteAPI | null>(null)
const [pratoModal, setPratoModal] = useState<PratoAPI | null>(null)

useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((data: RestauranteAPI[]) => {
        // Encontra o restaurante exato correspondente ao ID da URL
        const restauranteAtual = data.find((r) => r.id === idRestaurante)
        if (restauranteAtual) {
        setRestaurante(restauranteAtual)
        }
    })
    .catch((err) => console.error('Erro ao carregar dados do restaurante:', err))
}, [idRestaurante])

const handleOpenModal = (index: number) => {
    if (restaurante && restaurante.cardapio[index]) {
    setPratoModal(restaurante.cardapio[index])
    }
}

// Função para lidar com a ação de adicionar o item do modal para o carrinho
const handleAddToCart = () => {
    if (pratoModal) {
    dispatch(add(pratoModal)) // Adiciona o prato ao estado global
    dispatch(open()) // Abre a Sidebar lateral do carrinho de forma dinâmica
    setPratoModal(null) // Opcional: Fecha o modal de detalhes do prato
    }
}

// Enquanto a API não responde, exibe uma mensagem de carregamento simples
if (!restaurante) {
    return <S.LoadingMessage>Carregando cardápio...</S.LoadingMessage>
}

return (
    <>
    <HeaderBar>
        <div className="container">
        <LinkRestaurantes to="/">Restaurantes</LinkRestaurantes>
        <img src={logo} alt="efood" />
        {/* Mostra a quantidade real e ganha a função de abrir o carrinho ao clicar */}
        <TextCarrinho onClick={() => dispatch(open())}>
            {itemsCarrinho.length} produto(s) no carrinho
        </TextCarrinho>
        </div>
    </HeaderBar>

    {/* BANNER DINÂMICO: Agora a foto, categoria e nome vêm 100% da API */}
    <Banner $bgImage={restaurante.capa}>
        <div className="container">
        <p>{restaurante.tipo}</p>
        <h2>{restaurante.titulo}</h2>
        </div>
    </Banner>

    <MenuSection className="container">
        <MenuGrid>
        {/* CARDS DINÂMICOS: Pratos exatos deste restaurante específico */}
        {restaurante.cardapio.map((prato, index) => (
            <ProductCard
            key={prato.id}
            title={prato.nome}
            description={prato.descricao}
            image={prato.foto}
            onButtonClick={() => handleOpenModal(index)}
            />
        ))}
        </MenuGrid>
    </MenuSection>

    {/* ================= MODAL DO PRATO ================= */}
    {pratoModal && (
        <S.ModalOverlay onClick={() => setPratoModal(null)}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setPratoModal(null)}>&times;</S.CloseButton>
            
            <S.ModalFlex>
            <img src={pratoModal.foto} alt={pratoModal.nome} />
            
            <div>
                <h3>{pratoModal.nome}</h3>
                <p>{pratoModal.descricao}</p>
                <p className="porcao">Serve: {pratoModal.porcao}</p>
                
                {/* Vincula a função de clique para disparar o Redux */}
                <button className="add-cart" onClick={handleAddToCart}>
                Adicionar ao carrinho - R$ {pratoModal.preco.toFixed(2).replace('.', ',')}
                </button>
            </div>
            </S.ModalFlex>
        </S.ModalContent>
        </S.ModalOverlay>
    )}

    <Footer />

    {/* Renderiza a Sidebar do carrinho na página */}
    <Cart />
    </>
)
}