import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCheckoutStep } from '../../../store/cartSlice'
import type { DeliveryData } from '../types'
import * as S from '../styles'

interface Props {
  data: DeliveryData
  onChange: (data: DeliveryData) => void
}

type Errors = Partial<Record<'receiver' | 'description' | 'city' | 'zipCode' | 'number', string>>

const onlyNumbers = (value: string) => value.replace(/\D/g, '')

const formatCep = (value: string) => {
  const digits = onlyNumbers(value).slice(0, 8)
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits
}

const validate = (data: DeliveryData): Errors => {
  const errors: Errors = {}
  if (!data.receiver.trim()) errors.receiver = 'Campo obrigatório'
  if (!data.address.description.trim()) errors.description = 'Campo obrigatório'
  if (!data.address.city.trim()) errors.city = 'Campo obrigatório'
  const cepDigits = onlyNumbers(data.address.zipCode)
  if (!cepDigits) errors.zipCode = 'Campo obrigatório'
  else if (cepDigits.length !== 8) errors.zipCode = 'CEP inválido'
  if (!data.address.number.trim()) errors.number = 'Campo obrigatório'
  else if (isNaN(Number(data.address.number))) errors.number = 'Apenas números'
  return errors
}

export const DeliveryStep = ({ data, onChange }: Props) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState(false)

  const setAddr = (field: string, value: string) =>
    onChange({ ...data, address: { ...data.address, [field]: value } })

  const handleContinuar = () => {
    setTouched(true)
    const erros = validate(data)
    setErrors(erros)
    if (Object.keys(erros).length === 0) dispatch(setCheckoutStep('payment'))
  }

  const err = touched ? errors : {}

  return (
    <>
      <S.FormTitle>Entrega</S.FormTitle>

      <S.FormGroup>
        <label>Quem irá receber</label>
        <input
          value={data.receiver}
          onChange={(e) => onChange({ ...data, receiver: e.target.value })}
        />
        {err.receiver && <S.FieldError>{err.receiver}</S.FieldError>}
      </S.FormGroup>

      <S.FormGroup>
        <label>Endereço</label>
        <input
          value={data.address.description}
          onChange={(e) => setAddr('description', e.target.value)}
        />
        {err.description && <S.FieldError>{err.description}</S.FieldError>}
      </S.FormGroup>

      <S.FormGroup>
        <label>Cidade</label>
        <input
          value={data.address.city}
          onChange={(e) => setAddr('city', e.target.value)}
        />
        {err.city && <S.FieldError>{err.city}</S.FieldError>}
      </S.FormGroup>

      <S.FormRow>
        <S.FormGroup style={{ flex: 1 }}>
          <label>CEP</label>
          <input
            maxLength={9}
            value={data.address.zipCode}
            onChange={(e) => setAddr('zipCode', formatCep(e.target.value))}
          />
          {err.zipCode && <S.FieldError>{err.zipCode}</S.FieldError>}
        </S.FormGroup>
        <S.FormGroup style={{ flex: 1 }}>
          <label>Número</label>
          <input
            value={data.address.number}
            onChange={(e) => setAddr('number', onlyNumbers(e.target.value))}
          />
          {err.number && <S.FieldError>{err.number}</S.FieldError>}
        </S.FormGroup>
      </S.FormRow>

      <S.FormGroup>
        <label>Complemento (opcional)</label>
        <input
          value={data.address.complement}
          onChange={(e) => setAddr('complement', e.target.value)}
        />
      </S.FormGroup>

      <S.CheckoutButton onClick={handleContinuar}>Continuar com o pagamento</S.CheckoutButton>
      <S.SecondaryButton onClick={() => dispatch(setCheckoutStep('cart'))}>
        Voltar para o carrinho
      </S.SecondaryButton>
    </>
  )
}
