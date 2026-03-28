# Contributing

Thanks for your interest in contributing! Here's how to get started.

## Local Setup

1. Fork and clone the repo
2. Install dependencies: `npm install`
3. Copy the env file: `cp .env.example .env.local`
4. Fill in your Supabase and Creem credentials in `.env.local`
5. Run the dev server: `npm run dev`

## Branch Naming

Use the following prefixes when creating branches:

| Prefix   | Use for                   |
| -------- | ------------------------- |
| `feat/`  | New features              |
| `fix/`   | Bug fixes                 |
| `chore/` | Maintenance, config, deps |
| `docs/`  | Documentation only        |
| `ci/`    | CI/CD changes             |

Example: `feat/credits-wallet`, `fix/webhook-signature`

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
type: short description in present tense
```

Types: `feat`, `fix`, `chore`, `docs`, `ci`, `refactor`, `test`

Keep messages short (under 72 characters). No period at the end.

## Pull Request Process

1. Open a PR against `main`
2. Fill out the PR template
3. Ensure CI passes (lint + typecheck)
4. A maintainer will review and merge

## Questions

Open a [GitHub Discussion](../../discussions) for general questions.
