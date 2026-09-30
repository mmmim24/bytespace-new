# Bytespace

Bytespace is a web-only frontend project built as an online assessment for a frontend engineer role at [Dointech](https://doin.tech/). It implements a website design scaffolded from a Figma design using Next.js, TypeScript, and Tailwind CSS.

The interface is intended for desktop web browsers and is not designed to be responsive for mobile phones or tablets. AI assistance during implementation was minimal and limited to suggestions from VS Code Copilot.

The project is deployed on [Vercel](https://bytespace-new-amber.vercel.app/).

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- pnpm (the repository's declared package manager); npm can also be used

## Project Structure

```text
app/
  (auth)/                 # Authentication route group
    layout.tsx
    login/page.tsx        # /login
    register/page.tsx     # /register
  (main)/
    layout.tsx
    page.tsx              # Main landing page (/)
  components/             # Page sections and shared UI components
    Clients.tsx
    Courses.tsx
    CTA.tsx
    Discover.tsx
    Footer.tsx
    Hero.tsx
    Info.tsx
    Login.tsx
    Navbar.tsx
    Register.tsx
    Testimonials.tsx
    floating-objects/
  utils/                  # Shared data and helpers
    data.ts
    lib.ts
  globals.css
  layout.tsx
  not-found.tsx
fonts/
  satoshi/                # Local Satoshi font files and CSS
public/
  assets/                 # Images and other static assets
    clients/
    courses/
    frames/
    learning-paths/
    logo/
    objects/
    testimonials/
    users/
```

## Run Locally

You will need Node.js installed. From the project root, choose either pnpm or npm to install dependencies and start the development server.

### Using pnpm

```bash
pnpm install
pnpm dev
```

### Using npm

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The development server supports hot reloading as you edit the project.

## Available Scripts

```bash
pnpm dev       # Start the development server
pnpm build     # Create a production build
pnpm start     # Run the production server (after building)
pnpm lint      # Run ESLint
```

With npm, use `npm run` followed by the same script name, for example `npm run build` or `npm run lint`.