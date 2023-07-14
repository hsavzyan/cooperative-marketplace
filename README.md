# Cooperative Marketplace

Cooperative Marketplace is a React and TypeScript application that serves as a cooperative marketplace where users can browse cooperatively owned businesses, view their products, add products to a shopping cart, and leave reviews for the businesses.

## Features

- **Data Structure**: The application uses a predefined dataset of businesses, each with its own set of products and reviews. Each business is an object with an `id`, `name`, `description`, `products` array, and `reviews` array. Each product and review also has its own `id`, along with other properties like `name`, `price`, `author`, and `content`.
- **Components**: The application is composed of several React components, including `App`, `Marketplace`, `Business`, `Product`, `Review`, `Cart`, `SignUp`, `SignIn`, `SignOut`, and `Header`.
- **State Management**: The application uses React's `useState` and `useContext` hooks for state management.
- **Styling**: The application uses Tailwind CSS for styling.
- **Interactivity**: The application includes several interactive elements, such as a search bar, a dropdown for sorting businesses, forms for leaving a review and signing up/signing in, and "Add to Cart" and "Remove" buttons.
- **User Authentication**: The application uses Firebase Authentication for user sign up, sign in, and sign out.

## Setup

1. Clone the repository.
2. Run `yarn install` to install the dependencies.
3. Run `yarn start` to start the development server.
4. Open `http://localhost:3000` in your browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
