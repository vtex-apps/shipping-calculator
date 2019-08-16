import React, { FunctionComponent } from 'react'
import { FormattedNumber } from 'react-intl'

interface Props {
  value: number
  currency: string
}

const FormattedPrice: FunctionComponent<Props> = ({ value, currency }) => (
  <FormattedNumber currency={currency} style="currency" value={value / 100} />
)

export default FormattedPrice
