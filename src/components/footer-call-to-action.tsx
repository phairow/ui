import { Slot } from '@/util/AppInfo';
import React from 'react';

const FooterCallToAction = ({ slot }: {slot: Slot}) => {
  const { content = {}, nav = [] , action} = slot;
  return (
    <div className="footer-sign-up">
      <div className="container">
        <div className="footer-signup-inner bg-light-secondary pt-40 pb-25 px-60">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-white mb-25 rmb-35">
                <h2>{content.message}</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {action && action['type'] === 'email' ?
              <form className="sign-in-form mb-15">
                <input type="email" placeholder="Email Address" required />
                <button className="theme-btn" type="submit">{action.title}</button>
              </form>
              : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCallToAction;