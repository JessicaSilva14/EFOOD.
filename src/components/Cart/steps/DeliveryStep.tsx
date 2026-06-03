import { useDispatch } from 'react-redux'
import { setCheckoutStep } from '../../../store/cartSlice'
import type { DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  data: DeliveryData
  onChange: (data: DeliveryData) => void
}

export const DeliveryStep = ({ data, onChange }: Props) => {
  const dispatch = useDispatch()
  const setAddr = (field: string, value: string) =>
    onChange({ ...data, address: { ...data.address, [field]: value } })

  return (
    <>
      <S.FormTitle>Entrega</S.FormTitle>

      <S.FormGroup>
        <label>Quem irá receber</label>
        <input value={data.receiver} onChange={(e) => onChange({ ...data, receiver: e.target.value })} />
      </S.FormGroup>

      <S.FormGroup>
        <label>Endereço</label>
        <input value={data.address.description} onChange={(e) => setAddr('description', e.target.value)} />
      </S.FormGroup>

      <S.FormGroup>
        <label>Cidade</label>
        <input value={data.address.city} onChange={(e) => setAddr('city', e.target.value)} />
      </S.FormGroup>

      <S.FormRow>
        <S.FormGroup style={{ flex: 1 }}>
          <label>CEP</label>
          <input maxLength={9} value={data.address.zipCode} onChange={(e) => setAddr('zipCode', e.target.value)} />
        </S.FormGroup>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Número</label>
          <input value={data.address.number} onChange={(e) => setAddr('number', e.target.value)} />
        </S.FormGroup>
      </S.FormRow>

      <S.FormGroup>
        <label>Complemento (opcional)</label>
        <input value={data.address.complement} onChange={(e) => setAddr('complement', e.target.value)} />
      </S.FormGroup>

      <S.CheckoutButton onClick={() => dispatch(setCheckoutStep('payment'))}>
        Continuar com o pagamento
      </S.CheckoutButton>
      <S.SecondaryButton onClick={() => dispatch(setCheckoutStep('cart'))}>
        Voltar para o carrinho
      </S.SecondaryButton>
    </>
  )
}
