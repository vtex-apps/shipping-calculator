import React, { FunctionComponent, Fragment } from 'react'
import { components } from 'vtex.address-form'
import { useIntl, defineMessages } from 'react-intl'

const { CountrySelector, PostalCodeGetter, StyleguideButton } = components

defineMessages({
  delivery: {
    defaultMessage: 'estimate',
    id: 'store/shipping-calculator.estimate',
  },
})

interface Props {
  countries: string[]
  loading: boolean
  handleSubmit: () => void
}

const PostalCode: FunctionComponent<Props> = ({
  countries,
  loading,
  handleSubmit,
}) => {
  const intl = useIntl()

  const getSubmitMessage = () =>
    intl.formatMessage({
      id: 'store/shipping-calculator.estimate',
    })

  const translatedCountries = countries.map((countryCode: string) => ({
    label: intl.formatMessage({ id: `country.${countryCode}` }),
    value: countryCode,
  }))

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
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
    </Fragment>
  )
}

export default PostalCode
