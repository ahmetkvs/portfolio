# Ahmet Kavas - Portfolio Website

This repository contains the source code for my personal portfolio website.

## Table of Contents

- [Ahmet Kavas - Portfolio Website](#ahmet-kavas---portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Development Process](#development-process)
  - [Future Enhancements](#future-enhancements)

## About

My name is Ahmet, this website serves as my portfolio to showcase my frontend development skills and my journey in learning web development. I am currently focusing on building projects with React and other modern web technologies.

## Technologies Used

- **Frontend:**

  - React
  - Vite
  - Tailwind CSS
  - React Testing Library

- **Deployment:**

  - Vercel

- **Other:**
  - Git and GitHub for version control

## Project Structure

The main components of this project include:

- `src/`: Contains the React source code.
- `src/components`: Contains each components source code.
- `src/context`: Contains ContextAPI source code for DarkMode and Language Switching.
- `src/context`: Contains ContextAPI source code for DarkMode and Language Switching.
- `src/hooks`: Contains contains custom hooks for api req, language switching, dark mode switching and persistence with localStorage.
- `src/layouts`: Contains contains homeLayout (components for home page expect navbar and footer).
- `src/pages`: Contains contains home page, with layout, navbar and footer.
- `src/services`: Contains contains axios api request for projects.
- `public/`: Contains static assets like the logo.
- `index.html`: The main HTML file.
- `App.jsx`: The entry point.
- `README.md`: This file, providing project information.

## Development Process

- **Initial Setup:** Project was initialized using Vite with React.
- **Layout and componentization :** The project's layout was structured with a component-based architecture for better organization and reusability.
- Key components include:
  - `Navbar`: Handles navigation and logo, mobile-friendly hamburger menu.
  - `ThemeSwitchers`: Manages theme and language preferences.
  - `Header`: Displays the main introduction and call-to-action.
  - `Skills`: Self-explanatory.
  - `Profile`: Presents profile details and "About Me" information.
  - `Projects`: Presents currently done projects.
  - `Footer`: Contact information and social links.
- Layout components like `HomeLayout` were used to structure the main page content.

## Future Enhancements

- Integrating the blog functionality.
- ...

---

**Last Updated:** [02.04.2025]
