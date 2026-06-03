    import { useDispatch, useSelector } from 'react-redux'
    import type { RootState } from '../../store'
    import { close, remove } from '../../store/cartSlice'
    import * as S from './styles'

    // Importando o ícone renomeado corretamente
    import lixeiraIcon from '../../assets/lixeira.svg'

    export const Cart = () => {
    const { isOpen, items } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    if (!isOpen) return null

    const valorTotal = items.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual.preco
    }, 0)

    return (
        <S.Overlay onClick={() => dispatch(close())}>
        <S.CartContainer onClick={(e) => e.stopPropagation()}>
            {items.length === 0 ? (
            <S.EmptyMessage>O carrinho está vazio.</S.EmptyMessage>
            ) : (
            <>
                <S.ItemList>
                {items.map((item) => (
                    <S.CartItem key={item.idCarrinho}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                        <h3>{item.nome}</h3>
                        <p>R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <button 
                        onClick={() => dispatch(remove(item.idCarrinho!))} 
                        title="Remover item"
                    >
                        <img src={lixeiraIcon} alt="Remover item" />
                    </button>
                    </S.CartItem>
                ))}
                </S.ItemList>

                <S.TotalContainer>
                <span>Valor total</span>
                <span>R$ {valorTotal.toFixed(2).replace('.', ',')}</span>
                </S.TotalContainer>

                <S.CheckoutButton>
                Continuar com a entrega
                </S.CheckoutButton>
            </>
            )}
        </S.CartContainer>
        </S.Overlay>
    )
    }