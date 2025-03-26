import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const navbar = (
  <Navbar
    logo={<div><Image src="/cinnamon-docs/img/logo.png" alt="start" width={50} height={50} style={{ display: 'inline', marginRight: '5px' }}/><b>Cinnamon</b></div>}
    projectLink='https://github.com/KI-AIM/Cinnamon'
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Cinnamon.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <link rel="icon" href="/img/favicon/favicon.ico" sizes="any" />
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          sidebar={{autoCollapse:true, defaultMenuCollapseLevel: 1}}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/KI-AIM/cinnamon-docs/tree/main"
          footer={footer}          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}