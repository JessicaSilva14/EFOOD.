    import { createSlice } from '@reduxjs/toolkit'
    import type { PayloadAction } from '@reduxjs/toolkit'

    interface Prato {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
    idCarrinho?: string
    }

    export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

    interface OrderConfirmation {
    orderId: string
    message?: string
    }

    interface CartState {
    items: Prato[]
    isOpen: boolean
    checkoutStep: CheckoutStep
    orderConfirmation: OrderConfirmation | null
    }

    const initialState: CartState = {
    items: [],
    isOpen: false,
    checkoutStep: 'cart',
    orderConfirmation: null
    }

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Prato>) => {
        const novoItem = {
            ...action.payload,
            idCarrinho: `${action.payload.id}-${Date.now()}-${Math.random()}`
        }
        state.items.push(novoItem)
        },
        remove: (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((item) => item.idCarrinho !== action.payload)
        },
        open: (state) => {
        state.isOpen = true
        state.checkoutStep = 'cart'
        },
        close: (state) => {
        state.isOpen = false
        state.checkoutStep = 'cart'
        },
        setCheckoutStep: (state, action: PayloadAction<CheckoutStep>) => {
        state.checkoutStep = action.payload
        },
        setOrderConfirmation: (state, action: PayloadAction<OrderConfirmation>) => {
        state.orderConfirmation = action.payload
        state.checkoutStep = 'confirmation'
        state.items = []
        }
    }
    })

    export const { add, remove, open, close, setCheckoutStep, setOrderConfirmation } = cartSlice.actions
    export default cartSlice.reducer