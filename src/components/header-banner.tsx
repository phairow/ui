
const HeaderBanner = () => {
  return (
    <div className="header-top-wrap bg-lighter py-10">
    <div className="container">
      <div className="header-top">
        <div className="top-left">
          <ul>
            <li>Call Us: <a href="callto:548978478">548978478</a></li>
            <li>Email us: <a href="mailto:demo@example.com">demo@example.com</a></li>
            <li>Our address: 45 Dream street Austria</li>
          </ul>
        </div>
        <div className="top-right">
          <div className="office-time">
            <i className="far fa-clock"></i><span>08:00 am - 06:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeaderBanner;
