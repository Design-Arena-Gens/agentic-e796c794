import './globals.css';

export const metadata = {
  title: 'Salut',
  description: 'Simple greeting app powered by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
