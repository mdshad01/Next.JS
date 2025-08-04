import Header from "@/components/Header";
import ThemProvider from "../context/ThemeContext";

import "./globals.css";
export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemProvider>
          <Header />
          {children}
        </ThemProvider>
      </body>
    </html>
  );
}
