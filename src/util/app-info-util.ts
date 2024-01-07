import { AppInfo } from "./AppInfo";

export const getMetadata = (appInfo: AppInfo) => {
  const metadata = appInfo?.info?.content?.metadata;
  const metadataValues = metadata
   ? metadata.reduce((acc: any, curr: any) => { acc[curr.name] = curr.content; return acc; }, {})
   : {};
   
   return metadataValues;
};

export const getMainPage = (appInfo: AppInfo) => {
  const mainSectionName = appInfo?.info?.content?.sections?._ ?? 'main-section';
  const sections = appInfo?.info?.sections || {};
  const mainSection = sections[mainSectionName];

  if (!mainSection) {
    throw new Error(`Missing section: ${mainSectionName}. AppInfo: ${appInfo.name}`)
  }

  const mainPageName = mainSection.pages?.index || 'main-index';
  const pages = appInfo?.info?.pages || {};
  const mainPage = pages[mainPageName];

  if (!mainPage) {
    throw new Error(`Missing main page: ${mainPageName}. AppInfo: ${appInfo.name}`)
  }

  const slotNames = mainPage.slots || [];
  const availableSlots = appInfo?.info?.slots || {};
  const slots = slotNames?.map((slotName: any) => availableSlots[slotName]);

  return { type: mainPage.type, slots};
}
