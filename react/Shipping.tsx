import React, { createContext, useContext, ReactNode } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'

const messages = defineMessages({
  delivery: {
    defaultMessage: 'Delivery',
    id: 'store/shipping-calculator.delivery',
  },
  label: {
    defaultMessage: '',
    id: 'admin/editor.shipping-calculator.label',
  },
  title: {
    defaultMessage: '',
    id: 'admin/editor.shipping-calculator.title',
  },
})

interface InsertAddressResult {
  success: boolean
  orderForm: any
}

interface Context {
  canEditData: boolean
  countries: string[]
  deliveryOptions: DeliveryOption[]
  insertAddress: (address: CheckoutAddress) => Promise<InsertAddressResult>
  loading: boolean
  numberOfItems: number
  numberOfUnavailableItems: number
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

const Shipping: StorefrontFunctionComponent<ShippingProps> = ({
  children,
  canEditData,
  countries,
  deliveryOptions,
  insertAddress,
  loading,
  numberOfItems,
  numberOfUnavailableItems,
  selectDeliveryOption,
  selectedAddress,
  title,
}) => {
  return (
    <ShippingContext.Provider
      value={{
        canEditData,
        countries,
        deliveryOptions,
        insertAddress,
        loading,
        numberOfItems,
        numberOfUnavailableItems,
        selectDeliveryOption,
        selectedAddress,
      }}
    >
      <div className="flex flex-column c-on-base">
        <h5 className="t-heading-5 mt0 mb5">
          <FormattedMessage id={title} />
        </h5>
        {children}
      </div>
    </ShippingContext.Provider>
  )
}

Shipping.defaultProps = {
  canEditData: false,
  countries: [],
  deliveryOptions: [],
  title: messages.delivery.id,
}

interface ShippingProps {
  children: ReactNode
  canEditData: boolean
  countries: string[]
  deliveryOptions: DeliveryOption[]
  insertAddress: (address: CheckoutAddress) => Promise<InsertAddressResult>
  loading: boolean
  numberOfItems: number
  numberOfUnavailableItems: number
  selectDeliveryOption: (option: string) => void
  selectedAddress: Address
  title: string
}

Shipping.schema = {
  title: messages.label.id,
}

export default Shipping
