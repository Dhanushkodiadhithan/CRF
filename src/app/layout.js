import "./globals.css";
import Navbar from "@/Sessions/Navbar";
import Footer from "@/Sessions/Footer";

export const metadata = {
  title: "Cuddalore Raw Food",
  description: "Cuddalore Raw Food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
