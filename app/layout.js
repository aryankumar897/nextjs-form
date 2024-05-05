


import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });
import 'antd/dist/reset.css';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import TopNav from "@/components/nav/TopNav";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
    
        <TopNav/>
        <Toaster />
 
       
        {children}
      </body>
    </html>
  );
}
