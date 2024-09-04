import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Header.module.css';


const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu closed by default

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/closed
  };

  return (
    
    <>
      <div className={styles['top-bar']}></div>
      <div className={styles['separator-line']}></div>
      <header className={styles.header}>
        <Link href="/" className={styles.logoLink}>
          <img src="images/primary logo.svg" alt="Logo" className={styles.logo} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/tamweel" legacyBehavior>
                <a className={`${styles.navItem} ${pathname === '/tamweel' ? styles.activeNavItem : ''}`}>
                  منصات التمويل
                </a>
              </Link>
            </li>
            <li>
              <Link href="/wallets" legacyBehavior>
                <a className={`${styles.navItem} ${pathname === '/wallets' ? styles.activeNavItem : ''}`}>
                  المحافظ الرقمية
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Iktitabat" legacyBehavior>
                <a className={`${styles.navItem} ${pathname === '/Iktitabat' ? styles.activeNavItem : ''}`}>
                  الاكتتابات
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.hamburgerIcon}></div>
          <div className={styles.hamburgerIcon}></div>
          <div className={styles.hamburgerIcon}></div>
        </div>
      </header>
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}  // Ensure it's off-screen when closed
      >
       <div className={styles.mobileMenuHeader}>
          <Link href="/" onClick={toggleMenu} className={styles.mobileLogoLink}>
            <img src="images/white logo.svg" alt="Logo" className={styles.mobileLogo} />
          </Link>
       </div>

        <ul className={styles.mobileNavList}>
          <li onClick={toggleMenu}>
            <Link href="/Iktitabat" legacyBehavior>
              <a className={`${styles.mobileNavItem} ${pathname === '/Iktitabat' ? styles.activeNavItem : ''}`}>
                الاكتتابات
              </a>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/wallets" legacyBehavior>
              <a className={`${styles.mobileNavItem} ${pathname === '/wallets' ? styles.activeNavItem : ''}`}>
                المحافظ الرقمية
              </a>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/tamweel" legacyBehavior>
              <a className={`${styles.mobileNavItem} ${pathname === '/tamweel' ? styles.activeNavItem : ''}`}>
                منصات التمويل
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;