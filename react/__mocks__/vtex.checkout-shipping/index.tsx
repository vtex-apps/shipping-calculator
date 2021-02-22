import React from 'react'
import { OrderForm } from 'vtex.order-manager'

const { useOrderForm } = OrderForm

export const useAddressRules = () => {
  return {
    BRA: {
      fields: [
        {
          postalCode: {
            label: 'postalCode',
            name: 'postalCode',
            required: true,
            mask: '99999-999',
            pattern: /^(\d){5}-?(\d){3}$/,
          },
        },
      ],
    },
  }
}

export const ShippingHeader = () => {
  const { orderForm } = useOrderForm()

  return (
    <div>
      <p>Selected option</p>
      <p>{orderForm.shipping?.selectedAddress?.postalCode}</p>
    </div>
  )
}

export const ShippingOptionList: React.FC<any> = ({ deliveryOptions }) => {
  return (
    <ul>
      {deliveryOptions.map((deliveryOption: any) => (
        <li key={deliveryOption.id}>{deliveryOption.id}</li>
      ))}
    </ul>
  )
}

export const ShippingForm = () => {
  const { orderForm } = useOrderForm()

  return (
    <div>
      <span>{orderForm.shipping.selectedAddress.postalCode}</span>
      <ul>
        {orderForm.shipping.deliveryOptions.map((deliveryOption: any) => (
          <li key={deliveryOption.id}>{deliveryOption.id}</li>
        ))}
      </ul>
    </div>
  )
}
