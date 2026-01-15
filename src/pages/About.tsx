import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl space-y-8 px-4 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about the architecture and usage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Set up the project in less than 60 seconds.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="secondary">
              <a
                href="https://github.com/anish-devgit/modern-frontend-starter#getting-started"
                target="_blank"
                rel="noreferrer"
              >
                Read Guide
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Architecture</CardTitle>
            <CardDescription>
              Learn about the folder structure and design decisions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="secondary">
              <Link to="#">View Architecture</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
