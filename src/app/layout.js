import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Most Common English Words",
  description: "Created by Red-Rose Corporation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} max-w-[1366px] lg:w-11/12 mx-auto`} >
 
        <Navbar/>
        {children}
         <footer>
           This is footer
         </footer>

        </body>
 
    </html>
  );
}
