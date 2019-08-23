import React, { useState, FunctionComponent } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'
import EstimateShipping from './components/EstimateShipping'

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

type CustomProps = {
  selectedAddress: Address
  deliveryOptions: DeliveryOption[]
  countries: string[]
}

const ShippingCalculator: FunctionComponent<CustomProps> = ({
  selectedAddress,
  deliveryOptions,
  countries,
}) => {
  const [showEstimateShipping, setShowEstimateShipping] = useState<boolean>(
    deliveryOptions.length > 0
  )

  return (
    <div className="flex flex-column c-on-base">
      <h5 className="t-heading-5 mt6 mb5"><FormattedMessage id="store/shipping-calculator.delivery" /></h5>
      {showEstimateShipping ? (
        <EstimateShipping
          selectedAddress={selectedAddress}
          deliveryOptions={deliveryOptions}
          countries={countries}
        />
      ) : (
        <div>
          <Button
            variation="tertiary"
            collapseLeft
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
