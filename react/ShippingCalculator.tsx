import React, { useState, useCallback } from 'react'
import { OrderShipping } from 'vtex.order-shipping'
import { ShippingHeader, ShippingOptionList } from 'vtex.checkout-shipping'
import { AddressContext } from 'vtex.address-context'
import { LocationInput } from 'vtex.place-components'
import { FormattedMessage } from 'react-intl'
import { ButtonPlain } from 'vtex.styleguide'

const { useOrderShipping } = OrderShipping
const { useAddressContext } = AddressContext

const ShippingCalculator: React.VFC = () => {
  const {
    deliveryOptions,
    selectDeliveryOption,
    selectedAddress,
    insertAddress,
  } = useOrderShipping()
  const { address, setAddress } = useAddressContext()
  const [editingAddress, setEditingAddress] = useState(!address)
  const shouldInitiallyShowShippingEstimate = !!selectedAddress?.postalCode

  const [showShippingEstimate, setShowShippingEstimate] = useState(
    shouldInitiallyShowShippingEstimate
  )

  const handleDeliveryOptionDeselect = () => {
    selectDeliveryOption(null as any)
  }

  const handleAddressSuccess = useCallback(
    createdAddress => {
      return insertAddress(createdAddress).then(() => {
        setEditingAddress(false)
      })
    },
    [insertAddress]
  )

  if (!showShippingEstimate) {
    return (
      <div>
        <ButtonPlain onClick={() => setShowShippingEstimate(true)}>
          <FormattedMessage id="store/shipping-calculator.viewDeliveryOptions" />
        </ButtonPlain>
      </div>
    )
  }

  return (
    <>
      <ShippingHeader
        onEditAddress={() => {
          setEditingAddress(true)
          setAddress(null)
        }}
      />

      {!editingAddress ? (
        <ShippingOptionList
          deliveryOptions={deliveryOptions}
          onDeliveryOptionSelected={selectDeliveryOption}
          onDeliveryOptionDeselected={handleDeliveryOptionDeselect}
        />
      ) : (
        <LocationInput onSuccess={handleAddressSuccess} />
      )}
    </>
  )
}

export default ShippingCalculator
