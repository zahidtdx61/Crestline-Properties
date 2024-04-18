# Crestline Properties

Welcome to Crestline Properties, a React-based web application for property listings and user management with authentication using Firebase. Users can sign up and sign in using email, Google, or GitHub accounts. Once authenticated, users can view property listings, manage their profile, and create a wishlist of properties.

## Live Preview

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcrestline-properties.vercel.app%2F)](https://crestline-properties.vercel.app/)
Check out the live website: [Crestline Properties](https://crestline-properties.vercel.app/)

## Features

- **Authentication**:

  - Users can sign up and sign in using email/password, Google, or GitHub accounts.
  - Private routes ensure that certain features (e.g., viewing property details, managing profile, accessing wishlist) are only available to authenticated users.

- **Property Listings**:

  - Users can view various property listings with detailed information.
  - Clicking on the "View Property" button provides detailed information about the property (accessible only to logged-in users).

- **Profile Management**:

  - Logged-in users can update their profiles securely.

- **Wishlist**:
  - Users can add properties to their wishlist by clicking on a star icon on property cards.
  - The wishlist page displays the properties a user has saved, and users can remove properties from their wishlist.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Firebase**: Provides authentication services for user management.
- **Material-UI**: React UI framework for building responsive web applications.
- **React Router DOM**: For client-side routing within the React application.
- **React Hook Form**: Library for managing form state and validation.
- **Swiper**: For implementing image sliders.
- **Animate.css** and **AOS**: Libraries for adding animations to components.
- **React Icons**: Library providing popular icons as React components.

## Used npm Packages

- **`react-router-dom`**: Used for client-side routing within the React application.
- **`react-hook-form`**: Used for managing form state and validation.
- **`swiper`**: Used for implementing image sliders.
- **`animate.css`** and **`aos`**: Used for adding animations to components.
- **`react-icons`**: Used for providing popular icons as React components.

## How to Use Crestline Properties

Welcome to Crestline Properties! This guide will walk you through how to use the features of this React-based web application for property listings and user management.

#### 1. Signing Up and Signing In

- Visit the [Crestline Properties](https://crestline-properties.vercel.app/) website.
- Click on "Sign Up" to create a new account using your email address and password.
- Alternatively, use the Google or GitHub sign-in options for quick authentication.

#### 2. Viewing Property Listings

- Once signed in, you will be directed to the home page displaying various property listings.
- Browse through the properties to view their basic information.

#### 3. Viewing Detailed Property Information

- Click on the "View Property" button on any property card to access detailed information about the property.
- Note: Accessing detailed property information requires you to be logged in.

#### 4. Managing Your Profile

- Click on your profile icon or navigate to the profile section.
- Update your profile details such as name, email, or profile picture.

#### 5. Adding Properties to Wishlist

- On the home page, each property card has a star icon.
- Click on the star icon to add a property to your wishlist.
- Click on the icon again to remove a property from your wishlist.
- Only logged-in users can add properties to the wishlist.

#### 6. Viewing and Managing Wishlist

- Navigate to the wishlist section (accessible from the navigation menu).
- Here, you can view all the properties you have added to your wishlist.
- Remove properties from your wishlist by clicking on the remove button.

#### 7. Viewing Private Routes

- Certain routes, such as viewing detailed property information or managing your profile, are private and accessible only to logged-in users.

## Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.
