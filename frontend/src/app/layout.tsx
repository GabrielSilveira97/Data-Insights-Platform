import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/queryProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import NavbarComponent from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Data Insights Platform",
  description: "Data analytics system with automated insights, interactive visualizations, data cleansing, and intelligent report generation.",
  openGraph: {
    title: "Data Insights Platform",
    description: "Data analytics system with automated insights, interactive visualizations, data cleansing, and intelligent report generation.",
    siteName: "Data Insights Platform",
  }
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <NavbarComponent />
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;