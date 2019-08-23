import React, { useState, FunctionComponent } from 'react'
import PostalCode from './PostalCode'
import ShippingResult from './ShippingResult'
import { useRuntime } from 'vtex.render-runtime'
import { components, helpers } from 'vtex.address-form'
import { newAddress } from '../utils/address'
const { AddressContainer, AddressRules, StyleguideInput } = components
const { addValidation } = helpers

type CustomProps = {
  selectedAddress: Address
  deliveryOptions: DeliveryOption[]
  countries: string[]
}

const EstimateShipping: FunctionComponent<CustomProps> = ({
  selectedAddress,
  deliveryOptions,
  countries,
}) => {
  const { account, culture } = useRuntime()

  const [address, setAddress] = useState<AddressWithValidation>(
    addValidation(selectedAddress || newAddress({ country: culture.country }))
  )

  const [showResult, setShowResult] = useState<boolean>(false)

  const handleAddressChange = (address: AddressWithValidation) => {
    setAddress(address)
  }

  const handleSubmit = () => {
    const postalCodeValid =
      address && address.postalCode && address.postalCode.valid
    const geoCoordinatesValid =
      address && address.geoCoordinates && address.geoCoordinates.valid

    if (postalCodeValid || geoCoordinatesValid) {
      setShowResult(true)
    }
  }

  return (
    <AddressRules
      country={address.country && address.country.value}
      shouldUseIOFetching
    >
      <AddressContainer
        accountName={account}
        address={address}
        Input={StyleguideInput}
        onChangeAddress={handleAddressChange}
      >
        {showResult ? (
          <ShippingResult
            address={address}
            options={deliveryOptions}
            setShowResult={setShowResult}
          />
        ) : (
          <PostalCode handleSubmit={handleSubmit} countries={countries} />
        )}
      </AddressContainer>
    </AddressRules>
  )
}

EstimateShipping.defaultProps = {
  countries: [],
  deliveryOptions: [],
}

export default EstimateShipping
