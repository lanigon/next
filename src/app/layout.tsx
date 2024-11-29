import "./globals.css";

export const metadata = {
  title: 'My App',
  description: 'A demo for a global back button in Next.js 13+',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
