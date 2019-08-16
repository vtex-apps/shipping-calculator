import React, { useState, FunctionComponent } from 'react'
import PostalCode from './components/PostalCode'
import ShippingResult from './components/ShippingResult'
import styles from './styles.css'
import { FormattedMessage, defineMessages } from 'react-intl'
import { components, helpers } from 'vtex.address-form'
import { newAddress } from './utils/address'
const { AddressContainer, AddressRules, StyleguideInput } = components
const { addValidation } = helpers

defineMessages({
  delivery: {
    defaultMessage: 'Delivery',
    id: 'store/shipping-calculator.delivery',
  },
})

const addressFromOrderForm: Address = newAddress({
  country: 'BRA',
  addressId: '1',
  addressType: 'residential',
  number: '',
})
const accountName = 'vtexgame1'
const countries = ['BRA', 'USA']
const options = [
  {
    id: 'Entrega Sustentável',
    value: 100,
    estimate: '1bd',
    isSelected: true,
  },
]

const ShippingCalculator: FunctionComponent = () => {
  const [address, setAddress] = useState<AddressWithValidation>(
    addValidation(addressFromOrderForm)
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
    <div className={`${styles.container} flex flex-column pv6 ph4`}>
      <h2>
        <FormattedMessage id="store/shipping-calculator.delivery" />
      </h2>
      <AddressRules
        country={address.country && address.country.value}
        shouldUseIOFetching
      >
        <AddressContainer
          accountName={accountName}
          address={address}
          Input={StyleguideInput}
          onChangeAddress={handleAddressChange}
        >
          {showResult ? (
            <ShippingResult address={address} options={options} />
          ) : (
            <PostalCode handleSubmit={handleSubmit} countries={countries} />
          )}
        </AddressContainer>
      </AddressRules>
    </div>
  )
}

export default ShippingCalculator
