import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import logo from '@/assets/images/logos/logo-two.png';
import { blogData } from '@/data';
import { SocialLinksOne } from '@/layout/social-links';
import FooterContactStyle from '@/layout/footers/footer-contact-style';

const FooterContent = () => {
  return (
    
    <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget about-widget">
          <div className="footer-logo mb-35">
            <Link href={'/'}>
                <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="text">
            Sed ut perspiciatis unde omnis natus evoluptat emaccu santium doloremque laudantium totam 
            rem aperiam eaquepsa
          </div>
          <div className="social-style-two mt-30">
            <SocialLinksOne />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget link-widget ml-20 rml-0">
          <h4 className="footer-title">Page Links</h4>
          <ul className="list-style-three">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Letest Events</a></li>
            <li><a href="#">How It Work</a></li>
            <li><a href="#">News & Articles</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget contact-widget mr-30 rmr-0">
          <h4 className="footer-title">Contacts</h4>
          <ul className="list-style-two">
            <FooterContactStyle />
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
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
      </div>
    </div>
  </div>
  );
};

export default FooterContent;