# Muthukumar Pattan — Professional Portfolio & GitHub Pages Site

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-blue?logo=github&style=for-the-badge)](https://bckupmuthu.github.io)
[![Topmate](https://img.shields.io/badge/Topmate-1%3A1%20Mentorship-indigo?logo=googlemeet&style=for-the-badge)](https://topmate.io/muthukumar_pattan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/muthukumar-pattan-a0b8079a/)

A professional, modern, and high-performance personal portfolio website built specifically for [GitHub Pages](https://pages.github.com) at **`https://bckupmuthu.github.io`**.

---

## 🌟 Highlights & Features

- **Tailored Professional Showcase**: Tailored to showcase Muthukumar Pattan's 8+ years experience in Quality Engineering and SDET leadership at **Freshworks** and **Infosys**.
- **Open-Source Spotlight**: Highlights real contributions to **SeleniumHQ** (`SeleniumHQ/selenium`), **STAR Voting** (`star-server`), and **Next.js**.
- **AI Agent Engineering**: Features the DEV Hermes Challenge submission **Daily-Summary-Agent-Hermes-**, showcasing autonomous workflows connecting Slack, Gmail, and LLMs.
- **Topmate Integration**: Prominently highlights 1:1 mentorship sessions, career coaching, and test framework consultations at [topmate.io/muthukumar_pattan](https://topmate.io/muthukumar_pattan).
- **Modern Glassmorphic UI**: Clean dark mode (default) & light mode switcher, fluid responsive layout, interactive stats counter, dynamic project filtering, and smooth navigation.
- **Zero Build Step Complexity**: Built with pure HTML5, Tailwind CSS, Lucide Icons, and vanilla JavaScript. Deploys instantly to GitHub Pages with zero CI/CD build configuration required.

---

## 📂 Project Structure

```text
BckupMuthu.github.io/
├── index.html         # Main single-page application & semantic sections
├── .nojekyll          # Disables Jekyll processing for pure static serving
├── deploy.sh          # One-click deployment script to GitHub Pages
├── css/
│   └── style.css      # Custom animations, glassmorphism, fonts & theme variables
├── js/
│   └── main.js        # Theme toggler, mobile menu, stats animation, project filters
└── assets/
    └── images/        # Static images and brand assets
```

---

## 🚀 How to Deploy to GitHub Pages (2 Minutes)

### Step 1: Create the GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Set the repository name to: **`BckupMuthu.github.io`** *(must match your GitHub username for a personal root domain)*.
3. Make sure it is set to **Public**.
4. Leave "Add a README" unchecked (since this repo already has one).
5. Click **Create repository**.

### Step 2: Push Your Code
Open your terminal inside this folder and run:

```bash
cd /Users/mpattan/.gemini/antigravity/scratch/BckupMuthu.github.io

# Initialize git repository
git init
git add .
git commit -m "feat: initial release of Muthukumar Pattan portfolio"
git branch -M main

# Link to your new GitHub repository
git remote add origin https://github.com/BckupMuthu/BckupMuthu.github.io.git

# Push to GitHub
git push -u origin main
```

*(Alternatively, you can simply run `./deploy.sh`)*.

### Step 3: Verify GitHub Pages Activation
1. Navigate to **Settings** > **Pages** in your repository on GitHub.
2. Under **Build and deployment**, ensure:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/(root)`
3. Within 30 to 60 seconds, your site will be live at:
   👉 **`https://bckupmuthu.github.io`**

---

## 💻 Local Preview

To preview the portfolio locally before pushing, run:

```bash
cd /Users/mpattan/.gemini/antigravity/scratch/BckupMuthu.github.io
python3 -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.

---

## 📬 Contact & Connect

- **LinkedIn**: [linkedin.com/in/muthukumar-pattan-a0b8079a](https://www.linkedin.com/in/muthukumar-pattan-a0b8079a/)
- **Topmate**: [topmate.io/muthukumar_pattan](https://topmate.io/muthukumar_pattan)
- **GitHub**: [github.com/BckupMuthu](https://github.com/BckupMuthu)
- **Work Email**: `muthukumar.pattan+fwinc@freshworks.com`
