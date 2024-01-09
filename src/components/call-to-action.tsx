import React from 'react';
import {Slot} from '@/util/AppInfo'

const CallToAction = ({ slot }: {slot: Slot}) => {
  const { content = {}, nav = [] , action} = slot;

  return (
    <>
      <section className="call-to-action bg-dark-primary pt-40 pb-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="section-title-with-btn">
                <div className="section-title text-white mb-15">
                  <h2>{content?.message}</h2>
                </div>
                {action ? <a href={action['href']} className="theme-btn style-two mb-25">{action.title}</a>
                : ''}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;