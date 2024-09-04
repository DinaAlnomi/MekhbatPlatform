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

  const sortByDate = (platforms, order) => 
    platforms.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === 'الأجدد' ? dateB - dateA : dateA - dateB;
    });

  const filteredAndSortedPlatforms = sortByDate(
    filters.profitDistribution && filters.profitDistribution !== 'الكل'
      ? financePlatforms.filter(platform => platform.profitType === filters.profitDistribution)
      : financePlatforms,
    filters.date === 'الأقدم' ? 'الأقدم' : 'الأجدد'
  );

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
            {filteredAndSortedPlatforms.map((platform) => (
              <div key={platform.id} className={styles.detailedCard}>
                <div className={styles.cardLogo}>
                  <img src={platform.companyLogo} alt="Company Logo" />
                </div>
                <div className={styles.cardContent}>
                  <h3>{platform.companyName}</h3>
                  <div className={styles.separator}></div>
                  <p className={styles.label}>{platform.profitType}</p>
                  <p className={styles.label}>{platform.connections}</p>
                  <p className={styles.label}>{platform.date}</p>
                  <div className={styles.labelGroup}>
                    <p className={styles.label}>{platform.benefitPercentage}</p>
                    <p className={styles.label}>{platform.opportunitySize}</p>
                  </div>
                  <button>اعرض الفرصة</button>
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
