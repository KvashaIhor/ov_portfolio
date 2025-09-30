# Olena Vynohradova Photography Portfolio

A modern, responsive photography portfolio website showcasing professional photography services including personal, commercial, and event photography.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Portfolio**: Dynamic image galleries for different photography types
- **Contact Form**: Integrated contact form with Telegram notification system
- **Smooth Animations**: Modern animations using Framer Motion
- **Type Safety**: Built with TypeScript for better development experience
- **Modern UI**: Clean, professional design with Tailwind CSS

## 🚀 Tech Stack

- **React 19** - Latest React version with modern features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework  
- **SCSS/Sass** - Enhanced CSS with variables and mixins
- **Framer Motion** - Smooth animations and transitions
- **Material-UI** - React components library
- **Lucide React** - Beautiful icon library
- **React Photo Album** - Image gallery component

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection/        # About photographer section
│   ├── Footer/             # Website footer
│   ├── LeadSection/        # Contact form component
│   ├── MainPage/           # Hero/landing section
│   ├── Navbar/             # Navigation bar
│   ├── PortfolioSection/   # Image galleries
│   ├── TypesSection/       # Photography services
│   └── ui/                 # Reusable UI components
├── utils/                  # Utility functions
│   ├── sendToTelegram.ts   # Contact form handler
│   ├── changingText.ts     # Text animation utilities
│   └── timer.js            # Timer utilities
├── assets/                 # Static assets
└── icons/                  # Icon files
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Environment Setup
1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables in `.env`:**
   ```bash
   REACT_APP_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   REACT_APP_TELEGRAM_CHAT_ID=your_telegram_chat_id
   ```

3. **Set up Telegram Bot (for contact form):**
   - Create a new bot via [@BotFather](https://t.me/botfather) on Telegram
   - Get your bot token and add it to `.env`
   - Get your chat ID (where messages will be sent) and add it to `.env`

### Development Server
```bash
npm start
```
The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm run build`
Builds the app for production to the `build` folder with optimizations.

### `npm test`
Launches the test runner in interactive watch mode.

## 🎨 Portfolio Sections

### Photography Services
- **Personal Photography**: Portrait and lifestyle sessions
- **Commercial Photography**: Business and product shoots
- **Event Photography**: Weddings and special events

### Interactive Elements
- **Dynamic Text Animation**: Rotating service showcase
- **Smooth Scrolling**: Section-based navigation
- **Contact Forms**: Multiple contact points throughout the site
- **Image Galleries**: Responsive photo displays with lightbox

## 🔧 Configuration

### Environment Variables
All sensitive configuration is stored in environment variables:

- `REACT_APP_TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `REACT_APP_TELEGRAM_CHAT_ID` - Your Telegram chat ID for receiving messages

### Telegram Integration
Contact form submissions are sent directly to Telegram for immediate notifications.

**⚠️ Security Note:** Never commit your `.env` file to version control. The actual credentials are gitignored for security.

### Styling & Branding
- Global styles: `src/index.css`
- Component-specific styles: Individual `.scss` files
- Brand colors and typography configured in Tailwind config

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Hosting Recommendations
- Netlify (recommended for easy deployment)
- Vercel
- AWS S3 + CloudFront

### Environment Variables for Deployment
When deploying, make sure to set the environment variables in your hosting platform:
- **Netlify**: Site settings → Environment variables
- **Vercel**: Project settings → Environment Variables
- **Other platforms**: Check their documentation for environment variable configuration

## 🐛 Troubleshooting

### Image Loading Issues
Ensure all image paths are correct and images exist in the specified directories.

### TypeScript Errors
Check that `src/types.d.ts` includes proper module declarations for image imports.

### Contact Form Issues
- Verify Telegram bot token and chat ID are correctly configured in `.env`
- Check that environment variables are properly loaded (they must start with `REACT_APP_`)
- Ensure `.env` file exists and is not committed to git

## 👤 Photographer

**Olena Vynohradova**
Professional Photographer specializing in personal, commercial, and event photography.

- 📧 Contact via website form
- � Social media links available on site
- 📍 Based in Seattle, WA

---

© 2024 Olena Vynohradova Photography. All rights reserved.

*This website and its contents are protected by copyright. All photographs and designs are the exclusive property of Olena Vynohradova.*