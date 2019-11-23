# Portfolio: Client

The front-end to my shiny new portfolio, this web app was built with the popular React library, Jest for tests and webpack for compilation

## Technologies

## How to install

```bash
git clone git@github.com:patchyj/jjwm-portfolio-client.git

# or download using zip
```

```bash
cd jjwm-portfolio-client

# if using npm

npm i

# if using yarn

yarn
```

---

## How to run

Once installed, there are two options to run it:

1. `npm start` will start the enire application, including tests and linting everytime the server is restarted

2. `npm run start:dev` will only run the development command, with far reduced noise

---

## Testing

### Unit test: Jest

- `npm test` to run the whole test suite and exit
- `npm run test:watch` to run all tests and watch for changes
- `npm run test:watch <Component>` to run tests for a particular component and watch for changes
- `npm run test:cover` run tests with coverage
- Tests must pass before the build passes

### End-to-end tests: Cypress

- `npm run cypress` run tests in browser
- `npm run cypress:dev` run tests in silent mode (no browser)
- `npm run cypress:cover` run tests with coverage

---

## Linting

This app uses Prettier and ESLint for linting and formatting. You can set your own rules in `.eslintrc`. Recommend turning on your editors `format on save`.

- `npm run lint` to run linting for the app
- `npm run lint:fix` to run linting and fix any issues
- Linting must pass before the build passes

---

## Building

### Pipeline: CircleCI

This app uses the free version of [CircleCI](https://circleci.com/) as a pipeline. You'll need to sign up and create an app.

In `.circleci/config.yml` replace the following line:

```yml
working_directory: ~/<your-circleci-app>
```

### Pipeline: Jenkins - TO DO

### Pipeline: SonarQube - TO DO

### Webpack - TO DO

### Docker - TO DO
