import React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FilterDownIcon from '/public/images/FilterDownIcon.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const Filters = ({ filters, handleInputChange }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const commonStyles = { width: '152px', height: '44px', backgroundColor: '#F6F4F2',borderRadius: '8px',
    fontFamily: 'IBMPlexSansArabic, sans-serif', marginTop: '-70px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

    '& .MuiOutlinedInput-root': {
      '& fieldset': {   border: 'none',  }, },

    '& .MuiSelect-select': {  direction: 'rtl',  paddingRight: '16px',  paddingTop: '10px',  paddingBottom: '10px',
     fontFamily: 'IBMPlexSansArabic, sans-serif', fontSize: '16px', textAlign: 'right', fontWeight: 'bold', lineHeight: 'normal', },

    '& .MuiSelect-icon': { backgroundImage: `url(${FilterDownIcon.src})`,  width: '9px', height: '9px',right: '128px',
      top: '18px', transform: 'rotate(0deg)',transition: 'transform 0.2s ease-in-out',  },

    '& .MuiSelect-iconOpen': {   transform: 'rotate(180deg)',},

    '& .MuiMenuItem-root': {  textAlign: 'right', },
    '& .MuiPaper-root': {backgroundColor: '#F6F4F2', },

    '@media (max-width: 600px)':  {  width: '152px', height: '44px',

      '& .MuiSelect-select': {  fontSize: '14px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px', },
     
       
 '@media (max-width: 600px)': {position: 'relative', // Add positioning context
  top: '60px', left: '30px',},

    },
  };

  const menuItemStyles = {
    fontFamily: 'IBMPlexSansArabic, sans-serif',
    fontSize: '10px',
    direction: 'rtl',
    color: '#1B4242',
    fontWeight: '520',

    '@media (max-width: 600px)': {
      fontSize: '9px',
    },
  };

  const filtersContainerStyles = {
    display: 'flex',
    gap: '16px',

    '@media (max-width: 600px)': {
      gap: '24px',          // Increase gap between filters on mobile
      marginTop: '239px !important',   // Move the filters down on mobile
    },
  };

  const labelStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '47px',
    marginTop: '-60px',
    display: isMobile ? 'none' : 'block',
  };

  return (
    <div className="filtersContainer" style={filtersContainerStyles}>
      {/* توزيع الربح Filter */}
      <FormControl sx={commonStyles}>
        <Select
          id="profit-distribution-select"
          name="profitDistribution"
          value={filters.profitDistribution}
          displayEmpty
          onChange={handleInputChange}
          IconComponent="div"
        >
          <MenuItem disabled sx={{ display: 'none' }} value="">
            توزيع الربح
          </MenuItem>
          <MenuItem sx={menuItemStyles} value="الكل">الكل</MenuItem>
          <MenuItem sx={menuItemStyles} value="شهري">شهري</MenuItem>
          <MenuItem sx={menuItemStyles} value="ربع سنوي">ربع سنوي</MenuItem>
          <MenuItem sx={menuItemStyles} value="نصف سنوي">نصف سنوي</MenuItem>
          <MenuItem sx={menuItemStyles} value="سنوي">سنوي</MenuItem>
        </Select>
      </FormControl>

      {/* التاريخ Filter */}
      <FormControl sx={commonStyles}>
        <Select
          id="date-select"
          name="date"
          value={filters.date}
          displayEmpty
          onChange={handleInputChange}
          IconComponent="div"
        >
          <MenuItem disabled sx={{ display: 'none' }} value="">
            التاريخ
          </MenuItem>
          <MenuItem sx={menuItemStyles} value="الكل">الكل</MenuItem>
          <MenuItem sx={menuItemStyles} value="الأجدد">الأحدث</MenuItem>
          <MenuItem sx={menuItemStyles} value="الأقدم">الأقدم</MenuItem>
        </Select>
      </FormControl>

      {/* التصنيف حسب Label */}
      <span style={labelStyles}>
        التصنيف حسب
      </span>
    </div>
  );
};

export default Filters;
