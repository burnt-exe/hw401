$RepoName = "HW401"
$RootPath = Join-Path (Get-Location) $RepoName

$folders = @(
    ".github/workflows",
    "public",
    "public/assets",
    "public/assets/images",
    "public/assets/icons",
    "public/assets/video",
    "public/assets/docs",
    "src",
    "src/app",
    "src/app/home",
    "src/app/modules",
    "src/app/modules/week1",
    "src/app/modules/week2",
    "src/app/modules/week3",
    "src/app/case-studies",
    "src/app/frameworks",
    "src/app/concepts",
    "src/app/instructor",
    "src/app/student",
    "src/app/references",
    "src/components",
    "src/components/layout",
    "src/components/navigation",
    "src/components/cards",
    "src/components/media",
    "src/components/quiz",
    "src/components/progress",
    "src/components/charts",
    "src/content",
    "src/content/modules",
    "src/content/case-studies",
    "src/content/frameworks",
    "src/content/concepts",
    "src/content/references",
    "src/data",
    "src/data/json",
    "src/data/config",
    "src/hooks",
    "src/lib",
    "src/services",
    "src/styles",
    "src/utils",
    "src/types",
    "src/context",
    "src/state",
    "src/tests",
    "src/tests/unit",
    "src/tests/integration",
    "scripts",
    "docs",
    "archive"
)

$files = @(
    "README.md",
    ".gitignore",
    ".env.example",
    "package.json",
    "tsconfig.json",
    "next.config.js",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/globals.css",
    "src/components/layout/Header.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/navigation/Sidebar.tsx",
    "src/components/navigation/Breadcrumbs.tsx",
    "src/components/cards/ModuleCard.tsx",
    "src/components/cards/CaseStudyCard.tsx",
    "src/components/media/HeroBanner.tsx",
    "src/components/quiz/QuizBlock.tsx",
    "src/components/progress/ProgressTracker.tsx",
    "src/content/modules/week1/index.json",
    "src/content/modules/week2/index.json",
    "src/content/modules/week3/index.json",
    "src/data/config/site.json",
    "src/lib/constants.ts",
    "src/lib/navigation.ts",
    "src/styles/tokens.css",
    ".github/workflows/deploy.yml",
    "scripts/bootstrap.ps1"
)

New-Item -ItemType Directory -Force -Path $RootPath | Out-Null

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path (Join-Path $RootPath $folder) | Out-Null
}

foreach ($file in $files) {
    $fullPath = Join-Path $RootPath $file
    $parent = Split-Path $fullPath -Parent

    if (-not (Test-Path $parent)) {
        New-Item -ItemType Directory -Force -Path $parent | Out-Null
    }

    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType File -Path $fullPath | Out-Null
    }
}

Set-Content -Path (Join-Path $RootPath "README.md") -Value @"
# HW401

Dynamic and responsive web application for the HW401 course.

## Structure
- src/app: route-based application pages
- src/components: reusable UI components
- src/content: course content and structured learning assets
- src/data: config and JSON-driven metadata
- public/assets: static media
- scripts: automation
- .github/workflows: CI/CD
"@

Set-Content -Path (Join-Path $RootPath ".gitignore") -Value @"
node_modules/
.next/
out/
dist/
build/
.env
.env.local
coverage/
.DS_Store
Thumbs.db
"@

Write-Host ""
Write-Host "HW401 web app scaffold created at: $RootPath" -ForegroundColor Green
Write-Host ""

tree $RootPath /F