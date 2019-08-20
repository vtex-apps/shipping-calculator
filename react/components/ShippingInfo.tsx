import React, { FunctionComponent } from 'react'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { FormattedCurrency } from 'vtex.format-currency'

interface CustomProps {
  option: DeliveryOption
}

const ShippingInfo: FunctionComponent<CustomProps> = ({ option }) => {
  return (
    <div className="w-100">
      <p className="flex flex-row justify-between mv3">
        <span>{option.id}</span>{' '}
        <span>
          <FormattedCurrency value={option.value / 100} />
        </span>
      </p>
      <p className="c-muted-1 mv3">
        <TranslateEstimate shippingEstimate={option.estimate} />
      </p>
    </div>
  )
}

export default ShippingInfo
