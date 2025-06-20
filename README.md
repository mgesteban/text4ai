# LLMs Discovery Guide

A comprehensive Next.js web application that serves as a guide for discovering and understanding Large Language Models (LLMs). This project provides an interactive and informative experience for users looking to learn about LLMs, their applications, and how to get started with them.

## 🚀 Features

- **Modern Design**: Built with Next.js 15 and React 19
- **Responsive UI**: Fully responsive design using Tailwind CSS
- **Component Library**: Complete shadcn/ui component library integration
- **TypeScript**: Full TypeScript support for type safety
- **Dark Mode**: Theme switching capabilities with next-themes
- **Interactive Sections**: Multiple content sections including:
  - Hero section with compelling introduction
  - Inspiration section to motivate users
  - What-is section explaining LLMs
  - Step-by-step guide section
  - Benefits overview
  - Testing and experimentation guidance
  - Resources and further reading
  - Footer with additional information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Animations**: Tailwind CSS Animate
- **Theme**: next-themes for dark/light mode

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mgesteban/text4ai.git
cd text4ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── inspiration-section.tsx
│   ├── what-is-section.tsx
│   ├── steps-section.tsx
│   ├── benefits-section.tsx
│   ├── testing-section.tsx
│   ├── resources-section.tsx
│   ├── footer.tsx
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
└── ...config files
```

## 🎨 UI Components

This project includes a comprehensive set of UI components from shadcn/ui:

- **Layout**: Accordion, Collapsible, Resizable, Separator, Sidebar
- **Navigation**: Breadcrumb, Command, Context Menu, Dropdown Menu, Menubar, Navigation Menu, Pagination
- **Input**: Button, Calendar, Checkbox, Form, Input, Input OTP, Label, Radio Group, Select, Slider, Switch, Textarea
- **Feedback**: Alert, Alert Dialog, Dialog, Drawer, Hover Card, Popover, Sheet, Toast, Tooltip
- **Data Display**: Avatar, Badge, Card, Chart, Progress, Skeleton, Table
- **Media**: Aspect Ratio, Carousel
- **Utility**: Tabs, Toggle, Toggle Group

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Responsive Design
The application is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

### Modern Architecture
Built with the latest Next.js App Router, providing:
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Optimized performance

### Accessibility
Components are built with accessibility in mind using Radix UI primitives, ensuring:
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management

### Performance
Optimized for performance with:
- Next.js automatic code splitting
- Image optimization
- Font optimization
- CSS optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- [Repository](https://github.com/mgesteban/text4ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

Built with ❤️ using Next.js and shadcn/ui
