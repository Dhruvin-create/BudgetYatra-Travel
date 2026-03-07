# GitHub Repository Setup Guide

Follow these steps to create a GitHub repository and push your BudgetYatra project.

## Prerequisites

- Git installed on your system
- GitHub account created
- Terminal/Command Prompt access

## Step 1: Initialize Git Repository (Local)

Open terminal in your project folder and run:

```bash
git init
```

## Step 2: Create .gitignore File

A `.gitignore` file already exists in your project. Verify it contains:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
```

## Step 3: Add All Files to Git

```bash
git add .
```

## Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: BudgetYatra travel blog website"
```

## Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `budgetyatra-travel` (or your preferred name)
   - **Description**: "Budget-friendly travel blog for exploring India"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 6: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/budgetyatra-travel.git

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 7: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your project files
3. README.md will be displayed on the repository homepage

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **"Add"** → **"Add Existing Repository"**
4. Select your project folder
5. Click **"Publish repository"** button
6. Choose repository name and visibility
7. Click **"Publish Repository"**

## Common Issues & Solutions

### Issue 1: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/budgetyatra-travel.git
```

### Issue 2: Authentication Required
If using HTTPS, you'll need a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo` (full control)
4. Copy the token
5. Use it as password when pushing

**OR** use SSH instead:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/budgetyatra-travel.git
```

### Issue 3: Large Files Warning
If you get warnings about large files:
```bash
# Remove node_modules if accidentally added
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

## Step 8: Add Repository Description & Topics (Optional)

On your GitHub repository page:
1. Click **"About"** settings (gear icon)
2. Add description: "Budget-friendly travel blog for exploring India - Built with Next.js 16, React 19, and Tailwind CSS 4"
3. Add topics: `nextjs`, `react`, `tailwindcss`, `travel-blog`, `budget-travel`, `india-travel`
4. Add website URL (after deployment): `https://your-site.vercel.app`

## Step 9: Future Updates

When you make changes to your code:

```bash
# Check status
git status

# Add changed files
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

## Quick Reference Commands

```bash
# Check current status
git status

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View remote URL
git remote -v
```

## Next Steps After GitHub Push

1. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy automatically

2. **Add GitHub Actions** (Optional):
   - Create `.github/workflows/test.yml` for automated testing
   - Run tests on every push

3. **Enable GitHub Pages** (Optional):
   - For documentation or landing page

4. **Add Collaborators**:
   - Settings → Collaborators → Add people

## Repository Structure on GitHub

After pushing, your repository will look like:

```
budgetyatra-travel/
├── .github/              (if you add workflows)
├── .kiro/                (spec files)
├── public/               (static assets)
├── src/                  (source code)
├── .gitignore
├── README.md
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── ... (other config files)
```

## Tips

1. **Commit Often**: Make small, frequent commits with clear messages
2. **Use Branches**: Create feature branches for new features
3. **Write Good Commit Messages**: 
   - ✅ "Add newsletter subscription feature"
   - ❌ "Update files"
4. **Keep README Updated**: Update README.md as you add features
5. **Use .gitignore**: Never commit `node_modules/`, `.env` files, or build outputs

## Useful Git Commands Cheat Sheet

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# View differences
git diff

# Stash changes temporarily
git stash
git stash pop

# Tag a release
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0
```

---

## Need Help?

- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com/
- GitHub Support: https://support.github.com/

---

**Your project is ready to be shared with the world! 🚀**
