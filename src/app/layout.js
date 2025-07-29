import "./globals.css";

export const metadata = {
  title: "Landing Page - Grupo Delsud",
  description: "Landing page for Grupo Delsud by Victor Roberto Curzio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}