import { loadApp } from '@/services/app.service';
import { getMainPage } from '@/util/app-info-util';
import { slotComponents } from '@/util/slot-component-util';
import HeaderWrapper from '@/components/header-wrapper';
import FooterWrapper from '@/components/footer-wrapper';

export default async function Home({params: { domain }}: { params: { domain: string}}) {
  const appInfo = await loadApp(domain);
  const page = getMainPage(appInfo);
  const headers: JSX.Element[] = [];
  const content: JSX.Element[] = [];
  const footers: JSX.Element[] = [];

  let inc = 0;
  page.slots.forEach(slot => {
    const incr = '' + inc++;

    if (slot.type?.startsWith('header')) {
      const component = slotComponents[slot.type];

      if (component) {
        headers.push(component(`${slot.type}_${incr}`, slot));
      }
    } else if (slot.type?.startsWith('footer')) {
      const component = slotComponents[slot.type];

      if (component) {
        footers.push(component(`${slot.type}_${incr}`, slot));
      }
    } else if (slot?.type) {
      const component = slotComponents[slot.type];

      if (component) {
        content.push(component(`${slot.type}_${incr}`, slot));
      }
    }
  }); 

  const pageContent = <>
    {
      headers.length
      ? <HeaderWrapper>
          {headers}
        </HeaderWrapper>
      : <></> 
    }
    {content}  
    {
      footers.length
      ? <FooterWrapper>
        {footers}
      </FooterWrapper>
      : <></>
    }
  </>;

  return (
    <div className='page-wrapper'>
      {pageContent}
    </div>
  );
}