import React from 'react';
import { SocialLinksOne } from '@/layout/social-links';
import { Slot } from '@/util/AppInfo';

const FooterCopyright= ({ slot }: {slot: Slot}) => {
  return (
    <div className="copyright-area bg-dark-primary text-white mt-30">
    <div className="container">
      <div className="copyright-inner pt-15">
        <div className="social-style-one mb-10">
          <SocialLinksOne />
        </div>
        <p>© {new Date().getFullYear()} Simply Piper&apos;s</p>
      </div>
    </div>
  </div>
  );
};

export default FooterCopyright;