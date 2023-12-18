import "./(ui)/globals.css"

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

export const metadata = {
   metadataBase: new URL(defaultUrl),
   title: "Website Title TBD",
   description: "Website Description TBD"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className="flex flex-col bg-light text-black min-h-screen">
            <main className="flex flex-col items-center w-full p-4">{children}</main>
         </body>
      </html>
   )
}
