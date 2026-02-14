# Next.js Antigravity Template

This is a Next.js 16 template initialized with `create-next-app`, optimized for rapid development with modern tooling.

## Tech Stack

This template is built with the following core technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Linting & Formatting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## Prerequisites

Ensure you have the following installed:

- Node.js (LTS recommended)
- pnpm (v10+)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/DongkuKim/nextjs-antigravity-template.git
    cd nextjs-antigravity-template
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Start the development server:**

    ```bash
    pnpm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

| Script                         | Description                                      |
| :----------------------------- | :----------------------------------------------- |
| `pnpm run dev`                 | Starts the development server with Turbopack.    |
| `pnpm run build`               | Builds the application for production.           |
| `pnpm run start`               | Starts the production server.                    |
| `pnpm run lint`                | Runs ESLint to identify code quality issues.     |
| `pnpm exec prettier --write .` | Formats all files in the project using Prettier. |

## Project Structure

```bash
.
├── src/
│   └── app/          # App Router directory
├── public/           # Static assets
├── .agent/           # Agentic workflows and skills
├── next.config.ts    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration (if separate) or internal
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

MIT
