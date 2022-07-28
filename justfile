dev:
  pnpm exec vite --host
build:
  pnpm exec tsc
  pnpm exec vite build
  deno run --allow-read --allow-write buildPages.ts
preview:
  pnpm exec vite preview --host
deploy:
  netlify deploy --prod --dir dist
