# Muhammad Tegar Abhiram - Portfolio

Portfolio built with Next.js, TypeScript, and Framer Motion.

Live site: [garr007.github.io/portfolio-website](https://garr007.github.io/portfolio-website/)

## Development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy.yml` automatically:

1. Installs dependencies with `npm ci`.
2. Builds the Next.js static export into `out/`.
3. Uploads the generated site as a GitHub Pages artifact.
4. Deploys the artifact after every push to `main`.

In the GitHub repository, open **Settings > Pages** and set **Source** to
**GitHub Actions**. Then push the project to the `main` branch.
