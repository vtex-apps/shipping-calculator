interface Address {
  addressId: string
  addressQuery?: string
  addressType: string
  city?: string
  complement?: string
  country?: string
  geoCoordinates?: number[]
  neighborhood?: string
  number?: string
  postalCode?: string
  receiverName?: string
  reference?: string
  state?: string
  street?: string
}

interface AddressWithValidation {
  addressId: AddressField
  addressQuery?: AddressField
  addressType: AddressField
  city?: AddressField
  complement?: AddressField
  country?: AddressField
  geoCoordinates?: AddressField
  neighborhood?: AddressField
  number?: AddressField
  postalCode?: AddressField
  receiverName?: AddressField
  reference?: AddressField
  state?: AddressField
  street?: AddressField
}

interface AddressField {
  value: string | number[]
}
