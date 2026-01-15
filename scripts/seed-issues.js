import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const issuesPath = path.join(process.cwd(), 'scripts', 'issues.json')
const issues = JSON.parse(fs.readFileSync(issuesPath, 'utf-8'))

console.log(`Found ${issues.length} issues to create...`)

try {
  // Check if gh is installed
  execSync('gh --version', { stdio: 'ignore' })
} catch (e) {
  console.error('Error: GitHub CLI (gh) is not installed or not in PATH.')
  console.error('Please install it: https://cli.github.com/')
  process.exit(1)
}

// Check auth status
try {
  execSync('gh auth status', { stdio: 'ignore' })
} catch (e) {
  console.error('Error: You are not logged into GitHub CLI.')
  console.error('Run: gh auth login')
  process.exit(1)
}

issues.forEach((issue, index) => {
  console.log(`[${index + 1}/${issues.length}] Creating: ${issue.title}`)
  try {
    const labels = issue.labels.join(',')
    // Construct command
    // We use --body-file to avoid shell escaping issues if we wrote to temp file,
    // but for simplicity here we'll assume body is safe or just pass via stdio if complex.
    // simpler: use child_process.spawn or execSync with input
    // But execSync with string is easiest for standard text.

    // Escape quotes in body for command line usage if strictly necessary,
    // but typically gh accepts direct strings.
    // A safer way is writing body to a temp file.
    const tempFile = path.join(process.cwd(), `temp_issue_${index}.md`)
    fs.writeFileSync(tempFile, issue.body)

    execSync(
      `gh issue create --title "${issue.title}" --body-file "${tempFile}" --label "${labels}"`,
      {
        stdio: 'inherit',
      }
    )

    fs.unlinkSync(tempFile)

    // Sleep purely to avoid heavy rate limits if any
    // execSync('sleep 1'); // sleep command might not be on windows.
  } catch (err) {
    console.error(`Failed to create issue "${issue.title}":`, err.message)
  }
})

console.log('✅ All issues processed.')
