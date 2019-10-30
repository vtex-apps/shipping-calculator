import React, { useState, FunctionComponent } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'
import { Loading } from 'vtex.render-runtime'
import EstimateShipping from './components/EstimateShipping'
import { useShipping } from './Shipping'

defineMessages({
  viewDeliveryOptions: {
    defaultMessage: 'View delivery options',
    id: 'store/shipping-calculator.viewDeliveryOptions',
  },
})

const ShippingCalculator: FunctionComponent = () => {
  const {
    countries,
    deliveryOptions,
    insertAddress,
    loading,
    selectDeliveryOption,
    selectedAddress,
  } = useShipping()

  const [showEstimateShipping, setShowEstimateShipping] = useState<boolean>(
    selectedAddress && selectedAddress.postalCode ? true : false
  )

  if (loading) {
    return <Loading />
  }

  return (
    <div>
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
            id="view-delivery-options"
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

export default ShippingCalculator
