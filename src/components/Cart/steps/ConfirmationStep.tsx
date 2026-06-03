import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { close } from '../../../store/cartSlice'
import * as S from '../styles'

export const ConfirmationStep = () => {
  const dispatch = useDispatch()
  const { orderConfirmation } = useSelector((state: RootState) => state.cart)

  return (
    <>
      <S.FormTitle>Pedido realizado - {orderConfirmation?.orderId}</S.FormTitle>
      <S.ConfirmationText>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
        será entregue no endereço fornecido.
      </S.ConfirmationText>
      <S.ConfirmationText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças
        extras.
      </S.ConfirmationText>
      <S.ConfirmationText>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo
        assim sua segurança e bem-estar durante a refeição.
      </S.ConfirmationText>
      <S.ConfirmationText>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </S.ConfirmationText>
      <S.CheckoutButton onClick={() => dispatch(close())}>Concluir</S.CheckoutButton>
    </>
  )
}
