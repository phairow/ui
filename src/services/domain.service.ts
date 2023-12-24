const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
const port = process.env.NODE_ENV === 'development' ? ':3333' : '';
const domain = 'ratekl.com' + (process.env.NODE_ENV === 'development' ? '.local' : '');

const baseUrlTemplate = (path: string) => `${protocol}://${domain}${port}${path}`;

export async function loadDomains() {
    const url = baseUrlTemplate('/domains');
    console.log({url})
    const result = await fetch(url);
    const json =  await result.json();
    console.log({json})
    return json;
}