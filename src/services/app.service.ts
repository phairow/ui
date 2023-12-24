const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
const port = process.env.NODE_ENV === 'development' ? ':3333' : '';
const suffix = (process.env.NODE_ENV === 'development' ? '.local' : '');

const baseUrlTemplate = (domain: string, path: string) => `${protocol}://${domain}${suffix}${port}${path}`;

export async function loadApp(domain: string) {
    const url = baseUrlTemplate(domain, `/app-info`);
    const result = await fetch(url);
    return await result.json();
}