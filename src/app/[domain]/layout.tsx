import type { Metadata, ResolvingMetadata } from "next";
import { loadDomains } from "@/services/domain.service";
import { loadApp } from "@/services/app.service";
import { getMetadata } from "@/util/app-info-util";

export const revalidate = 60;

export async function generateMetadata(
  {
    params: { domain, section, slug }
  }: {
    params: { domain: string; section: string; slug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const appInfo = await loadApp(domain);
  const title = appInfo?.info?.content?.title
    ?? `${section ? section + " - " : ""}${slug ? slug + " - " : ""}${domain}`;
  const metadataValues = getMetadata(appInfo);

  return {
    title,
    ...metadataValues
  };
}

export async function generateStaticParams() {
  // const domains = await loadDomains();

  // return domains.map((domain: any) => ({
  //   domain: domain.hostname,
  // }))

  return [{ domain: "ratekl.com" }];
}

export default async function RootLayout({
  children,
  params: { domain, section, slug },
}: {
  children: React.ReactNode;
  params: { domain: string; section: string; slug: string };
}) {
  const appInfo = await loadApp(domain);
  const theme = appInfo?.info?.theme;
  const color = theme?.color ?? "#120774";
  const backgroundColor = theme?.backgroundColor ?? "#f3f1fe";
  const colorSecondary = theme?.colorSecondary ?? "#120774";
  const backgroundColorSecondary = theme?.backgroundColorSecondary ?? "#f3f1fe";

  import(`./globals/globals_${theme?.name ?? "default"}.scss`).catch(
    (error: Error) => {
      console.error(error);
    }
  );

  return (
    <html lang="en">
      <head>
        <style>
          {`
            :root {
              --color: ${color};
              --background-color: ${backgroundColor};
              --color-secondary: ${colorSecondary};
              --background-color-secondary: ${backgroundColorSecondary};
            }
          `}
        </style>
        <link rel="shortcut icon" href={`/${domain}_favicon.ico`}/>
      </head>
      <body>
        {children}
        {/*
        <div>domain - {domain}</div>
        <div>app info - {JSON.stringify(appInfo)}</div>
        */}
      </body>
    </html>
  );
}
