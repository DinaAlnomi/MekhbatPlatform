import React from 'react';

const Footer = () => {
  const handleLogoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const footerStyle = {
    backgroundColor: '#1B4242',
    width: '100vw',
    height: '188px',
    position: 'relative',
    bottom: '0',
    fontFamily: "'IBMPlexSansArabic', sans-serif",
  };

  const separatorStyle = {
    height: '10px',
    backgroundColor: '#DAD3BE',
    position: 'absolute',
    left: '233px',
    right: '233px',
    bottom: '188px',
    transform: 'translateY(50%)',
  };

  const logosStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '32px',
    left: '0',
    right: '0',
    height: '50px',
    gap: '24px',
    marginBottom: '24px',
  };

  const logoContainerStyle = {
    position: 'relative',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const circleStyles = {
    zIndex: 1,
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  };

  const logoStyle = {
    width: '18px',
    height: 'auto',
    zIndex: 2,
  };

  const dotStyle = {
    position: 'absolute',
    bottom: '63px',
    left: 'calc(50% - 4px)',
    width: '8px',
    height: '8px',
    backgroundColor: 'white',
    borderRadius: '50%',
  };

  const platformTextStyle = {
    position: 'absolute',
    bottom: '52px',
    color: 'white',
    fontFamily: "'IBMPlexSansArabic', sans-serif",
    fontSize: '20px',
  };

  const platformText2Style = {
    ...platformTextStyle,
    right: 'calc(50% + 24px)',
  };

  const platformText1Style = {
    ...platformTextStyle,
    left: 'calc(50% + 24px)',
  };

  const linkedinContainerStyle = {
    ...logoContainerStyle,
    backgroundColor: '#3F4B4B',
  };

  const xContainerStyle = {
    ...logoContainerStyle,
    backgroundColor: '#DAD3BE',
  };

  const emailContainerStyle = {
    ...logoContainerStyle,
    backgroundColor: '#89A295',
  };

  return (
    <footer style={footerStyle}>
      <style>
        {`
          @media (max-width: 600px) {
            .dot {
              width: 4px;
              height: 4px;
              left: calc(50%);
            }
            .platform-text, .platform-text2 {
              font-size: 10px !important;
              bottom: 57px !important;
            }
            .platform-text2 {
              right: calc(50% + 24px);
            }
            .platform-text {
              left: calc(50% + 24px);
            }
            .separator {
              left: 0 !important;
              right: 0 !important;
            }
          }
        `}
      </style>
      <div style={separatorStyle} className="separator"></div>
      <div style={logosStyle} className="logos">
        <div
          style={linkedinContainerStyle}
          onClick={() => handleLogoClick('https://www.linkedin.com/in/mekhbat-platform')}
        >
          <div style={circleStyles}></div>
          <img src="images/linkedin icon.svg" alt="LinkedIn Logo" style={logoStyle} />
        </div>
        <div
          style={xContainerStyle}
          onClick={() => handleLogoClick('https://x.com/MekhbatPlatform')}
        >
          <div style={circleStyles}></div>
          <img src="images/x icon.svg" alt="X Logo" style={logoStyle} />
        </div>
        <div
          style={emailContainerStyle}
          onClick={() => handleLogoClick('mailto:contact@mekhbat.com')}
        >
          <div style={circleStyles}></div>
          <img src="images/email icon.svg" alt="Email Logo" style={logoStyle} />
        </div>
      </div>
      <div style={platformText1Style} className="platform-text">
        منصة مخبات 2024
      </div>
      <div style={platformText2Style} className="platform-text2">
        أحد مشاريع منصة هاكاثونات
      </div>
      <div style={dotStyle} className="dot"></div>
    </footer>
  );
};

export default Footer;
