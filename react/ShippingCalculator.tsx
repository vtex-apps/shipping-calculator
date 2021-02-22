import React, { useState } from 'react'
import { OrderShipping } from 'vtex.order-shipping'
import { ShippingForm } from 'vtex.checkout-shipping'
import { FormattedMessage } from 'react-intl'
import { ButtonPlain } from 'vtex.styleguide'

const { useOrderShipping } = OrderShipping

const ShippingCalculator: React.VFC = () => {
  const { selectedAddress } = useOrderShipping()
  const shouldInitiallyShowShippingEstimate = !!selectedAddress?.postalCode

  const [showShippingEstimate, setShowShippingEstimate] = useState(
    shouldInitiallyShowShippingEstimate
  )

  if (!showShippingEstimate) {
    return (
      <div>
        <ButtonPlain
          id="view-delivery-options"
          onClick={() => setShowShippingEstimate(true)}
        >
          <FormattedMessage id="store/shipping-calculator.viewDeliveryOptions" />
        </ButtonPlain>
      </div>
    )
  }

  return <ShippingForm />
}

export default ShippingCalculator
