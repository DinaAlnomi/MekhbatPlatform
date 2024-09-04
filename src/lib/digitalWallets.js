//lib/digitalWallets.js
const base = require('./airtable');

export const fetchWallets = async () => {
  const wallets = [];
  try {
    await base('wallets').select({
      view: 'SimpleCard', 
      sort: [{ field: 'ID', direction: 'desc' }],
    }).eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const companyLogo = record.get('CompanyLogo');
        console.log('Fetched companyLogo:', companyLogo);

        wallets.push({
          id: record.id,
          companyName: record.get('CompanyName') || null,
          websiteLink: record.get('Link') || null,
          companyLogo: companyLogo ? companyLogo[0].url : null,
        });
      });
      fetchNextPage();
    });
  } catch (error) {
    console.error('Error fetching wallets:', error);
  }
  return wallets;
};
