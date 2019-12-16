import React, { useState, FunctionComponent } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { ButtonPlain } from 'vtex.styleguide'
import { Loading } from 'vtex.render-runtime'
import EstimateShipping from './components/EstimateShipping'
import { useShipping } from './Shipping'

const messages = defineMessages({
  viewDeliveryOptions: {
    defaultMessage: 'View delivery options',
    id: 'store/shipping-calculator.viewDeliveryOptions',
  },
})

const ShippingCalculator: FunctionComponent = () => {
  const {
    allItemsUnavailable,
    canEditData,
    countries,
    deliveryOptions,
    insertAddress,
    loading,
    numberOfUnavailableItems,
    selectDeliveryOption,
    selectedAddress,
  } = useShipping()

  const shouldShowShippingEstimate =
    selectedAddress && !!selectedAddress.postalCode

  const [showEstimateShipping, setShowEstimateShipping] = useState<boolean>(
    shouldShowShippingEstimate
  )

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      {showEstimateShipping || shouldShowShippingEstimate ? (
        <EstimateShipping
          canEditData={canEditData}
          selectedAddress={selectedAddress}
          deliveryOptions={deliveryOptions}
          countries={countries}
          insertAddress={insertAddress}
          selectDeliveryOption={selectDeliveryOption}
          numberOfUnavailableItems={numberOfUnavailableItems}
          allItemsUnavailable={allItemsUnavailable}
        />
      ) : (
        <div>
          <ButtonPlain
            id="view-delivery-options"
            onClick={() => setShowEstimateShipping(true)}
          >
            <FormattedMessage id={messages.viewDeliveryOptions.id} />
          </ButtonPlain>
        </div>
      )}
    </div>
  )
}

export default ShippingCalculator
