import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const issues = JSON.parse(fs.readFileSync(path.join(__dirname, 'issues.json'), 'utf-8'))

console.log(`\x1b[36mFound ${issues.length} issues to create:\x1b[0m\n`)

issues.forEach((issue, index) => {
  console.log(`\x1b[32m[${index + 1}] ${issue.title}\x1b[0m`)
  console.log(`Labels: ${issue.labels.join(', ')}`)
  console.log('---')
})

console.log(`\n\x1b[33mTo create these on GitHub, install the GitHub CLI (gh) and run:\x1b[0m`)
console.log(`
issues.forEach(issue => {
  // pseudo code
  gh issue create --title "..." --body "..." --label "..."
});
`)
