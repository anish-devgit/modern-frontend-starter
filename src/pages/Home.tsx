import { Github, Zap, Code, Layout } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 px-4 text-center">
        <a
          href="https://github.com/anish/modern-frontend-starter"
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80"
          target="_blank"
        >
          🎉 Now open source and free to use
        </a>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The Ultimate frontend <br className="hidden sm:inline" />
          starter kit for <span className="text-primary">React</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Production-ready. Opinionated. Beautiful. Includes Vite, TypeScript, Tailwind CSS,
          shadcn/ui patterns, and best practices baked in.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link to="/about">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/anish/modern-frontend-starter"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <section
        id="features"
        className="container mx-auto space-y-6 bg-slate-50 px-4 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This starter kit comes fully loaded with everything you need to build modern web
            applications.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Zap className="mb-2 h-10 w-10" />
              <CardTitle>Vite + React</CardTitle>
              <CardDescription>
                Blazing fast build times and hot module replacement.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Code className="mb-2 h-10 w-10" />
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Strict mode enabled. Catch errors before they happen.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Layout className="mb-2 h-10 w-10" />
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Utility-first CSS framework for rapid UI development.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Added more cards as needed */}
        </div>
      </section>
    </div>
  )
}
