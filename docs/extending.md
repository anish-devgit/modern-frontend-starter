# Extending the Core Engine

This guide explains how to safely add features without breaking the core architecture.

## Adding a New Page and Route

1.  **Create Page Component**: Add `src/pages/YourPage.tsx`.
2.  **Register Route**: Open `src/app/router.tsx` and add your route to the `children` array.
    ```tsx
    {
      path: "new-feature",
      element: <YourPage />,
    },
    ```

## Adding a New UI Component

1.  **Create Component**: Add `src/components/ui/your-component.tsx`.
2.  **Use Variants**: Use `class-variance-authority` (cva) for styling variants.
3.  **Export**: Ensure it exports named components.

## Adding Global State

1.  **Create Provider**: Add `src/app/providers/your-provider.tsx`.
2.  **Wrap App**: Import and use it in `src/app/index.tsx`.

## Environment Variables

1.  **Add to .env**: Add `VITE_MY_VAR=value`.
2.  **Update Config**: Open `src/lib/config.ts`.
3.  **Validate**: Add it to the `config` object using `checkEnv`.
