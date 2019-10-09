import {
  addValidation,
  removeValidation,
  CountrySelector,
  PostalCodeGetter,
  getAddressByGeolocation,
} from '@vtex/address-form'
import {
  isValidAddress,
  validateAddress,
  validateField,
} from '@vtex/address-form/lib/validateAddress'
import InputError from '@vtex/address-form/lib/inputs/DefaultInput/InputError'
import InputText from '@vtex/address-form/lib/inputs/DefaultInput/InputText'
import DefaultInput from '@vtex/address-form/lib/inputs/DefaultInput'
import AddressShapeWithValidation from '@vtex/address-form/lib/propTypes/AddressShapeWithValidation'
import AddressSummary from '@vtex/address-form/lib/AddressSummary'

// Added react context for injectRules mock
// eslint-disable-next-line
import { Component } from 'react'

function injectRules(component: Component) {
  return component
}

const AddressRules = class extends Component {
  public render() {
    return this.props.children
  }
}

const AddressContainer = class extends Component {
  public render() {
    return this.props.children
  }
}

export const shapes = {
  AddressShapeWithValidation,
}

export const helpers = {
  addValidation,
  removeValidation,
  validateAddress,
  isValidAddress,
  validateField,
  injectRules,
  getAddressByGeolocation,
}

export const countries = {
  defaultRules: {},
}

export const inputs = {
  InputError,
  InputText,
  DefaultInput,
}

export const components = {
  AddressSummary,
  AddressContainer,
  AddressRules,
  CountrySelector,
  PostalCodeGetter,
}
