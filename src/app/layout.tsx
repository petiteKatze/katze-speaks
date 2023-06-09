import { Metadata } from "next";
import "../styles/globals.css";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/katze.svg",
  title: "Katze Speaks",
  description:
    "Creepy Pasta stories for you, latest Sci-fi stories, facts. Get Ready with some popcorn and sit back and relax while enjoying some cool stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
