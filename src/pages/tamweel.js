import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import styles from '../styles/Home.module.css';
import { fetchTamweel } from '../lib/tamweel';
import '../styles/globals.css';

const Tamweel = ({ financePlatforms }) => {
  const [filters, setFilters] = useState({
    date: '', 
    profitDistribution: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const sortByDate = (tamweelList, order) => 
    tamweelList.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === 'الأجدد' ? dateB - dateA : dateA - dateB;
    });

  const filteredAndSortedTamweel = sortByDate(
    filters.profitDistribution && filters.profitDistribution !== 'الكل'
      ? financePlatforms.filter(tamweel => tamweel.profitType === filters.profitDistribution)
      : financePlatforms,
    filters.date === 'الأقدم' ? 'الأقدم' : 'الأجدد'
  );

  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="container">
      <Head>
        <meta name="robots" content="noindex" />
        <title>منصات التمويل</title>
        <meta name="description" content="منصات التمويل" />
      </Head>
      <Header />
      <main className="main">
        <div className="cardsSection">
          <div className="sectionHeader">
            <h2>منصات التمويل</h2>
            <Filters filters={filters} handleInputChange={handleInputChange} />
          </div>
          <div className={styles.tamweelCardColumn}>
            {filteredAndSortedTamweel.map((tamweel) => (
              <div key={tamweel.id} className={styles.detailedCard}>
                <div className={styles.cardLogo}>
                  <img src={tamweel.companyLogo} alt="Company Logo" />
                </div>
                <div className={styles.cardContent}>
                  <h3>{tamweel.companyName}</h3>
                  <div className={styles.separator}></div>
                  <p className={styles.label}>{tamweel.profitType}</p>
                  <p className={styles.label}>{tamweel.connections}</p>
                  <p className={styles.label}>{tamweel.date}</p>
                  <div className={styles.labelGroup}>
                    <p className={styles.label}>{tamweel.benefitPercentage}</p>
                    <p className={styles.label}>{tamweel.opportunitySize}</p>
                  </div>
                  <button 
                    className={styles.walletsNoLinkStyle} 
                    onClick={() => handleButtonClick(tamweel.link)}
                  >
                    اعرض الفرصة
                  </button>
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
    const financePlatforms = await fetchTamweel();
    return {
      props: {
        financePlatforms,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        financePlatforms: [],
      },
    };
  }
}

export default Tamweel;
