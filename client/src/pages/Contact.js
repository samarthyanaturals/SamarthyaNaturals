import React from 'react';
import Lay from '../components/Layout/Lay';

const Contact = () => {
  const centerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '1.2em',
    lineHeight: '1.5em',
  };

  return (
    <Lay title={"Contact us - ShipShop"}>
      <div style={centerStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={textStyle}>Address: Chak 6.s.t.b., Teh. Sri vijaynagar, distt. Anupgarh, state Rajasthan</p>
        <p style={textStyle}>Phone: +91 83026 57922</p>
        <p style={textStyle}>Email: samarthyanaturals@mail.com</p>
      </div>
    </Lay>
  );
}

export default Contact;
