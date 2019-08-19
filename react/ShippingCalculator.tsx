import React, { useState, FunctionComponent } from 'react'
import PostalCode from './components/PostalCode'
import ShippingResult from './components/ShippingResult'
import styles from './styles.css'
import { FormattedMessage, defineMessages } from 'react-intl'
import { components, helpers } from 'vtex.address-form'
const { AddressContainer, AddressRules, StyleguideInput } = components
const { addValidation } = helpers

defineMessages({
  delivery: {
    defaultMessage: 'Delivery',
    id: 'store/shipping-calculator.delivery',
  },
})

type CustomProps = {
  selectedAddress: Address
  accountName: string
  deliveryOptions: DeliveryOption[]
  countries: string[]
}

const ShippingCalculator: FunctionComponent<CustomProps> = ({
  selectedAddress,
  accountName,
  deliveryOptions,
  countries,
}) => {
  const [address, setAddress] = useState<AddressWithValidation>(
    addValidation(selectedAddress)
  )

  const [showResult, setShowResult] = useState<boolean>(false)

  const handleAddressChange = (address: AddressWithValidation) => {
    setAddress(address)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
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
      <p className="t-heading-5 c-on-muted-3">
        <FormattedMessage id="store/shipping-calculator.delivery" />
      </p>
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
    </div>
  )
}

export default ShippingCalculator
