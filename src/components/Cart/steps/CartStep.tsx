import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { remove, setCheckoutStep } from '../../../store/cartSlice'
import * as S from '../styles'
import lixeiraIcon from '../../../assets/lixeira.svg'

export const CartStep = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const valorTotal = items.reduce((acc, item) => acc + item.preco, 0)

  if (items.length === 0) return <S.EmptyMessage>O carrinho está vazio.</S.EmptyMessage>

  return (
    <>
      <S.ItemList>
        {items.map((item) => (
          <S.CartItem key={item.idCarrinho}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>R$ {item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
            <button onClick={() => dispatch(remove(item.idCarrinho!))} title="Remover item">
              <img src={lixeiraIcon} alt="Remover item" />
            </button>
          </S.CartItem>
        ))}
      </S.ItemList>

      <S.TotalContainer>
        <span>Valor total</span>
        <span>R$ {valorTotal.toFixed(2).replace('.', ',')}</span>
      </S.TotalContainer>

      <S.CheckoutButton onClick={() => dispatch(setCheckoutStep('delivery'))}>
        Continuar com a entrega
      </S.CheckoutButton>
    </>
  )
}
