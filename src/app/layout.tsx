import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer";
import SessionProvider from "../components/SessionProvider";
import Sale from "@/src/components/sale";
import UpiUp from "../components/UpiUp";

const inter = Inter({ subsets: ["latin"] });

// TODO: Ask to Rafey for the Description of his brand
export const metadata: Metadata = {
  title: "Beauty Bugz",
  description: "Cosmetics Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="efd5f37b-eea3-40ee-9cfe-b489ec358910";
        (function(){
          var d = document;
         var  s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);})();
            `,
          }}
        ></script>
      </head>
      <body
        // bg-desired-white
        className={`${inter.className} bg-pink-500 text-your-desired-text-color`}
      >
        {/* <Sale /> */}
        {/* <Header /> */}

        <SessionProvider>{children}</SessionProvider>
        {/* <UpiUp /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
