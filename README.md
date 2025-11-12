# Global Leap Marketing Website

This is the official website for Global Leap Marketing, a modern and responsive single-page application designed to showcase the company's services, portfolio, and contact information. It was built using Next.js and Firebase Studio.

## ✨ Features

- **Modern & Responsive Design**: A clean and elegant UI that looks great on all devices, from mobile phones to desktops.
- **Interactive Sections**: Engaging sections for Hero, About Us, Services, Portfolio, and Contact, built with smooth animations and transitions using Framer Motion.
- **Dynamic Content**: Sections are designed to be easily updated and managed.
- **Contact Forms**: Integrated contact and service request forms with server-side validation.
- **Floating Action Button (FAB)**: Quick access to contact options like WhatsApp and a contact form.
- **Dark/Light Mode**: Theme toggling for user preference.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Deployment**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 📂 Project Structure

Here is a brief overview of the key directories and files in this project:

```
.
├── src/
│   ├── app/                # Main application folder (App Router)
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles and Tailwind directives
│   │
│   ├── components/
│   │   ├── layout/         # Header, Footer, and other layout components
│   │   ├── sections/       # Components for each page section (Hero, About, etc.)
│   │   ├── ui/             # Reusable ShadCN UI components
│   │   └── theme-provider.tsx # Theme management for dark/light mode
│   │
│   ├── lib/
│   │   ├── utils.ts        # Utility functions (e.g., `cn` for classnames)
│   │   └── placeholder-images.ts # Placeholder image data
│   │
│   └── hooks/              # Custom React hooks
│
├── public/                 # Static assets (images, fonts, etc.)
├── package.json            # Project dependencies and scripts
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🏁 Getting Started

To get the project up and running on your local machine, follow these steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(This step is handled automatically in Firebase Studio.)*

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 📦 Deployment

This project is configured for seamless deployment with **Firebase App Hosting**. Any changes pushed to the connected Git repository will automatically trigger a new build and deployment.
