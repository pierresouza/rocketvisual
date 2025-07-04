import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rocket Visuals",
  keywords: ["Rocket Visuals", "VFX", "Motion Design", "Video Production"],
  authors: [
    {
      name: "Gustavo Junior",
      url: "",
    },
  ],
  icons:{
    icon: "/logo-without-text.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export const dynamic = "force-dynamic"; // This is to ensure the layout is dynamic and not cached
export const revalidate = 0; // This is to ensure the layout is not cached and always fresh