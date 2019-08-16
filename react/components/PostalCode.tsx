import React, { useState, FunctionComponent } from 'react'
import { components, helpers } from 'vtex.address-form'
import { modules } from 'vtex.country-codes'
import { newAddress } from '../utils/address'
import { injectIntl, InjectedIntlProps } from 'react-intl'
// @ts-ignore
const { toAlpha2 } = modules
const {
  AddressContainer,
  AddressRules,
  AddressSubmitter,
  CountrySelector,
  PostalCodeGetter,
  StyleguideInput,
} = components
const { addValidation } = helpers

const PostalCode: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  const addressTest: Address = newAddress({
    country: 'BRA',
    addressId: '1',
    addressType: 'residential',
    number: '',
  })

  const accountName = 'vtexgame1'
  const countries = ['BRA', 'USA']
  const [address, setAddress] = useState<AddressWithValidation>(
    addValidation(addressTest)
  )

  const addCountryLabel = (countries: string[]) => {
    return countries.map((countryCode: string) => ({
      label: intl.formatMessage({ id: 'country.' + countryCode }),
      value: countryCode,
    }))
  }

  const translatedCountries = addCountryLabel(countries)

  const handleAddressChange = (address: AddressWithValidation) => {
    setAddress(address)
  }

  const handleSubmit = (valid: boolean, address: Address) => {
    console.log('submitted', address)
    if (valid) {
    }
  }

  return (
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
        {translatedCountries.length > 1 && (
          <CountrySelector shipsTo={translatedCountries} />
        )}
        <AddressSubmitter onSubmit={handleSubmit}>
          {(handleSubmit: any) => (
            <PostalCodeGetter
              submitLabel={'estimate'}
              onSubmit={handleSubmit}
            />
          )}
        </AddressSubmitter>
      </AddressContainer>
    </AddressRules>
  )
}

export default injectIntl(PostalCode)
