import { Slot } from '@/util/AppInfo';
import React from 'react';

const AboutSection = ({ slot }: {slot: Slot}) => {
  const { content = {}, nav = [] , action} = slot;
  const { subtitle, title, image, messages } = content;

  return (
    <>
      <section className="about-section style-five py-120 rpy-100" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-fiver-image rel rmb-60 wow fadeInLeft delay-0-2s">
                <img src={image} alt="About" />
                <img className="about-bg-circle" src="/assets/images/about/about-circle-dots.png" alt="About" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
                <div className="section-title">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title ?? '&nbsp;'}</h2> 
                </div>
                {messages && messages.map((item, i) => (
                  <div key={i} className="feature-item">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;