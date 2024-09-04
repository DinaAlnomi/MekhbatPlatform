import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; 

import '../styles/globals.css'; 
import { fetchIktitabat } from '../lib/Iktitabat';

const Iktitabat = ({ iktitabat }) => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container">
      <Head>
        <meta name="robots" content="noindex" />
        <title>الاكتتابات</title>
      </Head>
      
      <Header />
      <main className="main">
      <div className="cardsSection">
        <div className="sectionHeader">
          <h2>فرص الاكتتاب المطروحة</h2>
        </div>
        <div className={styles.iktitabatCardRowCustom}>
          {iktitabat.map((iktitaba) => (
            <div key={iktitaba.id} className={styles.card}>
              <div className={styles.cardLogo}>
                <img src={iktitaba.companyLogo} alt="Company Logo" />
              </div>
              <h3>{iktitaba.companyName}</h3>
              <div className={styles.cardContent}>
                <div className={styles.separator}></div>
                <p>{iktitaba.connections}</p>
                <p className={styles.label}>{iktitaba.date}</p>
                <div className={styles.banks}>
                  <p>البنوك المستلمة</p>
                  <div className={styles.bankLogos}>
                    {iktitaba.banksLogo.map((logo, index) => (
                      <img key={index} src={logo} alt={`Bank ${index + 1}`} />
                    ))}
                  </div>
                </div>
                <button onClick={() => handleButtonClick(iktitaba.link)}>اعرض الفرصة</button>
              </div>
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
    const iktitabat = await fetchIktitabat();
    return {
      props: {
        iktitabat,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        iktitabat: [],
      },
    };
  }
}

export default Iktitabat;
