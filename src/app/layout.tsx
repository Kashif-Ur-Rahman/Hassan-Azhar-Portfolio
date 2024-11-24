// import Particles from "../components/particle/Particles"
import ParticleBackground from "@/components/particle/Particles";
import Navbar from "../components/header/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hassan Azhar Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* <Particles /> */}
        <ParticleBackground />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
