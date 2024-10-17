import localFont from "next/font/local";
import "../styles/global.scss";

const robotoRegular = localFont({
  src: "./assets/fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "400",
});

const robotoBold = localFont({
  src: "./assets/fonts/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "700",
});

const robotoItalic = localFont({
  src: "./assets/fonts/Roboto-Italic.ttf",
  variable: "--font-roboto-italic",
  weight: "400",
});

export const metadata = {
  title: "PortfolioAurelienChetot",
  description: "Bienvenue sur mon portfolio, merci de votre visite :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoRegular.variable} ${robotoBold.variable} ${robotoItalic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
