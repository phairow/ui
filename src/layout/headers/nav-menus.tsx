import Link from 'next/link';
import { NavLink } from '@/util/AppInfo';

const NavMenus = ({nav}: { nav: NavLink[]}) => {
  const links: JSX.Element[] = [];

  if (nav) {
    nav.map((navLink, i) => {
      links.push(
        (navLink.links?.length ? 
          <li className="dropdown menu-last"><a href={navLink.href}>{navLink.title}</a>
            <ul>
              {navLink.links.map((navSubLink, i) => (
                <li key={i}>
                  <Link href={`${navSubLink.href}`}>
                    {navSubLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li> : 
          <li key={i}>
            <Link href={`${navLink.href}`}>
              {navLink.title}
            </Link>
          </li>
        )
      )
    }) 
  }

  return (
    <>
      <ul className="navigation clearfix">
        {links}
        {/* <li className="current dropdown"><a href="#">Home</a>
          <ul>
            {menuData.homes.map((menu, i) => (
              <li key={i} className="dropdown"><a href="#">{menu.title}</a>
                <ul>
                  {menu.links.map((link, i) => (
                    <li key={i}>
                      <Link href={`${link.link}`}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>

        <li className="dropdown"><a href="#">{menuData.about_page.title}</a>
          <ul>
            {menuData.about_page.links.map((page, i) => (
              <li key={i}>
                <Link href={`${page.link}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="dropdown"><a href="#">{menuData.ser_page.title}</a>
          <ul>
            {menuData.ser_page.links.map((page, i) => (
              <li key={i}>
                <Link href={`${page.link}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        
        <li className="dropdown"><a href="#">pages</a>
          <ul>
            {menuData.pages.map((page, i) => (
              <li key={i} className={`${page.dropdownItems ? "dropdown" : ''}`}>
                <Link href={`${page.link}`}>
                  {page.title}
                </Link>

                <ul>
                  {page.dropdownItems && page.dropdownItems.map((menu, i) => (
                    <li key={i}>
                      <Link href={`${menu.link}`}>
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="dropdown for-mega menu-last"><a href="#">Elements</a>
          <div className="megamenu">
            <div className="container">
              <div className="row">
                {menuData.mega_menus.map((menu, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <h5 className="mega-title">{menu.title}</h5>
                    <ul>
                      {menu.sub_menus.map((s_menu, i) => (
                        <li key={i}>
                          <Link href={`${s_menu.link}`}>
                            {s_menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li className="dropdown menu-last"><a href="#">{menuData.blog_page.title}</a>
          <ul>
            {menuData.blog_page.links.map((page, i) => (
              <li key={i}>
                <Link href={`${page.link}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </li> */}
      </ul>
    </>
  );
};

export default NavMenus;