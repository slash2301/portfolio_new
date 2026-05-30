# Portfolio Website
Welcome to my personal portfolio repository, featuring a responsive showcase of my development skills and project. Build using React 19 to highlight my technical capabilities and serve as central hub for my professional work.

## ✨ Features
- **Server-side Rendering :** Powered by TanStack Start for fast first paint and SEO
- **File-based Routing :** TanStack router with routes under `src/routes/`
- **Dual Theme Support :** Light/Dark theme via `ThemeProvider.tsx`
- **Responsive Design :** Tailwind CSS v4 with custom animations and typography

## 🛠️ Build with
- **Framework :** React 19, TanStrack Start
- **Routing :** TanStack Router
- **Styling & UI :** Tailwild CSS v4, Radix UI
- **Language :** TypeScript
- **Icons :** Lucide React
- **Buider / Dev Server :** Vite
- **Package Manager :** Bun

## 📁 Project Structure
```
├── src
│    ├── components
│    │    ├── portfilio
│    │    │    ├── About.tsx                   
│    │    │    ├── Contact.tsx
│    │    │    ├── Footer.tsx
│    │    │    ├── Hero.tsx
│    │    │    ├── Navbar.tsx
│    │    │    ├── WorkingIllustration.tsx
│    │    ├── UI
│    │    │    ├── Theme.tsx
│    │    ├── ThemeProvider.tsx
│    │    ├── index.tsx
│    │    ├── style.css
```
### Key Entry Points

| File | Role |
|------|------|
| `src/routes/index.tsx` | Main page content visitors see at `/` |
| `src/routes/__root.tsx` | Root layout, `<html>` shell, global providers |
| `src/server.ts` | Server/SSR handler for production (Wrangler `main`) |
| `src/start.ts` | TanStack Start instance and request middleware |
| `src/router.tsx` | Router creation and React Query client |

## 📄 License
This repository is open source released under the [MIT License](LICENSE).