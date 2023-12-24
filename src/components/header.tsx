import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

import logo from "@/images/ratekl_logo_header.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href={"/"}>
          <Image src={logo} alt="ratekl logo" />
        </Link>
      </div>
      <div className={styles.headerRight}>
        Hello
      </div>
    </div>
  );
};

export default Header;
