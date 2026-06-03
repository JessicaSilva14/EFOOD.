    import { createSlice } from '@reduxjs/toolkit'
    import type { PayloadAction } from '@reduxjs/toolkit' // Adicionado o "type" aqui!

    interface Prato {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
    idCarrinho?: string // Novo campo opcional para controlar cada unidade de forma única
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
        // Ao adicionar, geramos um idCarrinho único combinando o id real com o timestamp atual
        const novoItem = {
            ...action.payload,
            idCarrinho: `${action.payload.id}-${Date.now()}-${Math.random()}`
        }
        state.items.push(novoItem)
        },
        remove: (state, action: PayloadAction<string>) => {
        // Agora removemos APENAS o item que bate exatamente com o idCarrinho gerado
        state.items = state.items.filter((item) => item.idCarrinho !== action.payload)
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