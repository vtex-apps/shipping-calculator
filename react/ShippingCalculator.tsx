import React, { useState, useCallback } from 'react'
import { OrderShipping } from 'vtex.order-shipping'
import {
  ShippingHeader,
  ShippingOptionList,
  NewAddressForm,
} from 'vtex.checkout-shipping'
import { AddressContext } from 'vtex.address-context'
import { FormattedMessage } from 'react-intl'
import { ButtonPlain } from 'vtex.styleguide'

const { useOrderShipping } = OrderShipping
const { useAddressContext } = AddressContext

const ShippingCalculator: React.VFC = () => {
  const {
    deliveryOptions,
    pickupOptions,
    selectDeliveryOption,
    selectPickupOption,
    selectedAddress,
    insertAddress,
  } = useOrderShipping()
  const { address, setAddress } = useAddressContext()
  const [editingAddress, setEditingAddress] = useState(!address?.postalCode)
  const shouldInitiallyShowShippingEstimate = !!selectedAddress?.postalCode

  const [showShippingEstimate, setShowShippingEstimate] = useState(
    shouldInitiallyShowShippingEstimate
  )

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
        <ButtonPlain
          id="view-delivery-options"
          onClick={() => setShowShippingEstimate(true)}
        >
          <FormattedMessage id="store/shipping-calculator.viewDeliveryOptions" />
        </ButtonPlain>
      </div>
    )
  }

  return (
    <>
      {!editingAddress ? (
        <div>
          <ShippingHeader
            onEditAddress={() => {
              setEditingAddress(true)
              setAddress(null)
            }}
          />

          <ShippingOptionList
            deliveryOptions={deliveryOptions}
            pickupOptions={pickupOptions}
            onDeliveryOptionSelected={selectDeliveryOption}
            onPickupOptionSelected={selectPickupOption}
          />
        </div>
      ) : (
        <NewAddressForm onAddressCreated={handleAddressSuccess} />
      )}
    </>
  )
}

export default ShippingCalculator
