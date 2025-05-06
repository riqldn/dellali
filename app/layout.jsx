
import "./globals.css";
import { ReactLenis } from './utils/lenis';
import localFont from "next/font/local";



const rockstar = localFont({
  src: './fonts/rockstar.otf',
  variable: "--font-rockstar",
  weight: "900"
})

const instrument = localFont({
  src: './fonts/InstrumentSans.woff2',
  variable: "--font-instrument",
  weight: "100 600"
})

export const metadata = {
  title: "Dellali Defor",
  description: "Dellali is a london based filmmaker whose creative journey began after leaving behind a biomedical science career",
};

export default function RootLayout({ children }) {
  return (
    <html className="disable-scrollbars" lang="en">
      <ReactLenis root>
        <body
          className={`${rockstar.variable} ${instrument.variable} disable-scrollbars antialiased`}
        >
          {children}
        </body>

      </ReactLenis>


    </html>
  );
}
