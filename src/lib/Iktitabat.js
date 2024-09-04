// lib/Iktitabat.js

const base = require('./airtable');

export const fetchIktitabat = async () => {
  const iktitabat = [];
  try {
    await base('iktitabat').select({
      view: 'Card',
      sort: [{ field: 'ID', direction: 'desc' }], // Sort by ID descending
    
    }).eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const companyLogo = record.get('Logo');
        iktitabat.push({
          id: record.id,
          companyName: record.get('CompanyName') || null,
          date: record.get('Date') || null,
          connections: record.get('connections') || null,
          banksLogo: record.get('BanksLogo') ? record.get('BanksLogo').map(bank => bank.url) : [],
          link: record.get('Link') || null,
          companyLogo: companyLogo ? companyLogo[0].url : null,
        });
      });
      fetchNextPage(); // Continue fetching the next page of records if available
    });
    console.log('Fetched iktitabat:', iktitabat);
  } catch (error) {
    console.error('Error fetching iktitabat:', error);
  }
  return iktitabat;
};
