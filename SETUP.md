# Setup Guide - Heni Andriyani Portfolio

Panduan lengkap untuk setup dan menjalankan portofolio secara lokal.

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- **Node.js** versi 18 atau lebih tinggi ([Download](https://nodejs.org/))
- **pnpm** versi 10+ (recommended) atau npm
  ```bash
  npm install -g pnpm
  ```

## 🚀 Instalasi

### 1. Clone atau Extract Proyek

Jika dari GitHub:
```bash
git clone <repository-url>
cd heni-portfolio
```

Jika dari ZIP:
```bash
unzip heni-portfolio.zip
cd heni-portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

Atau jika menggunakan npm:
```bash
npm install
```

### 3. Jalankan Development Server

```bash
pnpm dev
```

Server akan berjalan di `http://localhost:3000`

## 🔧 Konfigurasi

### Environment Variables

Proyek ini tidak memerlukan environment variables khusus untuk development. Semua konfigurasi sudah tersedia di:

- `client/src/index.css` - Tema dan warna
- `client/src/App.tsx` - Konfigurasi aplikasi
- `package.json` - Dependensi dan scripts

### Customization

#### Mengubah Warna

Edit file `client/src/index.css` dan ubah CSS variables:

```css
:root {
  --primary: #00D9FF;      /* Cyan - ubah sesuai keinginan */
  --secondary: #FF006E;    /* Magenta */
  --accent: #AAFF00;       /* Lime */
  --background: #0F0F2E;   /* Navy */
}
```

#### Mengubah Konten

Edit file komponen di `client/src/components/`:

- **HeroSection.tsx** - Ubah nama, judul, deskripsi
- **AboutSection.tsx** - Ubah ringkasan profesional
- **ExperienceSection.tsx** - Tambah/ubah pengalaman kerja
- **EducationSection.tsx** - Ubah pendidikan
- **SkillsSection.tsx** - Ubah skill dan profisiensi
- **ContactSection.tsx** - Ubah informasi kontak

#### Mengubah Gambar

Ganti gambar di `client/public/images/`:

- `hero-bg.png` - Background hero section
- `accent-pattern.png` - Pattern dekoratif
- `skill-icon-bg.png` - Background skill cards

## 📦 Build untuk Production

### Build

```bash
pnpm build
```

Output akan tersimpan di folder `dist/`

### Preview Production Build

```bash
pnpm preview
```

## 🧪 Testing & Validation

### Type Checking

```bash
pnpm check
```

### Format Code

```bash
pnpm format
```

## 📁 Struktur Folder

```
heni-portfolio/
├── client/                    # Frontend React app
│   ├── public/
│   │   └── images/           # Visual assets
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utility functions
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles
│   └── index.html            # HTML template
├── server/                    # Backend placeholder
├── shared/                    # Shared types
├── package.json              # Dependencies
├── README.md                 # Project documentation
├── SETUP.md                  # This file
└── ideas.md                  # Design concepts
```

## 🎨 Design System

### Warna Utama

| Nama | Hex | Penggunaan |
|------|-----|-----------|
| Cyan | #00D9FF | Primary accent, buttons |
| Magenta | #FF006E | Secondary accent, highlights |
| Lime | #AAFF00 | Tertiary accent, accents |
| Navy | #0F0F2E | Background utama |
| Purple | #2D1B69 | Background gradient |

### Typography

- **Headings**: Poppins Bold (700)
- **Subheadings**: Poppins SemiBold (600)
- **Body**: Inter Regular (400)
- **Accents**: Poppins Medium (500)

### Komponen

- **Glass Cards**: `.glass-card` class dengan backdrop blur
- **Gradient Text**: `.gradient-text` class
- **Glow Effects**: `.glow-cyan`, `.glow-magenta` classes
- **Animations**: `animate-float`, `animate-slide-in-left`, `animate-slide-in-right`

## 🐛 Troubleshooting

### Port 3000 Sudah Digunakan

```bash
# Gunakan port berbeda
pnpm dev -- --port 3001
```

### Dependencies Error

```bash
# Clear cache dan reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Error

```bash
# Clean build
rm -rf dist
pnpm build
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 🚀 Deployment

### Deploy ke Manus

1. Buat checkpoint di Manus dashboard
2. Klik tombol "Publish"
3. Ikuti instruksi untuk custom domain

### Deploy ke Platform Lain

Proyek ini adalah static site dan dapat di-deploy ke:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop folder `dist/`
- **GitHub Pages**: Push ke branch `gh-pages`
- **Any Static Host**: Upload folder `dist/`

## 📞 Support

Untuk pertanyaan atau bantuan:

- Email: handriyani047@gmail.com
- Phone: +62 858 4656 3208

---

**Happy coding! 🎉**
