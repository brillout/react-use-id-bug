Steps to reproduce:

```bash
git clone git@github.com:brillout/react-use-id-bug
cd react-use-id-bug/
pnpm install
pnpm run dev
```

Go to http://localhost:3000 and obersve how the server-side rendered `useId()` is different from the client-side rendered `useId()`.
