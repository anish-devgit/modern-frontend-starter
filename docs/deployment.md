# Deployment Guide

This project is a static React application built with Vite. It can be deployed to any static hosting provider.

## 🚀 Option 1: Vercel (Recommended)

Vercel provides the best performance and specialized support for modern frontend frameworks.

1.  Push your code to GitHub (you have already done this).
2.  Go to [Vercel.com](https://vercel.com) and Sign Up / Log In.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your `modern-frontend-starter` repository.
5.  **Build Settings**: Vercel detects Vite automatically.
    *   Framework Preset: `Vite`
    *   Build Command: `npm run build` (or `pnpm build`)
    *   Output Directory: `dist`
6.  Click **Deploy**.

## ⚡ Option 2: Netlify

1.  Go to [Netlify.com](https://netlify.com).
2.  Click **"Add new site"** -> **"Import an existing project"**.
3.  Connect to GitHub and select your repo.
4.  **Build Settings**:
    *   Build Command: `pnpm build`
    *   Publish directory: `dist`
5.  Click **Deploy site**.

## 🐙 Option 3: GitHub Pages

To deploy to GitHub Pages, you need to configure `vite.config.ts` and add a workflow.

1.  **Update `vite.config.ts`**:
    Add `base: "/modern-frontend-starter/"` (replace with your repo name).

2.  **Create Workflow**:
    Create `.github/workflows/deploy.yml`:

    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: [main]

    permissions:
      contents: read
      pages: write
      id-token: write

    jobs:
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: pnpm/action-setup@v2
            with:
              version: 9
          - uses: actions/setup-node@v4
            with:
              node-version: 20
              cache: 'pnpm'
          - run: pnpm install
          - run: pnpm build
          - uses: actions/configure-pages@v4
          - uses: actions/upload-pages-artifact@v3
            with:
              path: './dist'
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```

3.  **Enable Pages**:
    Go to GitHub Repo Settings -> Pages -> Source -> select "GitHub Actions".
