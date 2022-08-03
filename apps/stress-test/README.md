# @fluentui/stress-tests

This package is a collection of stress test applications for Fluent UI. Stress test applications are simplified versions
of real applications that are designed to stress Fluent UI in a different. Stresses include things like bundle size;
DOM size and updates; and layout and style recalculation.

## Usage

### Development

1. `yarn start`
2. Select `stress-test` from the list of packages
3. Open `localhost:3000` in your browser
4. Run manual tests

### "Production"

While stress test apps are never meant to be shipped to a production environment testing against production builds is
useful (for instance, the production version of React is significantly faster than the development build).

1. `yarn workspace @fluentui/stress-test build`
2. `yarn workspace @fluentui/stress-test serve`
3. The application should be opened in your default browser
4. Run manual tests

### Automated Tests

The "Simple Stress" applications have automated tests.

1. `yarn workspace @fluentui/stress-test bench:mount`, tests component mounting performance
2. `yarn workspace @fluentui/stress-test bench:inject-styles`, tests style recalculation performance
3. `yarn workspace @fluentui/stress-test bench:prop-update`, test prop updating performance
