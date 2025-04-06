# FutureBlink Frontend

A modern React application built with Vite, featuring Google Firebase authentication and a beautiful, responsive UI. FutureBlink provides a seamless and secure authentication experience with a modern, intuitive interface designed for optimal user experience.

## Overview

FutureBlink combines the power of React's component-based architecture with Firebase's robust authentication system. The application features a sleek login interface with Google authentication, smooth transitions, and a protected dashboard that includes ReactFlow integration for dynamic flow diagrams.

### Key Highlights

- **Secure Authentication**: Leverages Firebase's battle-tested authentication system
- **Modern Design**: Implements latest UI/UX trends with Tailwind CSS
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds

## Features

- 🔐 Google Authentication
- 🎨 Modern UI with smooth transitions
- 🔄 ReactFlow integration
- 📱 Responsive design
- 🚀 Fast development with Vite

## Tech Stack

- **Framework:** React + Vite
  - Utilizes React 18's latest features
  - Vite for optimized development experience

- **Authentication:** Firebase Auth
  - Secure Google Sign-in integration
  - Protected route implementation
  - Persistent authentication state

- **Styling:** Tailwind CSS
  - Custom gradient backgrounds
  - Responsive design system
  - Modern transitions and animations

- **Routing:** React Router v6
  - Protected route guards
  - Programmatic navigation
  - Nested routing structure

- **State Management:** React Context
  - Centralized application state
  - Custom hooks for state access
  - Efficient re-render optimization

## Project Structure

```
src/
├── components/
│   ├── auth/              # Authentication components
│   │   ├── Login.jsx      # Login page
│   │   └── Navbar.jsx     # Navigation with logout
│   ├── CustomNodes/       # Custom node components
│   ├── ModalComponent/    # Modal components
│   ├── ContextProvider.jsx
│   └── ReactFlowComponents.jsx
├── utils/
│   └── firebase.js       # Firebase configuration
└── App.jsx              # Main application
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Google Authentication
   - Copy your Firebase configuration to `src/utils/firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build


### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Firebase project with Authentication enabled

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment Options

- **Firebase Hosting**: Quick and easy deployment
- **Vercel**: Zero-configuration deployment
- **Netlify**: Automated deployments with Git


