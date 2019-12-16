import React, { FunctionComponent, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { Alert } from 'vtex.styleguide'

interface Props {
  options: DeliveryOption[]
  numberOfUnavailableItems: number
}

const DeliveryOptionsAvailability: FunctionComponent<Props> = ({
  options,
  numberOfUnavailableItems,
}) => {
  return (
    <Fragment>
      {!options.length && (
        <Alert type="warning">
          {numberOfUnavailableItems ? (
            <FormattedMessage
              id="store/shipping-calculator.unavailableProducts"
              values={{ numberOfUnavailableItems }}
            />
          ) : (
            <FormattedMessage id="store/shipping-calculator.allProductsUnavailable" />
          )}
        </Alert>
      )}
    </Fragment>
  )
}

export default DeliveryOptionsAvailability
