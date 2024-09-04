import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { fetchWallets } from '../lib/digitalWallets';

const Wallets = ({ wallets }) => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container">
      <Head>
        <meta name="robots" content="noindex" />
        <title>المحافظ الرقمية</title>
      </Head>
      <Header />
      <main className="main">
        <div className="cardsSection">
          <div className="sectionHeader">
            <h2>المحافظ الرقمية</h2>
          </div>
          <div className={styles.cardColumn}>
            {wallets.map((wallet) => (
              <div key={wallet.id} className={styles.simpleCard}>
                <div className={styles.cardLogo}>
                  {wallet.companyLogo ? (
                    <img src={wallet.companyLogo} alt={`${wallet.companyName} Logo`} />
                  ) : (
                    <div>No Logo Available</div>
                  )}
                </div>
                <h3>{wallet.companyName}</h3>
                <button 
                  className={styles.walletsNoLinkStyle } 
                  onClick={() => handleButtonClick(wallet.websiteLink)}
                >
                  اعرض الفرصة
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const wallets = await fetchWallets();
    return {
      props: {
        wallets,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        wallets: [],
      },
    };
  }
}

export default Wallets;
