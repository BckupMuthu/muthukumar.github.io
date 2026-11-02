#!/usr/bin/env bash

# Quick deployment helper script for Muthukumar Pattan's GitHub Pages Site
set -e

REPO_URL="https://github.com/BckupMuthu/muthukumar.github.io.git"

echo "=========================================================="
echo "  Deploying Muthukumar Pattan's Portfolio to GitHub Pages  "
echo "  Target URL: https://bckupmuthu.github.io                "
echo "=========================================================="

if [ ! -d ".git" ]; then
  echo "Initializing git repository..."
  git init
  git branch -M main
fi

git add .
git commit -m "feat: update Muthukumar Pattan portfolio site" || echo "No changes to commit"

if ! git remote | grep -q "^origin$"; then
  echo "Adding remote origin $REPO_URL..."
  git remote add origin "$REPO_URL"
else
  echo "Remote origin is configured."
fi

echo ""
echo "Ready to push! Run the following command if you want to push now:"
echo "git push -u origin main"
echo ""
