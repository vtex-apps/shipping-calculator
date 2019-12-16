import React, { FunctionComponent, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { Alert } from 'vtex.styleguide'

interface Props {
  numberOfItems: number
  numberOfUnavailableItems: number
}

const DeliveryOptionsAvailability: FunctionComponent<Props> = ({
  numberOfItems,
  numberOfUnavailableItems,
}) => {
  const allItemsUnavailable = numberOfUnavailableItems === numberOfItems
  return (
    <Fragment>
      {numberOfUnavailableItems ? (
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
      ) : null}
    </Fragment>
  )
}

export default DeliveryOptionsAvailability
