# 🌐 Abhishek Karki — Portfolio Website

> **Civil Engineer | GIS & Remote Sensing Specialist | MSc. DREM**

[![Live Demo](https://img.shields.io/badge/Live-Demo-4facfe?style=for-the-badge&logo=github)](https://abhishekkarki.github.io/abhishek-portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![NEC](https://img.shields.io/badge/NEC-%2380593-00f2fe?style=for-the-badge)](https://nepalengineering.org)

---

## ✨ Features

- 🎨 **Ultra-premium dark-mode design** — Deep space aesthetic with cyan-blue gradient palette
- 🌐 **Interactive particle network** — Canvas-based animated background with mouse interaction
- 🖱️ **Magnetic custom cursor** — Smooth follower cursor with hover/click effects
- 🔄 **3D tilt effects** — Profile card and project cards with perspective transform on hover
- ⌨️ **Typing animation** — Multi-phrase role cycling with smooth type/delete effect
- 📊 **Animated counters** — Stats that count up when scrolled into view
- 🎥 **Photo & video lightbox** — Full-screen media viewer with keyboard navigation
- 🗂️ **Project filter system** — Filter projects by category (GIS, Remote Sensing, Hydrology, UAV, Civil 3D)
- 📈 **Scroll progress bar** — Visual reading progress indicator at the top
- 🔔 **Scroll reveal animations** — Smooth section entrance animations
- 📱 **Fully responsive** — Mobile-first design that works on all screen sizes
- 📜 **Floating profile badges** — Animated chips around the hero profile card
- 🚀 **Loading screen** — Custom branded loader with ring animation

---

## 🗂️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with typing effect, stats, social links & 3D profile card |
| **About** | Skills cloud, personal info, and expertise overview |
| **Projects** | 8 GIS/engineering projects with filterable cards, modals & media gallery |
| **Experience** | Timeline with site photo galleries & KMZ download |
| **Skills** | Categorized technical toolbox cards |
| **Education** | Academic background with achievement badges |
| **Certifications** | Professional credentials with certificate gallery |
| **Freelance** | Independent projects with photo thumbnails |
| **Contact** | Contact info cards + functional contact form |

---

## 🗺️ Projects Showcased

| # | Project | Category | Tools |
|---|---------|----------|-------|
| 1 | InSAR Time Series — Highway Subsidence | Remote Sensing | SNAP, SNAPHU, Sentinel-1 |
| 2 | NDVI Timelapse — Kathmandu Valley (2000–2026) | Remote Sensing | Google Earth Engine, Landsat |
| 3 | Hospital Accessibility — Colorado | GIS | ArcGIS Network Analyst |
| 4 | Urban Sprawl Analysis — Kathmandu | GIS | Landsat, ArcGIS, NDBI |
| 5 | UAV Landslide Susceptibility Mapping | UAV / GIS | Agisoft, ArcGIS |
| 6 | Flood Inundation Mapping — Narayani | Hydrology | HEC-RAS 2D |
| 7 | Substation Backfill Volume Analysis | Civil 3D | AutoCAD Civil 3D, DGPS |
| 8 | Nepal Earthquake Analysis (1978–2025) | Seismology / GIS | ArcGIS, Python |

---

## 📁 Project Structure

```
abhishek-portfolio/
├── index.html                  # Main portfolio page
├── cv.html                     # Resume / CV page
├── README.md                   # This file
├── .gitignore
└── assets/
    ├── profile.jpg             # Profile photo
    ├── background.jpg          # Background image
    ├── Cerififcations/         # Certificate images
    │   ├── autocad.jpg
    │   ├── NEC.png
    │   └── SAP.jpg
    ├── Professional Career/    # Field site photos
    │   ├── Balefi/
    │   ├── Balganga/
    │   ├── Burtibang/
    │   ├── Salempur/
    │   └── Tamghas/
    ├── freelance-photos/       # Freelance project images
    │   ├── 3d-modeling/
    │   ├── abi/
    │   ├── drafting/
    │   ├── hvac/
    │   └── structural-analysis/
    └── portfolio-photos/       # GIS project outputs
        ├── insar/
        ├── ndvi/
        ├── hospital/
        ├── urban-sprawl/
        ├── uav-landslide/
        ├── flood/
        ├── civil3d/
        ├── earthquake/
        └── sisneri-landslide/
```

---

## 🚀 Deployment — GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `abhishek-portfolio` (or `<yourusername>.github.io` for root domain)
3. Set to **Public**, do NOT initialize with README

### Step 2: Push Local Files
```bash
# Inside the portfolio folder
git init
git add .
git commit -m "🚀 Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abhishek-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → `/ (root)` → **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/abhishek-portfolio`

---

## 🛠️ Local Development

No build step required! Just open directly in a browser:

```bash
# Option 1: Direct file
open index.html

# Option 2: Local server (recommended for video/assets)
npx serve .
# or
python -m http.server 8080
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--c-p1` | `#4facfe` | Primary cyan-blue |
| `--c-p2` | `#00f2fe` | Aqua accent |
| `--c-a1` | `#f7b733` | Gold accent |
| `--c-g1` | `#43e97b` | Green highlight |
| `--c-v1` | `#a855f7` | Violet |
| `--c-bg` | `#04080f` | Background |
| `--c-card` | `#0b1423` | Card surface |

**Fonts:** Space Grotesk (headings) + Inter (body)  
**Icons:** Font Awesome 6.5

---

## 📞 Contact

| | |
|-|-|
| 📧 Email | [abhishekkarki520@gmail.com](mailto:abhishekkarki520@gmail.com) |
| 📞 Phone | +977 9860959598 |
| 📍 Location | Balkot, Bhaktapur, Nepal |
| 💼 LinkedIn | [abhishek-karki-9b034524a](https://www.linkedin.com/in/abhishek-karki-9b034524a/) |
| 🏛️ NEC | Registration #80593 |

---

<p align="center">
  Built with ❤️ and precision &nbsp;·&nbsp; © 2025 Abhishek Karki
</p>
