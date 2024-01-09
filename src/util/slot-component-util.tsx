import HeaderBanner from '@/components/header-banner';
import Header from '@/components/header';
import Splash from '@/components/splash';
import CallToAction from '@/components/call-to-action';
import About from '@/components/about';
import FooterCallToAction from '@/components/footer-call-to-action';
import FooterContent from '@/components/footer-content';
import FooterCopyright from '@/components/footer-copyright';
import { Slot } from './AppInfo';

export const slotComponents: Record<string, (key: string, slot: Slot) => JSX.Element> = {
  'header-banner': (key: string, slot: Slot) => <HeaderBanner key={key} slot={slot}></HeaderBanner>,
  'header': (key: string, slot: Slot) => <Header key={key} slot={slot}></Header>,
  'splash': (key: string, slot: Slot) => <Splash key={key} slot={slot}></Splash>,
  'call-to-action': (key: string, slot: Slot) => <CallToAction key={key} slot={slot}></CallToAction>,
  'about': (key: string, slot: Slot) => <About key={key} slot={slot}></About>,
  'footer-call-to-action': (key: string, slot: Slot) => <FooterCallToAction key={key} slot={slot}></FooterCallToAction>,
  'footer-content': (key: string, slot: Slot) => <FooterContent key={key} slot={slot}></FooterContent>,
  'footer-copyright': (key: string, slot: Slot) => <FooterCopyright key={key} slot={slot}></FooterCopyright>,
}