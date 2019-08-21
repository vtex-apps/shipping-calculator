import getGGUID from './gguid'

export function newAddress(address?: NewAddress) {
  return {
    addressId: (address && address.addressId) || getGGUID(),
    addressType: (address && address.addressType) || 'residential',
    city: (address && address.city) || '',
    complement: (address && address.complement) || '',
    country: (address && address.country) || '',
    geoCoordinates: (address && address.geoCoordinates) || [],
    neighborhood: (address && address.neighborhood) || '',
    number: (address && address.number) || '',
    postalCode: (address && address.postalCode) || '',
    receiverName: (address && address.receiverName) || '',
    reference: (address && address.reference) || '',
    state: (address && address.state) || '',
    street: (address && address.street) || '',
    addressQuery: (address && address.addressQuery) || '',
  }
}
