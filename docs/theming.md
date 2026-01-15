# Theming System

The theming system is built on **CSS Variables** and **Context**.

## Core Components

- **`src/styles/theme.css`**: Defines the Design Tokens (colors, radius) for light and dark modes.
- **`src/app/providers/theme-provider.tsx`**: Manages the persistent state (`localStorage`) and toggles the `.dark` class on `<html>`.
- **`src/hooks/useTheme.ts`**: Consumes the theme context.

## Adding Colors

1.  Open `src/styles/theme.css`.
2.  Add a new variable to `:root` (light) and `.dark` (dark).
    ```css
    --brand-color: 222.2 47.4% 11.2%;
    ```
3.  Extend Tailwind config if needed to use `bg-brand-color`.
