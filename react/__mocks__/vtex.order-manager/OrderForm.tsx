import { createContext, useContext } from 'react'

export const OrderFormContext = createContext(undefined)

export const useOrderForm = () => useContext(OrderFormContext)
