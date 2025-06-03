
# Portfolio-Ashish

This project consists of three interconnected components:

1. **Main Portfolio**: A personal portfolio website showcasing projects, skills, and experiences. Built using React, Vite, and Tailwind CSS for a modern and responsive design.

2. **Portfolio MERN Backend**: A backend service developed with the MERN stack (MongoDB, Express.js, React, Node.js). It handles API requests, manages data, and provides a robust foundation for the portfolio's dynamic features.

3. **Portfolio Dashboard**: An admin dashboard for managing portfolio content, such as projects, blogs, and user interactions. It offers an intuitive interface for seamless updates and monitoring.

Together, these components create a comprehensive portfolio solution, combining a visually appealing frontend, a powerful backend, and an efficient content management system.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **ESLint**: A tool for identifying and fixing JavaScript code issues.
- **Zod**: A TypeScript-first schema declaration and validation library.

## Project Structure

```
MAIN_PORTFOLIO/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global and component-specific styles
│   ├── main.jsx          # Entry point for the React app
│   └── index.css         # Tailwind CSS entry point
├── .env                  # Environment variables
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore rules
├── components.json       # UI component configuration
├── index.html            # HTML entry point
├── jsconfig.json         # JavaScript configuration for path aliases
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-ashish.git
   cd portfolio-ashish
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code issues.

## Environment Variables

The project uses the following environment variables:

- `VITE_BASE_URL`: Base URL for API requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/)
