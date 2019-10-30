# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
