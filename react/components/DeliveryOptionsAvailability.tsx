import React, { FunctionComponent, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { Alert } from 'vtex.styleguide'

interface Props {
  options: DeliveryOption[]
}

const DeliveryOptionsAvailability: FunctionComponent<Props> = ({ options }) => {
  return (
    <Fragment>
      {!options.length && (
        // <div className={'bg-warning--faded br2 t-small pa4'}>
        //   <FormattedMessage id="store/shipping-calculator.AllProductsUnavailable" />
        // </div>
        <Alert type="warning">
          <FormattedMessage id="store/shipping-calculator.AllProductsUnavailable" />
        </Alert>
      )}
    </Fragment>
  )
}

export default DeliveryOptionsAvailability
