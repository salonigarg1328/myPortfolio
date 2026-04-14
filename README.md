# 📌 Saloni Garg's Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://salonigarg1328.github.io/myPortfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/salonigarg1328/myPortfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/salonigarg13/)

**A modern, responsive portfolio website showcasing my journey as a technology enthusiast and developer.**

[View Live Site](https://salonigarg1328.github.io/myPortfolio/) • [Report Bug](https://github.com/salonigarg1328/myPortfolio/issues) • [Request Feature](https://github.com/salonigarg1328/myPortfolio/issues)

</div>

---

## 🌟 About

Welcome to my portfolio! I'm **Saloni Garg**, a passionate Computer Science student at Graphic Era Hill University, focused on building scalable and impactful digital solutions. This portfolio showcases my skills, projects, certifications, and journey in technology.

### ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with React for lightning-fast page loads
- 🌓 **Dark Mode** - Eye-friendly theme toggle
- 📊 **Interactive Sections** - Dynamic skill cards, project showcases, and experience timeline
- 📧 **Contact Form** - Easy way to get in touch
- 🔗 **Social Integration** - Direct links to GitHub, LinkedIn, and email

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| ⚛️ **React.js** | Frontend framework |
| 🎨 **CSS3** | Styling and animations |
| 📦 **React Router** | Navigation |
| 🎭 **React Reveal** | Scroll animations |
| 🖼️ **Chart.js** | Data visualizations |
| 📄 **React Helmet** | SEO optimization |
| 🚀 **GitHub Pages** | Hosting & deployment |

---

## 📂 Project Structure

```
masterPortfolio/
├── public/
│   ├── icons/              # Favicon and app icons
│   └── index.html          # HTML template
├── src/
│   ├── assets/
│   │   └── images/         # All images and logos
│   ├── components/         # Reusable components
│   │   ├── header/
│   │   ├── footer/
│   │   └── ...
│   ├── containers/         # Page containers
│   │   ├── greeting/
│   │   ├── skills/
│   │   ├── experience/
│   │   └── ...
│   ├── pages/              # Main pages
│   │   ├── home/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── contact/
│   ├── portfolio.js        # Portfolio data configuration
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
└── package.json            # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v12 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salonigarg1328/myPortfolio.git
   cd myPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
# Create optimized production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## ⚙️ Customization Guide

Want to use this template for your own portfolio? Follow these steps:

### 1️⃣ Update Personal Information

Edit `src/portfolio.js`:

```javascript
const greeting = {
  title: "Your Name",
  nickname: "your_username",
  subTitle: "Your tagline here...",
  resumeLink: "your-resume-link",
  githubProfile: "your-github-profile",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "your-github-link",
    // ... other social links
  },
];
```

### 2️⃣ Add Your Skills

```javascript
const skills = {
  data: [
    {
      title: "Full Stack Development",
      skills: [
        "⚡ Your skill description",
        // Add more skills
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        // Add more technologies
      ],
    },
  ],
};
```

### 3️⃣ Update Experience & Education

Modify the `experience` and `degrees` objects in `portfolio.js`.

### 4️⃣ Replace Images

- Add your images to `src/assets/images/`
- Update image paths in `portfolio.js`

### 5️⃣ Deploy Your Portfolio

1. Update `package.json`:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name/"
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

---

## 📊 Sections

| Section | Description |
|---------|-------------|
| 🏠 **Home** | Introduction and greeting |
| 💼 **Skills** | Technical skills and expertise |
| 🎓 **Education** | Academic background and certifications |
| 💻 **Experience** | Work experience and projects |
| 🚀 **Projects** | Portfolio of work |
| 📝 **Blog** | Thoughts and ideas (coming soon) |
| 📞 **Contact** | Get in touch |

---

## 🎯 Key Highlights

- 🏆 **Certifications**: AWS, Oracle, NPTEL (Google) Cloud Computing
- 💻 **Tech Stack**: MERN (MongoDB, Express, React, Node.js)
- 🧩 **Problem Solving**: Active on LeetCode and GeeksforGeeks
- 🎓 **Education**: B.Tech in Computer Science (2023-2027)
- 🌱 **Currently Learning**: Cloud Computing, Machine Learning, DevOps

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is **open source** and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Saloni Garg**

- 📧 Email: [gargsaloni247@gmail.com](mailto:gargsaloni247@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/salonigarg13](https://www.linkedin.com/in/salonigarg13/)
- 🐙 GitHub: [github.com/salonigarg1328](https://github.com/salonigarg1328)

---

## 🙏 Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/)
- Animations by [React Reveal](https://www.react-reveal.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Template inspiration from the developer community

---

<div align="center">

### ⭐ If you like this project, give it a star!

**Made with ❤️ by Saloni Garg**

</div>

---

---

## 🔄 Updates & Maintenance

This portfolio is regularly updated with new projects, skills, and experiences. Stay tuned for more!

**Last Updated**: April 2026

---
