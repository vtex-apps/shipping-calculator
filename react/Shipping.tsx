import React, { ReactNode } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { OrderShipping } from 'vtex.order-shipping'
import { useAddressRules } from 'vtex.checkout-shipping'
import { AddressContext } from 'vtex.address-context'
import { Loading } from 'vtex.render-runtime'
import { OrderForm } from 'vtex.order-manager'

const { useOrderForm } = OrderForm
const { useOrderShipping } = OrderShipping

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

interface ShippingProps {
  children: ReactNode
  title: string
}

const Shipping: React.VFC<ShippingProps> = ({
  children,
  title = messages.delivery.id,
}) => {
  const { selectedAddress, countries } = useOrderShipping()
  const addressRules = useAddressRules()

  return (
    <AddressContext.AddressContextProvider
      address={selectedAddress!}
      countries={countries}
      rules={addressRules}
    >
      <div className="flex flex-column c-on-base">
        <h5 className="t-heading-5 mt0 mb6">
          <FormattedMessage id={title} />
        </h5>
        {children}
      </div>
    </AddressContext.AddressContextProvider>
  )
}
;(Shipping as any).schema = {
  title: messages.label.id,
}

const ShippingWithLoading: typeof Shipping = props => {
  const { loading } = useOrderForm()

  if (loading) {
    return <Loading />
  }

  return <Shipping {...props}>{props.children}</Shipping>
}

export default ShippingWithLoading
