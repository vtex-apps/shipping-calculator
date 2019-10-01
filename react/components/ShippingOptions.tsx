import React, { FunctionComponent, Fragment } from 'react'
import { Radio } from 'vtex.styleguide'
import ShippingInfo from './ShippingInfo'

interface CustomProps {
  options: DeliveryOption[]
  selectDeliveryOption: any
}

const ShippingOptions: FunctionComponent<CustomProps> = ({
  options,
  selectDeliveryOption,
}) => {
  const handleChange = (event: any) => {
    selectDeliveryOption(event.target.value)
  }

  return (
    <Fragment>
      {options &&
        options.length > 0 &&
        options.map((option, i) => {
          const optionId = `shipping-option-${option.id}`

          return (
            <div className={i + 1 < options.length ? 'mb5' : ''}>
              <Radio
                key={optionId}
                name={optionId}
                id={optionId}
                checked={option.isSelected}
                onChange={handleChange}
                value={option.id}
                label={<ShippingInfo option={option} />}
              />
            </div>
          )
        })}
    </Fragment>
  )
}

ShippingOptions.defaultProps = {
  options: [],
}

export default ShippingOptions
