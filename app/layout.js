import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import Home from "./page";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
