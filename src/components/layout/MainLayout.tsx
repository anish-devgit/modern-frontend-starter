import { Outlet, Link } from 'react-router-dom'
import { Github, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <Zap className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Modern Starter</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/about">Docs</Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/anish-devgit/modern-frontend-starter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a
              href="https://github.com/anish-devgit"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              anish-devgit
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/anish-devgit/modern-frontend-starter"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
