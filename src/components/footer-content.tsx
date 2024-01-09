import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import logo from '@/assets/images/logos/logo-two.png';
import { blogData } from '@/data';
import { SocialLinksOne } from '@/layout/social-links';
import FooterContactStyle from '@/layout/footers/footer-contact-style';
import { Slot } from '@/util/AppInfo';

const FooterContent = ({ slot }: {slot: Slot}) => {
  const { content = {}, nav = [] , action} = slot;

  return (
    
    <div className="container">
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="footer-widget about-widget">
          <div className="footer-logo mb-35">
            <Link href={'/'}>
                <img  height="44"  src={content?.logo} alt="Logo" />
            </Link>
          </div>
          <div className="text">
            {content?.message}
          </div>
          <div className="social-style-two mt-30">
            <SocialLinksOne />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="footer-widget link-widget ml-20 rml-0">
          <h4 className="footer-title">Page Links</h4>
          <ul className="list-style-three">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="footer-widget contact-widget mr-30 rmr-0">
          <h4 className="footer-title">Contacts</h4>
          <ul className="list-style-two">
            <FooterContactStyle style_six={''} home_8={''} />
          </ul>
        </div>
      </div>
      {/* <div className="col-lg-3 col-sm-6">
        <div className="footer-widget news-widget">
          <h4 className="footer-title">Recent News</h4>
          <div className="widget-news-wrap">
            {blogData.slice(0, 2).map((item, i) => (
              <div key={i} className="widget-news-item">
                <img src={item.img} alt="News" />
                <div className="widget-news-content">
                  <h6>
                    <Link href={`/blog-details/${item.id}`}>
                      {item.title.substring(0, 35)}...
                    </Link>
                  </h6>
                  <span className="date"><i className="far fa-calendar-alt"></i>
                    <Link href={`/blog-details/${item.id}`}>
                      {' '}{item.date}
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  </div>
  );
};

export default FooterContent;