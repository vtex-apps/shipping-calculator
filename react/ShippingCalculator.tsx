import React, { FunctionComponent } from 'react'
import styles from './styles.css'
import { FormattedMessage, defineMessages } from 'react-intl'
import PostalCode from './components/PostalCode'

defineMessages({
  delivery: {
    defaultMessage: 'Delivery',
    id: 'store/shipping-calculator.delivery',
  },
})

const ShippingCalculator: FunctionComponent = () => {
  return (
    <div className={`${styles.container} flex flex-column pv6 ph4`}>
      <h2>
        <FormattedMessage id="store/shipping-calculator.delivery" />
      </h2>
      <PostalCode />
    </div>
  )
}

export default ShippingCalculator
