# Architecture

## Directory Structure (Core Engine)

```
/
├─ src/
│  ├─ app/            # Application composition layer
│  │  ├─ providers/   # Global Context providers (Theme, etc.)
│  │  ├─ index.tsx    # Root App Component (Providers + Router)
│  │  └─ router.tsx   # Request routing configuration
│  ├─ components/     # UI Library
│  │  ├─ ui/          # Atomic primitives (Button, Input)
│  │  └─ layout/      # Structural components (Navbar, MainLayout)
│  ├─ hooks/          # Custom React Hooks (useTheme)
│  ├─ lib/            # Utilities and Configuration
│  │  ├─ config.ts    # Validated Environment Configuration
│  │  ├─ constants.ts # Global constants
│  │  └─ utils.ts     # Helper functions (cn)
│  ├─ pages/          # Page Views
│  ├─ styles/         # Global Styles
│  │  ├─ globals.css  # Tailwind imports + base styles
│  │  └─ theme.css    # CSS Variables / Design Tokens
│  └─ main.tsx        # Entry Point
```

## Key Decisions

- **`src/app`**: The "Kernel". Contains everything needed to bootstrap the app.
- **`src/lib/config.ts`**: The only place `import.meta.env` should be accessed.
- **Fail-Fast**: The app will not start in development if required env vars are missing.
