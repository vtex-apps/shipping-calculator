import React, {
  createContext,
  useContext,
  FunctionComponent,
  ReactNode,
} from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'

defineMessages({
  delivery: {
    defaultMessage: 'Delivery',
    id: 'store/shipping-calculator.delivery',
  },
})


interface InsertAddressResult {
  success: boolean
  orderForm: any
}

interface Context {
  countries: string[]
  deliveryOptions: DeliveryOption[]
  insertAddress: (address: CheckoutAddress) => Promise<InsertAddressResult>
  loading: boolean
  selectDeliveryOption: (option: string) => void
  selectedAddress: Address
}

const ShippingContext = createContext<Context | undefined>(undefined)

export const useShipping = () => {
  const context = useContext(ShippingContext)
  if (context === undefined) {
    throw new Error('useShipping must be used within a Shipping component')
  }

  return context
}

const Shipping: FunctionComponent<ShippingProps> = ({
  children,
  countries,
  deliveryOptions,
  insertAddress,
  loading,
  selectDeliveryOption,
  selectedAddress,
}) => {
  return (
    <ShippingContext.Provider
      value={{
        countries,
        deliveryOptions,
        insertAddress,
        loading,
        selectDeliveryOption,
        selectedAddress,
      }}
    >
      <div className="flex flex-column c-on-base">
        <h5 className="t-heading-5 mt0 mb5">
          <FormattedMessage id="store/shipping-calculator.delivery" />
        </h5>
        {children}
      </div>
    </ShippingContext.Provider>
  )
}

Shipping.defaultProps = {
  countries: [],
  deliveryOptions: [],
}

interface ShippingProps {
  children: ReactNode
  countries: string[]
  deliveryOptions: DeliveryOption[]
  insertAddress: (address: CheckoutAddress) => Promise<InsertAddressResult>
  loading: boolean
  selectDeliveryOption: (option: string) => void
  selectedAddress: Address
}

export default Shipping
