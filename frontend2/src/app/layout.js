import MainFooter from "@/layout/footer/Main";
import MainNavbar from "@/layout/navbar/Main";
import "@/styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}