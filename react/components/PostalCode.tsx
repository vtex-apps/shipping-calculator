import React, { FunctionComponent, Fragment } from 'react'
import { components } from 'vtex.address-form'
import { modules } from 'vtex.country-codes'
import { injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'

// @ts-ignore
// eslint-disable-next-line
const { toAlpha2 } = modules
const { CountrySelector, PostalCodeGetter, StyleguideButton } = components

defineMessages({
  delivery: {
    defaultMessage: 'estimate',
    id: 'store/shipping-calculator.estimate',
  },
})

interface CustomProps {
  countries: string[],
  loading: boolean,
  handleSubmit: () => void
}

type Props = CustomProps & InjectedIntlProps

const PostalCode: FunctionComponent<Props> = ({
  intl,
  countries,
  loading,
  handleSubmit,
}) => {
  const addCountryLabel = (countries: string[]) => {
    return countries.map((countryCode: string) => ({
      label: intl.formatMessage({ id: 'country.' + countryCode }),
      value: countryCode,
    }))
  }

  const getSubmitMessage = () =>
    intl.formatMessage({
      id: 'store/shipping-calculator.estimate',
    })

  const translatedCountries = addCountryLabel(countries)

  return (
    <Fragment>
      {translatedCountries.length > 1 && (
        <CountrySelector id="country-selector" shipsTo={translatedCountries} />
      )}
      <PostalCodeGetter
        id="postal-code-getter"
        Button={StyleguideButton}
        submitLabel={getSubmitMessage()}
        onSubmit={handleSubmit}
        loading={loading}
        autoFocus
      />
    </Fragment>
  )
}

export default injectIntl(PostalCode)
