    import { useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import type { RootState } from '../../store'
    import { close } from '../../store/cartSlice'
    import * as S from './styles'
    import { CartStep } from './steps/CartStep'
    import { DeliveryStep } from './steps/DeliveryStep'
    import { PaymentStep } from './steps/PaymentStep'
    import { ConfirmationStep } from './steps/ConfirmationStep'
    import type { DeliveryData, PaymentData } from './types'

    const initialDelivery: DeliveryData = {
    receiver: '',
    address: { description: '', city: '', zipCode: '', number: '', complement: '' }
    }

    const initialPayment: PaymentData = {
    card: { name: '', number: '', code: '', expires: { month: '', year: '' } }
    }

    export const Cart = () => {
    const { isOpen, checkoutStep } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const [delivery, setDelivery] = useState<DeliveryData>(initialDelivery)
    const [payment, setPayment] = useState<PaymentData>(initialPayment)

    if (!isOpen) return null

    const isConfirmation = checkoutStep === 'confirmation'

    return (
        <S.Overlay onClick={isConfirmation ? undefined : () => dispatch(close())}>
        <S.CartContainer onClick={(e) => e.stopPropagation()}>
            {checkoutStep === 'cart' && <CartStep />}
            {checkoutStep === 'delivery' && <DeliveryStep data={delivery} onChange={setDelivery} />}
            {checkoutStep === 'payment' && <PaymentStep data={payment} onChange={setPayment} delivery={delivery} />}
            {checkoutStep === 'confirmation' && <ConfirmationStep />}
        </S.CartContainer>
        </S.Overlay>
    )
    }
