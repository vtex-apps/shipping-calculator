import React, { FunctionComponent } from 'react'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { FormattedPrice } from 'vtex.formatted-price'

import { slugify } from '../utils/slugify'

interface CustomProps {
  option: DeliveryOption
}

const ShippingInfo: FunctionComponent<CustomProps> = ({ option }) => {
  const optionId = slugify(option.id)

  return (
    <div className="flex w-100">
      <div className="flex-auto">
        <div id={optionId} className="mb3">
          {option.id}
        </div>
        <div id={`estimate-${optionId}`} className="c-muted-1">
          <TranslateEstimate shippingEstimate={option.estimate} />
        </div>
      </div>
      <div id={`price-${optionId}`} className="flex-none">
        <FormattedPrice value={option.price / 100} />
      </div>
    </div>
  )
}

export default ShippingInfo
