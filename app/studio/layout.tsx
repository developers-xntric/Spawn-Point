import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "SpawnPoint Studio",
  description: "The Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="robots" content="index,follow"></meta>
      <body className={``}>
        {children}
        {/* <Navbar  /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
