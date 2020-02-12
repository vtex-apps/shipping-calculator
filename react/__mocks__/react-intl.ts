/* eslint-disable @typescript-eslint/no-var-requires */
const intl = require('react-intl')
const PropTypes = require('prop-types')

module.exports = {
  ...intl,
  intlShape: PropTypes.any,
}
