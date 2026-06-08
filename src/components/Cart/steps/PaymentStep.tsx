import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { setCheckoutStep, setOrderConfirmation } from '../../../store/cartSlice'
import type { PaymentData, DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  data: PaymentData
  onChange: (data: PaymentData) => void
  delivery: DeliveryData
}

type Errors = Partial<Record<'name' | 'number' | 'code' | 'month' | 'year', string>>

const onlyNumbers = (value: string) => value.replace(/\D/g, '')

const formatCardNumber = (value: string) => {
  const digits = onlyNumbers(value).slice(0, 16)
  return digits.replace(/(.{4})/g, '$1 ').trim()
}

const validate = (data: PaymentData): Errors => {
  const errors: Errors = {}
  const { card } = data

  if (!card.name.trim()) errors.name = 'Campo obrigatório'

  const cardDigits = onlyNumbers(card.number)
  if (!cardDigits) errors.number = 'Campo obrigatório'
  else if (cardDigits.length !== 16) errors.number = 'Número inválido (16 dígitos)'

  if (!card.code) errors.code = 'Campo obrigatório'
  else if (onlyNumbers(card.code).length !== 3) errors.code = 'CVV inválido'

  const month = Number(card.expires.month)
  if (!card.expires.month) errors.month = 'Campo obrigatório'
  else if (month < 1 || month > 12) errors.month = 'Mês inválido'

  const year = Number(card.expires.year)
  const currentYear = new Date().getFullYear()
  if (!card.expires.year) errors.year = 'Campo obrigatório'
  else if (card.expires.year.length !== 4 || year < currentYear) errors.year = 'Ano inválido'

  return errors
}

export const PaymentStep = ({ data, onChange, delivery }: Props) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const valorTotal = items.reduce((acc, item) => acc + item.preco, 0)

  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState(false)

  const setCard = (field: string, value: string) =>
    onChange({ ...data, card: { ...data.card, [field]: value } })
  const setExpires = (field: string, value: string) =>
    onChange({ ...data, card: { ...data.card, expires: { ...data.card.expires, [field]: value } } })

  const handleFinalizar = async () => {
    setTouched(true)
    const erros = validate(data)
    setErrors(erros)
    if (Object.keys(erros).length > 0) return

    setIsLoading(true)
    setApiError('')
    try {
      const response = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: items.map((item) => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: delivery.receiver,
            address: { ...delivery.address, number: Number(delivery.address.number) }
          },
          payment: {
            card: {
              ...data.card,
              number: onlyNumbers(data.card.number),
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
      setApiError('Erro ao finalizar pedido. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const err = touched ? errors : {}

  return (
    <>
      <S.FormTitle>
        Pagamento - Valor a pagar R$ {valorTotal.toFixed(2).replace('.', ',')}
      </S.FormTitle>

      <S.FormGroup>
        <label>Nome no cartão</label>
        <input value={data.card.name} onChange={(e) => setCard('name', e.target.value)} />
        {err.name && <S.FieldError>{err.name}</S.FieldError>}
      </S.FormGroup>

      <S.FormRow>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Número do cartão</label>
          <input
            maxLength={19}
            value={data.card.number}
            onChange={(e) => setCard('number', formatCardNumber(e.target.value))}
          />
          {err.number && <S.FieldError>{err.number}</S.FieldError>}
        </S.FormGroup>
        <S.FormGroup style={{ width: '87px' }}>
          <label>CVV</label>
          <input
            maxLength={3}
            value={data.card.code}
            onChange={(e) => setCard('code', onlyNumbers(e.target.value))}
          />
          {err.code && <S.FieldError>{err.code}</S.FieldError>}
        </S.FormGroup>
      </S.FormRow>

      <S.FormRow>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Mês de vencimento</label>
          <input
            maxLength={2}
            placeholder="MM"
            value={data.card.expires.month}
            onChange={(e) => setExpires('month', onlyNumbers(e.target.value))}
          />
          {err.month && <S.FieldError>{err.month}</S.FieldError>}
        </S.FormGroup>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Ano de vencimento</label>
          <input
            maxLength={4}
            placeholder="AAAA"
            value={data.card.expires.year}
            onChange={(e) => setExpires('year', onlyNumbers(e.target.value))}
          />
          {err.year && <S.FieldError>{err.year}</S.FieldError>}
        </S.FormGroup>
      </S.FormRow>

      {apiError && <S.ErrorMsg>{apiError}</S.ErrorMsg>}

      <S.CheckoutButton onClick={handleFinalizar} disabled={isLoading}>
        {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
      </S.CheckoutButton>
      <S.SecondaryButton onClick={() => dispatch(setCheckoutStep('delivery'))}>
        Voltar para a edição de endereço
      </S.SecondaryButton>
    </>
  )
}
