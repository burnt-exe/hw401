param(
    [string]$Root = ".",
    [string]$RepoName = "HW401"
)

$ErrorActionPreference = "Stop"

$repoPath = Join-Path $Root $RepoName

Write-Host "Creating repo scaffold at: $repoPath"

# Create root
New-Item -ItemType Directory -Force -Path $repoPath | Out-Null

# Directories
$directories = @(
    ".github",
    ".github/workflows",
    "docs",
    "docs/assets",
    "docs/images",
    "docs/diagrams",
    "docs/case-studies",
    "docs/concepts",
    "docs/frameworks",
    "docs/incidents",
    "docs/policy",
    "docs/student-guide",
    "docs/instructor-guide",
    "docs/references",
    "slides",
    "scripts",
    "templates",
    "archive"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Force -Path (Join-Path $repoPath $dir) | Out-Null
}

# Helper to write UTF-8 files safely
function Write-Utf8File {
    param(
        [string]$Path,
        [string]$Content
    )

    $parent = Split-Path $Path -Parent
    if ($parent -and -not (Test-Path $parent)) {
        New-Item -ItemType Directory -Force -Path $parent | Out-Null
    }

    Set-Content -Path $Path -Value $Content -Encoding UTF8
}

# README.md
Write-Utf8File -Path (Join-Path $repoPath "README.md") -Content @'
# HW401 Documentation Hub

Warfare in the Fifth Domain repository rebuilt for structured refactor.

## Structure

- `docs/` course documentation
- `slides/` presentation assets
- `scripts/` automation and validation
- `templates/` reusable page templates
- `.github/workflows/` CI/CD workflows
'@

# .gitignore
Write-Utf8File -Path (Join-Path $repoPath ".gitignore") -Content @'
# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Node
node_modules/
dist/
build/
.cache/

# Logs
*.log

# Python
__pycache__/
*.pyc

# Env
.env
.env.*
'@

# docs/index.md
Write-Utf8File -Path (Join-Path $repoPath "docs/index.md") -Content @'
# HW401 Documentation Hub

Welcome to the rebuilt documentation structure.

## Sections

- [Incidents](./incidents/README.md)
- [Frameworks](./frameworks/README.md)
- [Concepts](./concepts/README.md)
- [Policy](./policy/README.md)
- [Student Guide](./student-guide/README.md)
- [Instructor Guide](./instructor-guide/README.md)
- [References](./references/README.md)
'@

# Section README files
Write-Utf8File -Path (Join-Path $repoPath "docs/incidents/README.md") -Content @'
# Incidents

Core cyber incident case studies and operational analysis.
'@

Write-Utf8File -Path (Join-Path $repoPath "docs/frameworks/README.md") -Content @'
# Frameworks

Operational and strategic cyber frameworks used throughout HW401.
'@

Write-Utf8File -Path (Join-Path $repoPath "docs/concepts/README.md") -Content @'
# Concepts

Foundational concepts for cyber conflict, information warfare, and fifth-domain operations.
'@

Write-Utf8File -Path (Join-Path $repoPath "docs/policy/README.md") -Content @'
# Policy

Doctrine, law, norms, and policy references relevant to cyber operations.
'@

Write-Utf8File -Path (Join-Path $repoPath "docs/student-guide/README.md") -Content @'
# Student Guide

Student-facing navigation, study guidance, and assessment support.
'@

Write-Utf8File -Path (Join-Path $repoPath "docs/instructor-guide/README.md") -Content @'
# Instructor Guide

Instructor notes, facilitation guidance, and teaching aids.
'@

Write-Utf8File -Path (Join-Path $repoPath "docs/references/README.md") -Content @'
# References

Curated bibliography, source notes, and further reading.
'@

# Template page
Write-Utf8File -Path (Join-Path $repoPath "templates/page-template.md") -Content @'
# Title

## Overview

## Why it matters

## Key concepts

## Military implications

## Strategic takeaways

## References
'@

# scripts/new-doc-page.ps1
Write-Utf8File -Path (Join-Path $repoPath "scripts/new-doc-page.ps1") -Content @'
param(
    [Parameter(Mandatory = $true)]
    [string]$Section,

    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

$slug = $Name.ToLower() -replace "[^a-z0-9]+", "-" -replace "(^-|-$)", ""
$basePath = Join-Path $PSScriptRoot "..\docs\$Section"
$filePath = Join-Path $basePath "$slug.md"

if (-not (Test-Path $basePath)) {
    New-Item -ItemType Directory -Force -Path $basePath | Out-Null
}

if (-not (Test-Path $filePath)) {
    $content = @"
# $Name

## Overview

## Why it matters

## Key concepts

## Military implications

## Strategic takeaways

## References
"@

    Set-Content -Path $filePath -Value $content -Encoding UTF8
    Write-Host "Created: $filePath"
}
else {
    Write-Warning "File already exists: $filePath"
}
'@

# scripts/verify-lowercase-links.ps1
Write-Utf8File -Path (Join-Path $repoPath "scripts/verify-lowercase-links.ps1") -Content @'
$ErrorActionPreference = "Stop"

$docsPath = Join-Path $PSScriptRoot "..\docs"
$files = Get-ChildItem -Path $docsPath -Recurse -File -Include *.md

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches($content, "\[[^\]]+\]\(([^)]+)\)")

    foreach ($match in $matches) {
        $target = $match.Groups[1].Value
        if ($target -cmatch "[A-Z]") {
            Write-Warning "Uppercase link found in $($file.FullName): $target"
        }
    }
}

Write-Host "Lowercase link verification completed."
'@

# GitHub workflow
Write-Utf8File -Path (Join-Path $repoPath ".github/workflows/docs-validation.yml") -Content @'
name: docs-validation

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate-docs:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Run lowercase path check
        shell: pwsh
        run: ./scripts/verify-lowercase-links.ps1
'@

Write-Host ""
Write-Host "Repo scaffold created successfully."
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Set-Location `"$repoPath`""
Write-Host "2. git init"
Write-Host "3. git branch -M main"
Write-Host "4. git remote add origin https://github.com/burnt-exe/HW401.git"
Write-Host "5. git add ."
Write-Host "6. git commit -m 'Initial HW401 rebuild scaffold'"
Write-Host "7. git push -u origin main"