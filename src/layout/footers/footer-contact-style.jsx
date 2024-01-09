import React from 'react';

const FooterContactStyle = ({ style_six, home_8 }) => {
  return (
    <>
        {/* <><li><i className="fas fa-map-marker-alt"></i> 1791 Yorkshire Circle Kitty Hawk, NC 27949</li>
        <li><i className="fas fa-clock"></i> Mon-Sat 9:00 - 7:00</li>
        <li><i className="fas fa-phone-alt"></i> <a href="callto:+012-345-6789">+012-345-6789</a></li>
        <li><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li></> */}


      {
         <>
          <li><i className="fas fa-phone-alt"></i>
            <span><b>Phone : </b> <a href="callto:425-305-0692">(425) 305-0692</a></span>
          </li>
          <li><i className="fas fa-envelope">
          </i><span><b>Email : </b> <a href="mailto:simplypipers@hotmail.com">simplypipers@hotmail.com</a></span>
          </li>
          <li><i className="fas fa-map-marker-alt">
          </i><span><b>Address : </b>238 N Street Southeast
            Auburn, WA 98002
            USA</span>
          </li>
        </>
      }
    </>
  );
};

export default FooterContactStyle;