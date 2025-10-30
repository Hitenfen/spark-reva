# SPARK Club - Reva University

A modern, responsive website for SPARK Technical Community at Reva University, Bangalore.

## 🚀 About SPARK

SPARK is a student-driven technical community at Reva University focused on software development, open-source innovation, and cybersecurity. Our mission is to ignite innovation and secure the future through collaborative learning and hands-on projects.

## ✨ Features

- **Modern Design**: Clean, dark-themed interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**:
  - Event filtering and modal popups
  - Team member profiles with social links
  - Smooth scrolling navigation
- **Performance Optimized**: Fast loading with Next.js and optimized images
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)
- **Content**: JSON-based data management

## 📁 Project Structure

spark-website/
├── app/ # Next.js App Router
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ └── components/
│ └── ui/ # UI components
├── components/ # React components
│ ├── About.jsx # About section
│ ├── Footer.jsx # Footer component
│ ├── Header.jsx # Navigation header
│ └── Hero.jsx # Hero section
├── data/ # Static data
│ ├── about.json # About page content
│ └── team.json # Team member data
├── hooks/ # Custom React hooks
├── lib/ # Utility libraries
├── public/ # Static assets
│ └── images/
│ ├── reva-spark.png
│ └── favicons/
├── styles/ # CSS Modules
│ ├── About.module.css
│ ├── Footer.module.css
│ ├── Header.module.css
│ ├── Hero.module.css
│ └── Team.module.css
└── Configuration files

Components Overview
Header
Responsive navigation with mobile menu

Logo integration

Smooth scroll behavior

Hero
Eye-catching introduction section

Animated background elements

Call-to-action buttons

About
Mission and vision sections

Interactive cards with hover effects

Goals and focus areas display

Team
Team member profiles with photos

Department and role information

Optional social media links

Clean, card-based layout

Footer
Contact information

Social media links

Quick navigation

Copyright information

📊 Data Structure
Team Data (data/team.json)
json
{
"team": [
{
"id": 1,
"name": "John Doe",
"role": "President",
"department": "Computer Science",
"year": "2025",
"image": "/images/team/john.jpg",
"linkedin": "https://linkedin.com/in/johndoe",
"github": "https://github.com/johndoe"
}
]
}
About Data (data/about.json)
json
{
"tagline": "Igniting Innovation, Securing the Future",
"description": "Detailed description...",
"motto": "Our motto text",
"mottoExplanation": [...],
"mission": [...],
"goals": [...]
}
🚀 Getting Started
Prerequisites
Node.js 18+

npm or yarn

Installation
Clone the repository

bash
git clone <repository-url>
cd spark-website
Install dependencies

bash
npm install

# or

yarn install
Set up environment variables

bash

# Create .env.local file

# Add any required environment variables

Run the development server

bash
npm run dev

# or

yarn dev
Open your browser
Navigate to http://localhost:3000

📝 Customization
Adding Team Members
Edit data/team.json

Add new member objects following the existing structure

Upload profile images to public/images/team/

Updating Events
Modify data/events.json (if exists)

Add event details, images, and metadata

Events will automatically appear on the events page

Styling Changes
Modify CSS Modules in styles/ directory

Update color schemes in respective module files

Customize animations in CSS keyframes

🎯 Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run start - Start production server

npm run lint - Run ESLint

🌐 Deployment
Vercel (Recommended)
Push your code to GitHub

Connect your repository to Vercel

Deploy automatically

Other Platforms
The project can be deployed to any platform that supports Next.js:

Netlify

AWS Amplify

Railway

Digital Ocean App Platform

📱 Responsive Design
The website is fully responsive with breakpoints:

Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

🎨 Color Scheme
Primary: #667eea (Purple Blue)

Secondary: #764ba2 (Deep Purple)

Background: #0a0a14 (Dark Blue)

Text: #ffffff (White)

Accent: #f093fb (Light Purple)

🔧 Configuration Files
next.config.js - Next.js configuration

tailwind.config.ts - Tailwind CSS setup

tsconfig.json - TypeScript configuration

postcss.config.js - PostCSS plugins
