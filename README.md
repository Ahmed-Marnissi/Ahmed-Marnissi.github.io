# Ahmed Marnissi - Portfolio Website

A modern, responsive portfolio website showcasing my work as an Embedded Software Engineer.

## 🚀 Quick Start

1. **View Locally**: Simply open `index.html` in your web browser
2. **Deploy to GitHub Pages**: Push to your repository and enable GitHub Pages in settings

## 📁 Project Structure

```
Ahmed-Marnissi.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── assets/
│   ├── Ahmed-MarnissiResume.pdf
│   └── images/         # Add your images here
└── README.md
```

## 🖼️ Adding Your Media Files

### Required Images

Add the following images to the `assets/images/` folder:

#### 1. **Profile Picture**
- **File**: `profile.jpg` or `profile.png`
- **Recommended size**: 400x400px (square)
- **Description**: Your professional headshot

#### 2. **Project Screenshots**
- **File**: `audio_pdm.gif`
  - Screenshot of your PyQt dashboard or waveform visualization
  - Recommended size: 800x500px

- **File**: `ethernet-audio.jpg`
  - Architecture diagram or demo screenshot
  - Recommended size: 800x500px

- **File**: `crane-system.jpg`
  - System diagram or demo video thumbnail
  - Recommended size: 1000x600px

#### 3. **Award Photos**
- **File**: `ticad8-award.jpg`
  - Photo from TICAD8 hackathon
  - Recommended size: 600x400px

- **File**: `industrie40-award.jpg`
  - Photo from Industrie 4.0 hackathon
  - Recommended size: 600x400px

- **File**: `botcamp-award.jpg`
  - Photo from BOT Camp hackathon
  - Recommended size: 600x400px

### How to Add Images

1. Save your images with the exact filenames listed above
2. Copy them to the `assets/images/` folder
3. The website will automatically display them (placeholders will disappear)

### Image Format Tips
- Use **JPG** for photos (smaller file size)
- Use **PNG** for diagrams/screenshots with transparency
- Optimize images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB for faster loading

## 🎨 Features

- ✨ **Modern Design**: Clean, professional UI with smooth animations
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Loading**: Optimized vanilla HTML/CSS/JS
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- ♿ **Accessible**: ARIA labels and keyboard navigation

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3b82f6;    /* Main blue color */
    --secondary-color: #8b5cf6;  /* Purple accent */
    --accent-color: #06b6d4;     /* Cyan accent */
}
```

### Updating Content
All content is in `index.html`. Simply find the section you want to edit and modify the text.

### Adding New Projects
Copy a project card in the "Projects Section" and update the content:

```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
        <a href="https://github.com/..." class="project-link">
            <i class="fab fa-github"></i> View Code
        </a>
    </div>
</div>
```

## 🌐 Deploying to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"

3. **Access your site**:
   - Your portfolio will be live at: `https://ahmed-marnissi.github.io`

## 📝 To-Do Checklist

- [ ] Add profile picture (`assets/images/profile.jpg`)
- [ ] Add project screenshots
  - [ ] `audio-pdm.jpg`
  - [ ] `ethernet-audio.jpg`
  - [ ] `crane-system.jpg`
- [ ] Add award photos
  - [ ] `ticad8-award.jpg`
  - [ ] `industrie40-award.jpg`
  - [ ] `botcamp-award.jpg`
- [ ] Update LinkedIn URL if different from default
- [ ] Test all links
- [ ] Deploy to GitHub Pages

## 🔗 Links

- **Live Site**: https://ahmed-marnissi.github.io
- **GitHub**: https://github.com/Ahmed-Marnissi
- **LinkedIn**: https://www.linkedin.com/in/ahmed-marnissi
- **Email**: ahmed.marnissi202@gmail.com

## 📄 License

This portfolio is open source and available under the MIT License.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**