import React, { FunctionComponent } from 'react'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { FormattedCurrency } from 'vtex.format-currency'

interface CustomProps {
  option: DeliveryOption
}

const ShippingInfo: FunctionComponent<CustomProps> = ({ option }) => {
  return (
    <div className="flex w-100">
      <div className="flex-auto">
        <div className="mb3">{option.id}</div>
        <div className="c-muted-1">
          <TranslateEstimate shippingEstimate={option.estimate} />
        </div>
      </div>
      <div className="flex-none">
        <FormattedCurrency value={option.price / 100} />
      </div>
    </div>
  )
}

export default ShippingInfo
