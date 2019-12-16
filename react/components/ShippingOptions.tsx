import React, { FunctionComponent, Fragment } from 'react'
import { Radio } from 'vtex.styleguide'
import ShippingInfo from './ShippingInfo'
import DeliveryOptionsAvailability from './DeliveryOptionsAvailability'
import { slugify } from '../utils/slugify'
import { FormattedMessage } from 'react-intl'

interface CustomProps {
  options: DeliveryOption[]
  selectDeliveryOption: (option: string) => void
}

const ShippingOptions: FunctionComponent<CustomProps> = ({
  options,
  selectDeliveryOption,
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    selectDeliveryOption(event.currentTarget.value)
  }

  return (
    <Fragment>
      <DeliveryOptionsAvailability options={options} />
      <div className="">
        <FormattedMessage id="store/shipping-calculator.OptionsForRemainingProducts" />
      </div>
      {options &&
        options.length > 0 &&
        options.map((option, i) => {
          const optionId = slugify(`shipping-option-${option.id}`)
          const isLast = i + 1 >= options.length

          return (
            <div key={optionId} className={isLast ? '' : 'mb5'}>
              <Radio
                key={optionId}
                name={optionId}
                id={optionId}
                isLast={isLast}
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
