import React, { FunctionComponent, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { Alert } from 'vtex.styleguide'

interface Props {
  allItemsUnavailable: boolean
  options: DeliveryOption[]
  numberOfUnavailableItems: number
}

const DeliveryOptionsAvailability: FunctionComponent<Props> = ({
  allItemsUnavailable,
  options,
  numberOfUnavailableItems,
}) => {
  return (
    <Fragment>
      {!options.length && (
        <Alert type="warning">
          {allItemsUnavailable ? (
            <FormattedMessage id="store/shipping-calculator.allItemsUnavailable" />
          ) : (
            <FormattedMessage
              id="store/shipping-calculator.unavailableItems"
              values={{ numberOfUnavailableItems }}
            />
          )}
        </Alert>
      )}
    </Fragment>
  )
}

export default DeliveryOptionsAvailability
