import React, { CSSProperties } from 'react';

class Box extends React.Component {
  render() {
    const containerStyle: CSSProperties = {
      display: 'flex',
      position: 'absolute',
      top: '107%',
      left: '43%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };

    const boxStyle: CSSProperties = {
      borderRadius: '15px',
      width: '900px',
      height: '100px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    };

    const containerStyle1: CSSProperties = {
      display: 'flex',
      position: 'absolute',
      top: '125%',
      left: '43%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };

    const boxStyle1: CSSProperties = {
      borderRadius: '15px',
      width: '900px',
      height: '100px',
      backgroundColor: '#d4ccb8',
      border: '2px solid #34495e',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    };

    const textStyle: CSSProperties = {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: '20px',
      lineHeight: '1.6',
      fontWeight: '400',
      fontFamily: 'Times New Roman, serif',
      margin: '0',
    };

    return (
      <div>
        <div style={containerStyle}>
          <p style={textStyle}>
            Developing and optimizing automated testing services for software products to enhance efficiency and bug identification, using tools like Jenkins and data science programming languages.
          </p>
        </div>

        <div style={containerStyle1}>
          <p style={textStyle}>
            Designing and implementing a vendor and supplies website with dynamic user interfaces, utilizing MongoDB, Node.js, PUG, and JavaScript to enhance user experience and data management.
          </p>
        </div>
      </div>
    );
  }
}

export default Box;
