import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { setCheckoutStep, setOrderConfirmation } from '../../../store/cartSlice'
import type { PaymentData, DeliveryData } from '../types'
import * as S from '../styles'
import { useState } from 'react'

interface Props {
  data: PaymentData
  onChange: (data: PaymentData) => void
  delivery: DeliveryData
}

export const PaymentStep = ({ data, onChange, delivery }: Props) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const valorTotal = items.reduce((acc, item) => acc + item.preco, 0)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const setCard = (field: string, value: string) =>
    onChange({ ...data, card: { ...data.card, [field]: value } })
  const setExpires = (field: string, value: string) =>
    onChange({ ...data, card: { ...data.card, expires: { ...data.card.expires, [field]: value } } })

  const handleFinalizar = async () => {
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: items.map((item) => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: delivery.receiver,
            address: {
              ...delivery.address,
              number: Number(delivery.address.number)
            }
          },
          payment: {
            card: {
              ...data.card,
              code: Number(data.card.code),
              expires: {
                month: Number(data.card.expires.month),
                year: Number(data.card.expires.year)
              }
            }
          }
        })
      })
      const result = await response.json()
      dispatch(setOrderConfirmation({ orderId: result.orderId || result.id || 'N/A' }))
    } catch {
      setError('Erro ao finalizar pedido. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <S.FormTitle>
        Pagamento - Valor a pagar R$ {valorTotal.toFixed(2).replace('.', ',')}
      </S.FormTitle>

      <S.FormGroup>
        <label>Nome no cartão</label>
        <input value={data.card.name} onChange={(e) => setCard('name', e.target.value)} />
      </S.FormGroup>

      <S.FormRow>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Número do cartão</label>
          <input maxLength={19} value={data.card.number} onChange={(e) => setCard('number', e.target.value)} />
        </S.FormGroup>
        <S.FormGroup style={{ width: '87px' }}>
          <label>CVV</label>
          <input maxLength={3} value={data.card.code} onChange={(e) => setCard('code', e.target.value)} />
        </S.FormGroup>
      </S.FormRow>

      <S.FormRow>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Mês de vencimento</label>
          <input maxLength={2} placeholder="MM" value={data.card.expires.month} onChange={(e) => setExpires('month', e.target.value)} />
        </S.FormGroup>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Ano de vencimento</label>
          <input maxLength={4} placeholder="AAAA" value={data.card.expires.year} onChange={(e) => setExpires('year', e.target.value)} />
        </S.FormGroup>
      </S.FormRow>

      {error && <S.ErrorMsg>{error}</S.ErrorMsg>}

      <S.CheckoutButton onClick={handleFinalizar} disabled={isLoading}>
        {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
      </S.CheckoutButton>
      <S.SecondaryButton onClick={() => dispatch(setCheckoutStep('delivery'))}>
        Voltar para a edição de endereço
      </S.SecondaryButton>
    </>
  )
}
