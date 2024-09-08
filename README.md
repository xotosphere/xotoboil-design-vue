# xotoboil-design-vue

This repository is a starter project for building Vue.js components using **Storybook V8** within an **Atomic Design** architecture. It helps developers to build scalable and reusable UI components by breaking down the UI into smaller, manageable parts, such as atoms, molecules, and organisms.

Storybook allows you to view and test these components in isolation, helping in the development of a consistent design system.

## Features

- **Vue.js**: A progressive JavaScript framework for building UIs.
- **Atomic Design**: A methodology to structure and scale component-based UIs.
- **Storybook**: An open-source tool for developing UI components in isolation.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/xotosphere/xotoboil-design-vue.git
cd xotoboil-design-vue
```

### 2. Install dependencies

```bash
yarn 
```

### 3. Set up Storybook

```bash
# Run the following command to start Storybook: 
yarn run storybook
```

Storybook will run on [http://localhost:4066](http://localhost:4066).

---

## Atomic Design Structure

This project follows the Atomic Design methodology, which divides the UI into five levels:

1. **Atoms**: Basic elements (buttons, inputs, etc.).
2. **Molecules**: Groups of atoms that form a unit (e.g., form groups).
3. **Organisms**: Complex UI components (e.g., header, footer).
4. **Templates**: Layouts combining organisms and other components.
5. **Pages**: Full-page views composed of templates.

---

## GitHub Access Token Setup

This project requires a GitHub Access Token to fetch data or interact with GitHub's API. You can set it up using an environment variable.

### 1. Obtain your GitHub Access Token

1. Go to your [GitHub Settings](https://github.com/settings/tokens).
2. Generate a new token with the necessary scopes.
3. Copy your generated token.

### 2. Export the Access Token

Once you have your token, export it as an environment variable by running the following command:

```bash
export ACCESS_TOKEN="token"
```

This token is necessary for interacting with GitHub's API. Replace `"token"` with your actual GitHub token. Make sure you never share or commit this token in version control.

---

## Running the Project

After setting up the GitHub Access Token and installing the dependencies, you can start developing your components in the Storybook environment. Simply run:

```bash
yarn run serve
```
