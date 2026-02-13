# World-Class Portfolio Website

A stunning, professionally animated portfolio website showcasing exceptional frontend skills through sophisticated 3D animations, smooth interactions, and modern design principles.

## 🚀 Features

- **Immersive 3D Graphics**: Three.js particle systems and animated 3D objects
- **Smooth Animations**: Framer Motion and GSAP for butter-smooth transitions
- **Smooth Scrolling**: Lenis for silky-smooth scroll experience
- **Modern Design**: Dark theme with Tech Blue accents and glassmorphism
- **Fully Responsive**: Mobile-first approach, perfect on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and Next.js optimization
- **Performance**: Lazy loading, code splitting, and optimized assets

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui

### 3D & Animations
- **3D Graphics**: React Three Fiber + Drei
- **Animations**: Framer Motion + GSAP
- **Smooth Scroll**: Lenis

### Additional
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Fonts**: Space Grotesk + Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Color Palette

- **Background**: Carbon Black (#0A0A0A, #1B1B1B)
- **Primary**: Tech Blue (#1560BD)
- **Accent**: Dark Cyan (#008B8B)
- **Secondary**: Dark Slate Grey (#2F4F4F)
- **Text**: Light Grey (#F5F5F5)

## 📝 Customization

### Personal Information

Update the following placeholders in the codebase:

1. **Hero Section** (`components/sections/hero.tsx`):
   - Your name
   - Professional title
   - Bio text
   - Social media links

2. **About Section** (`components/sections/about.tsx`):
   - Profile photo
   - Bio paragraphs
   - Skills list

3. **Projects** (`components/sections/projects.tsx`):
   - Project details
   - Images
   - Demo and GitHub links

4. **Competitive Programming** (`components/sections/competitive-programming.tsx`):
   - Platform ratings
   - Profile links
   - Achievements

5. **Certifications** (`components/sections/certifications.tsx`):
   - Certification details
   - Awards

6. **Contact** (`components/sections/contact.tsx`):
   - Email address
   - Phone number
   - Location

7. **Footer** (`components/footer.tsx`):
   - Social media links
   - Copyright information

### Theme Colors

Edit `app/globals.css` to customize the color scheme:
- Modify CSS variables in `:root` and `.dark` sections
- Update gradient colors in the `@layer components` section

### Fonts

To change fonts, edit `app/layout.tsx`:
1. Import different Google Fonts
2. Update the font variables
3. Update CSS variables in `app/globals.css`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

Build the production version:
\`\`\`bash
npm run build
npm run start
\`\`\`

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- shadcn/ui for beautiful component library
- Three.js community for 3D graphics examples
- Font pairings from Kombai Font API
- Color palette from Kombai Color API

## 📧 Contact

For questions or feedback, please reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)

---

Made with ❤️ using Next.js, React, and TypeScript
