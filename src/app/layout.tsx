import type { Metadata } from "next";
import "./index.css";
import "./keyframes.css";
import 'material-icons/iconfont/material-icons.css'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root">
        {children}
        </div>
      </body>
    </html>
  );
}
