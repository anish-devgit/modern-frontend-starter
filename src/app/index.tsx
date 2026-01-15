import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/theme-provider'
import { router } from '@/app/router'

export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}
