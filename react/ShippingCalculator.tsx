import React, { useState, FunctionComponent } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'
import EstimateShipping from './components/EstimateShipping'

import { useOrderShipping } from 'vtex.order-shipping/OrderShipping'

defineMessages({
  delivery: {
    defaultMessage: 'Delivery',
    id: 'store/shipping-calculator.delivery',
  },
  viewDeliveryOptions: {
    defaultMessage: 'View delivery options',
    id: 'store/shipping-calculator.viewDeliveryOptions',
  },
})

interface CustomProps {}

const ShippingCalculator: FunctionComponent<CustomProps> = () => {
  const {
    insertAddress,
    selectedAddress,
    deliveryOptions,
    countries,
    selectDeliveryOption,
  } = useOrderShipping()

  const [showEstimateShipping, setShowEstimateShipping] = useState<boolean>(
    deliveryOptions.length > 0
  )

  return (
    <div className="flex flex-column c-on-base">
      <h5 className="t-heading-5 mt0 mb3">
        <FormattedMessage id="store/shipping-calculator.delivery" />
      </h5>
      {showEstimateShipping ? (
        <EstimateShipping
          selectedAddress={selectedAddress}
          deliveryOptions={deliveryOptions}
          countries={countries}
          insertAddress={insertAddress}
          selectDeliveryOption={selectDeliveryOption}
        />
      ) : (
        <div className="mt3">
          <Button
            variation="tertiary"
            collapseLeft
            noUpperCase
            onClick={() => setShowEstimateShipping(true)}
          >
            <FormattedMessage id="store/shipping-calculator.viewDeliveryOptions" />
          </Button>
        </div>
      )}
    </div>
  )
}

ShippingCalculator.defaultProps = {
  countries: [],
  deliveryOptions: [],
}

export default ShippingCalculator
