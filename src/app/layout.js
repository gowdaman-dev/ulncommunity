import { Space_Grotesk } from 'next/font/google'
import "./globals.css";
import NavBar from '@/components/utils/NavBar';
export const metadata = {
  title: "Ulncommunity | Software Development Company",
  description: "Ulncommunity is a software development company that provides web development, mobile app development, and digital marketing services. We are a team of experienced developers and designers who are passionate about creating high-quality software solutions for our clients. Contact us today to learn more about how we can help your business grow and succeed online. founded by I Jahangeer , Gowdaman Poovaragavan (gttps://gowdaman.tech) and Sathish Kumar (https://sathish.tech) , S Deepath , K Hariharan (https://jaridev.tech) , M Lokeshkumar",  
};
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/fav.png" type="image/x-icon" />
        <meta name="google-site-verification" content="fe5eLpjlLJgUW_mGQL67MeXf4nscZLmsfl3L0Aoqj0M" />
      </head>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        <main className="relative flex flex-col items-center px-10 max-w-screen">
          <div className="lg:w-[1044px] md:w-[760px] w-full">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
