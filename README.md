# Heni Andriyani - Professional Portfolio

A modern, responsive portfolio website built with React 19, Tailwind CSS 4, and glassmorphism design principles. Features auto-scrolling carousels, smooth animations, and vibrant accent colors.

## 🎨 Design Features

- **Glassmorphism Design**: Modern frosted glass effect with transparency and blur
- **Vibrant Color Palette**: Cyan (#00D9FF), Magenta (#FF006E), Lime (#AAFF00)
- **Auto-Scroll Carousels**: Smooth horizontal scrolling for experience and skills sections
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Entrance animations, floating effects, and hover transitions
- **Professional Typography**: Poppins for headings, Inter for body text

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with animated background
2. **About Section** - Professional summary and key competencies
3. **Experience Section** - Auto-scrolling carousel of work experience
4. **Education Section** - Timeline-style educational background
5. **Skills Section** - Auto-scrolling skill categories with proficiency indicators
6. **Contact Section** - Contact information and message form
7. **Navigation** - Sticky header with smooth scroll navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`

## 📁 Project Structure

```
client/
├── public/
│   └── images/          # Visual assets (hero-bg, patterns, etc.)
├── src/
│   ├── components/      # Reusable components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ui/          # shadcn/ui components
│   ├── pages/
│   │   └── Home.tsx     # Main page
│   ├── App.tsx          # App router
│   ├── index.css        # Global styles & theme
│   └── main.tsx         # React entry point
└── index.html           # HTML template
```

## 🎯 Key Features

### Auto-Scroll Carousels
- Experience and Skills sections feature smooth auto-scrolling
- Pauses on hover for better UX
- Manual navigation with arrow buttons
- Responsive design for mobile devices

### Glassmorphic Components
- Custom `.glass-card` class with backdrop blur
- Gradient borders and hover effects
- Smooth transitions and animations

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Clear focus indicators
- Proper color contrast

## 🎨 Customization

### Colors
Edit CSS variables in `client/src/index.css`:
```css
--primary: #00D9FF;      /* Cyan */
--secondary: #FF006E;    /* Magenta */
--accent: #AAFF00;       /* Lime */
--background: #0F0F2E;   /* Navy */
```

### Fonts
Fonts are imported from Google Fonts in `index.css`:
- **Poppins** - Headings (700 weight)
- **Inter** - Body text (400 weight)

### Content
Update content directly in component files:
- `HeroSection.tsx` - Hero content
- `AboutSection.tsx` - About information
- `ExperienceSection.tsx` - Work experience
- `EducationSection.tsx` - Education details
- `SkillsSection.tsx` - Skills and proficiencies
- `ContactSection.tsx` - Contact information

## 📦 Technologies

- **React 19** - UI framework
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **Wouter** - Client-side routing
- **Vite** - Build tool

## 🔧 Development

### Code Quality
```bash
# Type checking
pnpm check

# Format code
pnpm format
```

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Deploy to Manus
The project is ready to deploy on Manus platform with built-in hosting and custom domain support.

## 📝 Content Information

**Name**: Heni Andriyani  
**Title**: Fresh Graduate Information Systems Specialist  
**Email**: handriyani047@gmail.com  
**Phone**: +62 858 4656 3208  
**Location**: Mampang Prapatan, Jakarta Selatan

## 📄 License

This project is personal portfolio and all rights are reserved.

## 🤝 Contributing

This is a personal portfolio. For suggestions or improvements, please contact via email.

---

**Built with ❤️ using Modern Web Technologies**
