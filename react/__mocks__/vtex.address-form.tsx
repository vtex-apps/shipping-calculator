import {
  addValidation,
  removeValidation,
  CountrySelector,
  PostalCodeGetter,
  getAddressByGeolocation,
} from '@vtex/address-form'

import { Component } from 'react'

function injectRules(component: Component) {
  return component
}

class AddressRules extends Component {
  public render() {
    return this.props.children
  }
}

class AddressContainer extends Component {
  public render() {
    return this.props.children
  }
}

export const helpers = {
  addValidation,
  removeValidation,
  injectRules,
  getAddressByGeolocation,
}

export const countries = {
  defaultRules: {},
}

export const components = {
  AddressContainer,
  AddressRules,
  CountrySelector,
  PostalCodeGetter,
}
