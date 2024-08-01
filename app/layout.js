import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';  // Importer le CSS de Bootstrap
import Script from 'next/script';  // Importer le composant Script de Next.js



export const metadata = {
  title: "Darwin Portofolio",
  description: "Ceci est le site Portofolio de Darwin",
  keywords:"Darwin Portofolio,page accueil",
  robots:'index,follow',
};

export default function RootLayout({ children }) {
  return (
     <html lang="fr">
      <body>
        {children}

        {/* Importer les scripts JavaScript de Bootstrap */}
        
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
