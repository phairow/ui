import React from 'react';
import { SocialLinksOne } from '@/layout/social-links';

const FooterCopyright= () => {
  return (
    <div className="copyright-area bg-blue text-white mt-30">
    <div className="container">
      <div className="copyright-inner pt-15">
        <div className="social-style-one mb-10">
          <SocialLinksOne />
        </div>
        <p>copyright {new Date().getFullYear()} Restly All Rights Reserved.</p>
      </div>
    </div>
  </div>
  );
};

export default FooterCopyright;