import React, { FunctionComponent, Fragment } from 'react'
import { components } from 'vtex.address-form'
import { modules } from 'vtex.country-codes'
import { injectIntl, InjectedIntlProps } from 'react-intl'
// @ts-ignore
const { toAlpha2 } = modules
const { AddressSubmitter, CountrySelector, PostalCodeGetter } = components

interface CustomProps {
  countries: string[]
  handleSubmit: any
}

type Props = CustomProps & InjectedIntlProps

const PostalCode: FunctionComponent<Props> = ({ intl, countries, handleSubmit }) => {
  const addCountryLabel = (countries: string[]) => {
    return countries.map((countryCode: string) => ({
      label: intl.formatMessage({ id: 'country.' + countryCode }),
      value: countryCode,
    }))
  }

  const translatedCountries = addCountryLabel(countries)

  return (
    <Fragment>
      {translatedCountries.length > 1 && (
        <CountrySelector shipsTo={translatedCountries} />
      )}
      <AddressSubmitter onSubmit={handleSubmit}>
        {(handleSubmit: any) => (
          <PostalCodeGetter submitLabel={'estimate'} onSubmit={handleSubmit} />
        )}
      </AddressSubmitter>
    </Fragment>
  )
}

export default injectIntl(PostalCode)
