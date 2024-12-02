import "./globals.css";
import Web3Provider from "@/wrappers/web3Provider";

export const metadata = {
  title: 'INFINITE',
  description: 'Join us for INFINITE fun',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
