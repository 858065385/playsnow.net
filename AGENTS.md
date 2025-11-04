# Repository Guidelines

## Project Structure & Module Organization
- `src/app` holds App Router entry points and layouts; keep server logic here and push reusable UI to `src/components`.
- `src/lib` gathers utilities, while `src/messages` and `src/types` manage localization data and shared contracts; mirror the folder pattern when adding locales.
- Database schema lives in `prisma/schema.prisma`, static assets in `public/`, and Tailwind tokens in `tailwind.config.ts`.

## Build, Test, and Development Commands
- `npm run dev` launches the hot-reloading dev server on `http://localhost:3000`; populate `.env.local` first.
- `npm run build` runs `prisma generate` and compiles the production bundle, and `npm run start` serves it locally.
- `npm run lint` applies the Next.js ESLint preset; run it (and any Prisma migrations) before pushing.
- Use `npx prisma migrate dev --name <change>` to create migrations and regenerate the client.

## Coding Style & Naming Conventions
- Honor the strict TypeScript settings in `tsconfig.json`; prefer explicit return types on exported helpers and server actions.
- Name React components in PascalCase (`UserMenu.tsx`) and colocate Tailwind utility styling within the JSX.
- Keep 2-space indentation and rely on ESLint; if a formatter is needed, use Prettier defaults consistent with Next.js.

## Testing Guidelines
- No automated runner ships yet; add tests alongside source files using `.test.ts` or `.test.tsx` and document any setup in the PR.
- Prioritize coverage for auth flows, Prisma queries, and locale switching, and capture manual QA steps until tooling is in place.

## Commit & Pull Request Guidelines
- Follow the repo’s Conventional Commit history (`feat:`, `fix:`, `chore:`) and keep subjects under ~75 characters, e.g., `feat: add zh-CN marketing page hero`.
- Bundle related code, schema changes, and generated Prisma artefacts in the same commit.
- Pull requests should outline the change, list verification commands (`npm run lint`, migrations), link issues, and attach screenshots or GIFs for UI updates.

## Security & Configuration Tips
- Keep secrets in `.env.local`; never commit real credentials and document new keys with safe placeholders.
- Review `middleware.ts` and `next.config.mjs` whenever changing auth, localization, or routing, and call out any production data risks (plus rollback steps) in the PR.
