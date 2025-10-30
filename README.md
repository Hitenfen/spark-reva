# SPARK Club - Reva University

A modern, responsive website for SPARK Technical Community at Reva University, Bangalore.

## 🚀 About SPARK

SPARK is a student-driven technical community at Reva University focused on software development, open-source innovation, and cybersecurity. Our mission is to ignite innovation and secure the future through collaborative learning and hands-on projects.

## ✨ Features

- **Modern Design**: Clean, dark-themed interface with smooth animations
- **Responsive Layout**: Optimized for all devices
- **Interactive Components**: Event filtering, team profiles, smooth navigation
- **Performance Optimized**: Fast loading with Next.js
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Deployment**: Vercel

## 📁 Project Structure

```
spark-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── components/
├── components/
│   ├── About.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Hero.jsx
├── data/
│   ├── about.json
│   └── team.json
├── public/
│   └── images/
└── styles/
    ├── About.module.css
    ├── Footer.module.css
    ├── Header.module.css
    └── Hero.module.css
```

## 👨‍💻 Credits

**Main Developer**: [Hiten Tanwar](https://github.com/Hitenfen)  
*This project was primarily developed by Hiten Tanwar. I contributed to responsiveness and other minor improvements.*

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Securegarv20/spark-reva.git
   cd spark-reva
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Adding Team Members
Edit `data/team.json`:
```json
{
  "team": [
    {
      "id": 1,
      "name": "Hiten Tanwar",
      "role": "Technical Team Lead",
      "department": "Btech CSE",
      "year": "2022",
      "image": "image url",
      "linkedin": "https://linkedin.com/in/johndoe",
      "github": ""
    }
  ]
}
```

### Styling Changes
Modify CSS Modules in `styles/` directory and update color schemes.
