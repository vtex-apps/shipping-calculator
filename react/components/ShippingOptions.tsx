import React, { FunctionComponent, Fragment } from 'react'
import { Radio } from 'vtex.styleguide'
import ShippingInfo from './ShippingInfo'

interface CustomProps {
  options: DeliveryOption[]
}

const ShippingOptions: FunctionComponent<CustomProps> = ({ options }) => {
  const handleChange = (event: any) => {
    // TODO: implement provider function to update delivery options
    console.log(event.targe.value)
  }

  return (
    <Fragment>
      {options &&
        options.length > 0 &&
        options.map(option => {
          const optionId = `shipping-option-${option.id}`

          return (
            <Radio
              key={optionId}
              name={optionId}
              id={optionId}
              checked={option.isSelected}
              onChange={handleChange}
              value={option.id}
              label={<ShippingInfo option={option} />}
            />
          )
        })}
    </Fragment>
  )
}

ShippingOptions.defaultProps = {
  options: [],
}

export default ShippingOptions
