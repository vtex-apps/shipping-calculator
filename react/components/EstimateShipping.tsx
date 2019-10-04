import React, { useState, FunctionComponent } from 'react'
import PostalCode from './PostalCode'
import ShippingResult from './ShippingResult'
import { useRuntime } from 'vtex.render-runtime'
import { components, helpers } from 'vtex.address-form'
import { newAddress } from '../utils/address'

const { AddressContainer, AddressRules, StyleguideInput } = components
const { addValidation, removeValidation } = helpers

interface CustomProps {
  insertAddress: any
  selectedAddress: Address
  deliveryOptions: DeliveryOption[]
  countries: string[]
  selectDeliveryOption: any
}

const EstimateShipping: FunctionComponent<CustomProps> = ({
  insertAddress,
  selectedAddress,
  deliveryOptions,
  countries,
  selectDeliveryOption,
}) => {
  const { account, culture } = useRuntime()

  const [address, setAddress] = useState<AddressWithValidation>(
    addValidation(
      selectedAddress
        ? newAddress(selectedAddress)
        : newAddress({ country: culture.country })
    )
  )

  const [showResult, setShowResult] = useState<boolean>(
    selectedAddress && selectedAddress.postalCode ? true : false
  )

  const handleAddressChange = (address: AddressWithValidation) => {
    setAddress(address)
  }

  const handleSubmit = () => {
    const addressWithoutValidation = removeValidation(address)
    const postalCodeValid =
      address && address.postalCode && address.postalCode.valid
    const geoCoordinatesValid =
      address && address.geoCoordinates && address.geoCoordinates.valid

    if (postalCodeValid || geoCoordinatesValid) {
      insertAddress(addressWithoutValidation)
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
            selectDeliveryOption={selectDeliveryOption}
          />
        ) : (
          <div className="mt4">
            <PostalCode handleSubmit={handleSubmit} countries={countries} />
          </div>
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
