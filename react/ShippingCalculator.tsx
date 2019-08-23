import React, { useState, FunctionComponent } from 'react'
import styles from './styles.css'
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
    <div className={`${styles.container} flex flex-column pt6`}>
      <p className="t-heading-5 c-on-muted-3">
        <FormattedMessage id="store/shipping-calculator.delivery" />
      </p>
      {showEstimateShipping ? (
        <EstimateShipping
          selectedAddress={selectedAddress}
          deliveryOptions={deliveryOptions}
          countries={countries}
        />
      ) : (
        <div className="mb5">
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
