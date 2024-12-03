import Web3Provider from "@/wrappers/web3Provider";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: 'INFINITE',
  description: 'Join us for INFINITE fun',
};

const minecraft = localFont({
  src: "./fonts/Minecraft.ttf",
  variable: "--font-minecraft",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={minecraft.variable}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
