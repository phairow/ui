import HeaderBanner from '@/components/header-banner';
import Header from '@/components/header';
import Splash from '@/components/splash';
import CallToAction from '@/components/call-to-action';
import About from '@/components/about';
import FooterCallToAction from '@/components/footer-call-to-action';
import FooterContent from '@/components/footer-content';
import FooterCopyright from '@/components/footer-copyright';

export const slotComponents: Record<string, (key: string) => JSX.Element> = {
  'header-banner': (key: string) => <HeaderBanner key={key}></HeaderBanner>,
  'header': (key: string) => <Header key={key}></Header>,
  'splash': (key: string) => <Splash key={key}></Splash>,
  'call-to-action': (key: string) => <CallToAction key={key}></CallToAction>,
  'about': (key: string) => <About key={key}></About>,
  'footer-call-to-action': (key: string) => <FooterCallToAction key={key}></FooterCallToAction>,
  'footer-content': (key: string) => <FooterContent key={key}></FooterContent>,
  'footer-copyright': (key: string) => <FooterCopyright key={key}></FooterCopyright>,
}