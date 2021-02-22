# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Updated to use `ShippingForm` component from `checkout-shipping`.

## [0.10.0] - 2020-12-07
### Added
- Pickup options to the list of available shipping options.

## [0.9.1] - 2020-11-05
### Fixed
- Added back id `view-delivery-options` to button in `ShippingCalculator`.

## [0.9.0] - 2020-11-04
### Changed
- Replaced usage of `@vtex/address-form` components by `vtex.checkout-shipping`.

## [0.8.3] - 2020-02-17
### Fixed
- Calculate button not working when user didn't edit the zipcode after entering edit mode.

## [0.8.2] - 2020-02-12
### Changed
- Update lint config.

## [0.8.1] - 2019-12-30

### Changed

- Spacings in the UI.

## [0.8.0] - 2019-12-18

### Added

- Warning when there are unavailable products.
- Warning when all the products are unavailable.

## [0.7.0] - 2019-12-10

### Changed

- `shipping-calculator` now receives `canEditData` prop in order to determine whether shipping data could be edited or not.

## [0.6.0] - 2019-12-03

### Added

- `schema` to `Shipping` component so it appears in Site Editor.

## [0.5.4] - 2019-11-21

### Fixed

- Showing shipping estimate if has address postalCode;
- Loading estimate result and showing in the right moment.

### Changed

- ShippingInfo price with `FormattedPrice` component.

## [0.5.3] - 2019-11-08

### Changed

- Store `interfaces` `preview` structure.

## [0.5.2] - 2019-11-08

### Fixed

- Margin bottom from last shipping option.

## [0.5.1] - 2019-11-07

### Changed

- Heading margin.

## [0.5.0] - 2019-11-04

### Changed

- Instances of `Button` to new component `ButtonPlain`.

## [0.4.0] - 2019-10-30

### Added

- `blocks` file in order to pass children components to `Shipping`.
- `estimate-shipping` interface with `preview` property for skeleton purposes.
- Preview skeleton.

### Changed

- Receives the necessary shipping data through props.

## [0.3.4] - 2019-10-29

### Fixed

- Invalid postal code being accepted.

## [0.3.3] - 2019-10-23

### Added

- Add `slugify` function.

### Changed

- `id` to lowercase letters and without blank space.

## [0.3.2] - 2019-10-17

### Added

- `id` to the styleguide components.

## [0.3.1] - 2019-10-15

### Fixed

- `PostalCodeGetter` with `autoFocus` now.

## [0.3.0] - 2019-10-10

### Added

- Selects a delivery option.
- Estimates shipping value.

### Changed

- Title and postal code margin values.

## [0.2.1] - 2019-08-23

### Fixed

- Some element margins.

## [0.2.0] - 2019-08-23

### Added

- Initial state with link to show delivery options.

## [0.1.1] - 2019-08-21

### Fixed

- Container styles.

### Added

- Default props with new address if it does not come from props.

## [0.1.0] - 2019-08-20

### Added

- Component blocks setup;
- Initial component with postalCode calculator;
- Shipping result with Shipping Options.
