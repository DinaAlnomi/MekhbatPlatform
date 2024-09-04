// lib/tamweel.js
const base = require('./airtable');

export const fetchTamweel = async () => {
    const tamweel = [];
    try {
        await base('tamweel').select({
            view: 'DetailedCard',
            sort: [{ field: 'Date', direction: 'desc' }],

        }).eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const companyLogo = record.get('Logo');
                tamweel.push({
                    id: record.id,
                    companyName: record.get('CompanyName') || null,
                    date: record.get('Date') || null,
                    connections: record.get('connections') || null,
                    profitType: record.get('ProfitType') || null,
                    opportunitySize: record.get('OpportunitySize') || null,
                    benefitPercentage: record.get('BenefitPercentage') || null,
                    link: record.get('Link') || null,
                    companyLogo: companyLogo ? companyLogo[0].url : null,
                });
            });
            fetchNextPage(); // Continue fetching the next page of records if available
        });

        // Manually sort by ID in descending order
        tamweel.sort((a, b) => b.date.localeCompare(a.date));

        console.log('Fetched tamweel:', tamweel);
    } catch (error) {
        console.error('Error fetching tamweel:', error);
    }
    return tamweel;
};
