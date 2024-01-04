import type { Metadata } from 'next'
import { loadDomains } from '@/services/domain.service';
import { loadApp } from '@/services/app.service';

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

export const metadata: Metadata = {
  title: 'Blog',
}

export const revalidate = 60;

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
  const appInfo = await loadApp(domain);
  const theme = appInfo?.info?.theme;
  const color = theme?.color ?? '#120774';
  const backgroundColor = theme?.backgroundColor ?? '#f3f1fe';

  import(`./globals/globals_${theme?.name ?? 'default'}.scss`).catch((error: Error) => {
    console.error(error);
  });

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
      <body>
        <div>{children}</div>
      <div>domain - {domain}</div>
      <div>app info - {JSON.stringify(appInfo)}</div>
      </body> 
    </html>
  )
}
