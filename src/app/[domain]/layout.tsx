import type { Metadata } from 'next'
import './globals.css'
import { loadDomains } from '@/services/domain.service';
import { loadApp } from '@/services/app.service';

// export async function getSer

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }


export async function generateStaticParams() {
  const domains = await loadDomains();
 
  return domains.map((domain: any) => ({
    domain: domain.hostname,
  }))
}

export default async function RootLayout({
  children,
  params: {domain}
}: {
  children: React.ReactNode,
  params: { domain: string },
}) {
  const color = '#120774';
  const backgroundColor = '#f3f1fe';
  const appInfo = await loadApp(domain);

  return (
    <html lang="en">
      <head>
        <style>
          {`
          :root {
            --color: ${color};
            --background-color: ${backgroundColor};
          }
      `}
        </style>
      </head>
      <body>{children}
      <div>domain - {domain}</div>
      <div>app info - {JSON.stringify(appInfo)}</div>
      </body>
    </html>
  )
}
