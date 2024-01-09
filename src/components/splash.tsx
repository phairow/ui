import Link from "next/link";
import { Slot } from "@/util/AppInfo";

const Splash = ({ slot }: {slot: Slot}) => {
  const { content = {}, nav = [] , action} = slot;
  const backgroundImage = content['splashImage'] ?? '/assets/images/hero/hero-five.jpg';
  const title = content['splashText'] ?? 'Mobile and Web Application Development';
  const listHeading = content['splashListHeading'] ?? 'Empower Your Business';
  const listItems = content['highlights'] ?? [];// ?? ['IT Solutions','Application Development','Custom Software Development'];
  const actionOne: {title: string, href: string} | undefined = content['actionOne'];// ?? { "title": "Meet With Us", "href": "/meet" };
  const actionTwo: {title: string, href: string} | undefined = content['actionTwo'];// ?? { "title": "Learn More", "href": "/learn" };

  return (
    <>
      <section className="hero-section-five rel pt-75" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="hero-content-five mr-10 rmr-0 py-50 rpy-25">
                <h1 >{title}</h1>
                <span className="sub-title d-block">{listHeading}</span>
                <ul className="list-style-one py-10">
                  {listItems.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <div className="hero-btns mt-35">
                  {actionOne ? <Link href={actionOne.href} className="theme-btn mr-15 mb-10">
                    {actionOne.title}
                  </Link> : ''}
                  {actionTwo ? <Link href={actionTwo.href} className="theme-btn style-six mb-10">
                    {actionTwo.title}
                  </Link> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-five-image bgs-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </section>
    </>
  );
};

export default Splash;
