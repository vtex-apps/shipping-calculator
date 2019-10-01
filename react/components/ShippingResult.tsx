import React, { FunctionComponent, Fragment } from 'react'
import { helpers } from 'vtex.address-form'
import { Button } from 'vtex.styleguide'
import ShippingOptions from './ShippingOptions'
import { FormattedMessage, defineMessages } from 'react-intl'
const { removeValidation } = helpers

defineMessages({
  deliveryFor: {
    defaultMessage: 'Delivery for',
    id: 'store/shipping-calculator.deliveryFor',
  },
  edit: {
    defaultMessage: 'edit',
    id: 'store/shipping-calculator.edit',
  },
})

interface CustomProps {
  address: AddressWithValidation
  options: DeliveryOption[]
  setShowResult: any
  selectDeliveryOption: any
}

const ShippingResult: FunctionComponent<CustomProps> = ({
  address,
  options,
  setShowResult,
  selectDeliveryOption,
}) => {
  const { postalCode } = removeValidation(address)

  return (
    <Fragment>
      <div className="mb7">
        <p className="w-100 flex flex-row items-center justify-between c-on-muted-3 mv0">
          <span>
            <FormattedMessage id="store/shipping-calculator.deliveryFor" />
          </span>
          <Button
            variation="tertiary"
            size="small"
            onClick={() => setShowResult(false)}
          >
            <FormattedMessage id="store/shipping-calculator.edit" />
          </Button>
        </p>
        <span>{postalCode}</span>
      </div>
      <ShippingOptions
        options={options}
        selectDeliveryOption={selectDeliveryOption}
      />
    </Fragment>
  )
}

export default ShippingResult
