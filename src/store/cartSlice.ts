import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

    interface Prato {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
    }

    interface CartState {
    items: Prato[]
    isOpen: boolean
    }

    const initialState: CartState = {
    items: [],
    isOpen: false
    }

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Prato>) => {
        state.items.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
        state.isOpen = true
        },
        close: (state) => {
        state.isOpen = false
        }
    }
    })

    export const { add, remove, open, close } = cartSlice.actions
    export default cartSlice.reducer