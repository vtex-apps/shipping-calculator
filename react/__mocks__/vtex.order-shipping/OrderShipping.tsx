import { createContext, useContext } from 'react'

interface Context {
  countries: string[]
  selectedAddress: CheckoutAddress
  deliveryOptions: DeliveryOption[]
  selectDeliveryOption: () => void
  insertAddress: () => void
}

export const OrderShippingContext = createContext<Context | undefined>(
  undefined
)

export const useOrderShipping = () => {
  return useContext(OrderShippingContext)
}
