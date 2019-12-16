import React, { FunctionComponent, Fragment } from 'react'
import { helpers } from 'vtex.address-form'
import { ButtonPlain } from 'vtex.styleguide'
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
  canEditData: boolean
  options: DeliveryOption[]
  setShowResult: (showResult: boolean) => void
  selectDeliveryOption: (option: string) => void
  numberOfItems: number
  numberOfUnavailableItems: number
}

const ShippingResult: FunctionComponent<CustomProps> = ({
  address,
  canEditData,
  options,
  setShowResult,
  selectDeliveryOption,
  numberOfItems,
  numberOfUnavailableItems,
}) => {
  const { postalCode } = removeValidation(address)

  return (
    <Fragment>
      <div className="mb6 flex items-center">
        <div id="postal-code" className="flex-auto">
          <span className="fw5">
            <FormattedMessage id="store/shipping-calculator.deliveryFor" />
          </span>{' '}
          {postalCode}
        </div>
        {canEditData && (
          <div className="flex-none">
            <ButtonPlain
              id="edit-shipping"
              onClick={() => setShowResult(false)}
            >
              <FormattedMessage id="store/shipping-calculator.edit" />
            </ButtonPlain>
          </div>
        )}
      </div>
      <ShippingOptions
        numberOfItems={numberOfItems}
        numberOfUnavailableItems={numberOfUnavailableItems}
        options={options}
        selectDeliveryOption={selectDeliveryOption}
      />
    </Fragment>
  )
}

export default ShippingResult
